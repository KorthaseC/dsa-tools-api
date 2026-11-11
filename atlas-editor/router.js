const crypto = require("node:crypto");
const express = require("express");
const { LogStore, ConflictError } = require("./log-store");
const { validateOp, InvalidOp } = require("./validate-op");

const MAX_AUTHOR = 60;
const MAX_REVISION = 1_000_000;
const MAX_IMPORT = 5000;

/**
 * Shared change log of the Kartenpaket dataset editor (dsa-tools dev build, dev.dsa-tools.de).
 * Caddy proxies `/api/atlas-editor/*` from the dev site — behind its basic auth — and adds the
 * `X-Atlas-Editor` secret; the public api.dsa-tools.de site strips that header. Requests without
 * the secret are refused.
 *
 *   GET  /log?revision=N&since=S          → { ops: entries with seq > S }
 *   POST /log    { revision, since?, author, op } → { seq, ops: entries with seq > since (incl. the new one) }
 *   POST /import { revision, ops: [{ author, at, op }] } → { ops } — only into an empty revision
 *
 * `options.secret` (required) and `options.dataDir` (where the rev-N.jsonl files live).
 */
function createAtlasEditorRouter({ secret, dataDir }) {
  if (!secret) throw new Error("atlas-editor: secret missing");
  const store = new LogStore(dataDir);
  const router = express.Router();
  const expected = Buffer.from(secret);

  router.use((req, res, next) => {
    const given = Buffer.from(req.get("X-Atlas-Editor") ?? "");
    if (given.length !== expected.length || !crypto.timingSafeEqual(given, expected)) return res.status(403).json({ error: "Kein Zugriff" });
    res.set("Cache-Control", "no-store");
    next();
  });

  router.get(
    "/log",
    handle(async (req, res) => {
      const revision = int(req.query.revision, "revision", MAX_REVISION);
      const since = req.query.since === undefined ? 0 : int(req.query.since, "since");
      res.json({ ops: await store.since(revision, since) });
    }),
  );

  router.post(
    "/log",
    express.json({ limit: "64kb" }),
    handle(async (req, res) => {
      const body = req.body ?? {};
      const revision = int(body.revision, "revision", MAX_REVISION);
      const author = authorOf(body.author);
      const op = validateOp(body.op);
      const entry = await store.append(revision, author, op);
      const since = body.since === undefined ? entry.seq - 1 : int(body.since, "since");
      res.json({ seq: entry.seq, ops: await store.since(revision, since) });
    }),
  );

  router.post(
    "/import",
    express.json({ limit: "4mb" }),
    handle(async (req, res) => {
      const body = req.body ?? {};
      const revision = int(body.revision, "revision", MAX_REVISION);
      if (!Array.isArray(body.ops) || !body.ops.length || body.ops.length > MAX_IMPORT) throw new BadRequest(`ops: 1 bis ${MAX_IMPORT} Einträge erwartet`);
      const items = body.ops.map((item, i) => {
        try {
          return { author: authorOf(item?.author), at: timeOf(item?.at), op: validateOp(item?.op) };
        } catch (e) {
          throw new BadRequest(`Eintrag ${i + 1}: ${e.message}`);
        }
      });
      res.json({ ops: await store.import(revision, items) });
    }),
  );

  // Body parser errors (too large, broken JSON) and everything else, as JSON.
  router.use((err, req, res, _next) => {
    const status = err.status ?? err.statusCode ?? 500;
    if (status >= 500) console.error("atlas-editor:", err);
    res.status(status).json({ error: status === 413 ? "Änderung zu groß" : status >= 500 ? "Serverfehler" : err.message });
  });

  return router;
}

class BadRequest extends Error {
  status = 400;
}

/** Wraps a handler: a malformed request is a 400, a refused revert or import a 409. */
function handle(fn) {
  return (req, res, next) =>
    fn(req, res).catch((e) => {
      if (e instanceof BadRequest || e instanceof InvalidOp || e instanceof ConflictError) return res.status(e.status).json({ error: e.message });
      next(e);
    });
}

function int(value, key, max = Number.MAX_SAFE_INTEGER) {
  const n = typeof value === "string" && /^\d+$/.test(value) ? Number(value) : value;
  if (!Number.isSafeInteger(n) || n < 0 || n > max) throw new BadRequest(`${key}: ganze Zahl ≥ 0 erwartet`);
  return n;
}

function authorOf(value) {
  const author = typeof value === "string" ? value.trim() : "";
  if (!author || author.length > MAX_AUTHOR) throw new BadRequest(`author: Name mit 1 bis ${MAX_AUTHOR} Zeichen erwartet`);
  return author;
}

/** Imported entries keep their time if it is a real one. */
function timeOf(value) {
  const time = typeof value === "string" ? Date.parse(value) : NaN;
  return Number.isFinite(time) ? new Date(time).toISOString() : new Date().toISOString();
}

module.exports = { createAtlasEditorRouter };
