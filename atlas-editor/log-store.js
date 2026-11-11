const fs = require("node:fs/promises");
const path = require("node:path");

/**
 * Only this many of the latest changes can be taken back — the same window the editor offers
 * (UNDO_WINDOW in atlas-editor.store.ts). Reverting further back would replay everyone's later
 * work on a different base.
 */
const UNDO_WINDOW = 10;

class ConflictError extends Error {
  status = 409;
}

/**
 * The editors' change logs: one append-only JSON-lines file per dataset revision
 * (`rev-<N>.jsonl`, one `{seq, author, at, op}` per line). The server hands out `seq`; writes run
 * one after another, so every seq is used once and lines never interleave. Each log is read once
 * and then served from memory.
 */
class LogStore {
  constructor(dir) {
    this.dir = dir;
    /** revision → Promise<entries[]> */
    this.logs = new Map();
    this.writes = Promise.resolve();
  }

  /** Entries of a revision with a seq above `since`. */
  async since(revision, since) {
    const log = await this.load(revision);
    return log.filter((entry) => entry.seq > since);
  }

  /** Appends one change; resolves to the stored entry. Throws ConflictError for a revert that is not allowed. */
  append(revision, author, op) {
    return this.serialized(async () => {
      const log = await this.load(revision);
      checkRevert(log, op);
      const entry = { seq: (log.at(-1)?.seq ?? 0) + 1, author, at: new Date().toISOString(), op };
      await this.write(revision, [entry]);
      log.push(entry);
      return entry;
    });
  }

  /**
   * Takes over a log that was kept in one browser, before anyone edited live: only into an empty
   * revision. The entries get seq 1…n in their order, so their ids come out as they did there.
   */
  import(revision, items) {
    return this.serialized(async () => {
      const log = await this.load(revision);
      if (log.length) throw new ConflictError("Für diese Revision gibt es schon ein Protokoll");
      const entries = [];
      for (const item of items) {
        checkRevert(entries, item.op);
        entries.push({ seq: entries.length + 1, author: item.author, at: item.at, op: item.op });
      }
      await this.write(revision, entries);
      log.push(...entries);
      return entries;
    });
  }

  serialized(task) {
    const result = this.writes.then(task);
    this.writes = result.catch(() => undefined);
    return result;
  }

  file(revision) {
    return path.join(this.dir, `rev-${revision}.jsonl`);
  }

  async write(revision, entries) {
    await fs.mkdir(this.dir, { recursive: true });
    await fs.appendFile(this.file(revision), entries.map((e) => JSON.stringify(e) + "\n").join(""), "utf8");
  }

  load(revision) {
    let log = this.logs.get(revision);
    if (!log) {
      log = readLog(this.file(revision));
      // A failed read is not cached, so the next request tries again.
      log.catch(() => this.logs.delete(revision));
      this.logs.set(revision, log);
    }
    return log;
  }
}

async function readLog(file) {
  let text;
  try {
    text = await fs.readFile(file, "utf8");
  } catch (e) {
    if (e.code === "ENOENT") return [];
    throw e;
  }
  const entries = [];
  for (const line of text.split("\n")) {
    if (!line.trim()) continue;
    try {
      entries.push(JSON.parse(line));
    } catch {
      // Only a write cut off by a crash can leave a broken line; it never got a reply.
      console.warn(`atlas-editor: skipped a broken line in ${file}`);
    }
  }
  return entries;
}

/** A revert must target one of the latest UNDO_WINDOW changes (reverts do not count) that is not taken back yet. */
function checkRevert(log, op) {
  if (op.type !== "revert") return;
  const latest = log.filter((e) => e.op.type !== "revert").slice(-UNDO_WINDOW);
  if (!latest.some((e) => e.seq === op.seq)) {
    throw new ConflictError(`Änderung #${op.seq} gehört nicht zu den letzten ${UNDO_WINDOW} und kann nicht mehr zurückgenommen werden`);
  }
  if (log.some((e) => e.op.type === "revert" && e.op.seq === op.seq)) throw new ConflictError(`Änderung #${op.seq} ist schon zurückgenommen`);
}

module.exports = { LogStore, ConflictError, UNDO_WINDOW };
