const { describe, it, before, after } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const express = require("express");
const { createAtlasEditorRouter } = require("./router");
const { validateOp } = require("./validate-op");

const SECRET = "test-secret";

/** A server with the router on a free port and a fresh data dir. */
async function startServer(dataDir) {
  const app = express();
  app.use("/atlas-editor", createAtlasEditorRouter({ secret: SECRET, dataDir }));
  const server = await new Promise((resolve) => {
    const s = app.listen(0, () => resolve(s));
  });
  const base = `http://127.0.0.1:${server.address().port}/atlas-editor`;
  const call = async (method, url, body, headers = { "X-Atlas-Editor": SECRET }) => {
    const res = await fetch(base + url, {
      method,
      headers: { ...headers, ...(body !== undefined ? { "Content-Type": "application/json" } : {}) },
      body: body === undefined ? undefined : typeof body === "string" ? body : JSON.stringify(body),
    });
    return { status: res.status, body: await res.json() };
  };
  return { server, call };
}

const rename = (name) => ({ type: "place.rename", id: 1, name });

describe("atlas editor log", () => {
  let dataDir;
  let server;
  let call;

  before(async () => {
    dataDir = await fs.mkdtemp(path.join(os.tmpdir(), "atlas-editor-"));
    ({ server, call } = await startServer(dataDir));
  });

  after(async () => {
    server.close();
    await fs.rm(dataDir, { recursive: true, force: true });
  });

  it("refuses requests without the secret", async () => {
    assert.equal((await call("GET", "/log?revision=0", undefined, {})).status, 403);
    assert.equal((await call("GET", "/log?revision=0", undefined, { "X-Atlas-Editor": "wrong" })).status, 403);
  });

  it("hands out seqs in order and returns what the client has not seen yet", async () => {
    const first = await call("POST", "/log", { revision: 1, since: 0, author: "Anna", op: rename("A") });
    assert.equal(first.status, 200);
    assert.equal(first.body.seq, 1);
    // Bert has seen nothing yet: he gets Anna's change along with his own.
    const second = await call("POST", "/log", { revision: 1, since: 0, author: "Bert", op: rename("B") });
    assert.equal(second.body.seq, 2);
    assert.deepEqual(
      second.body.ops.map((e) => [e.seq, e.author, e.op.name]),
      [
        [1, "Anna", "A"],
        [2, "Bert", "B"],
      ],
    );
    const poll = await call("GET", "/log?revision=1&since=1");
    assert.deepEqual(
      poll.body.ops.map((e) => e.seq),
      [2],
    );
    assert.ok(!Number.isNaN(Date.parse(poll.body.ops[0].at)));
  });

  it("keeps revisions apart", async () => {
    await call("POST", "/log", { revision: 2, author: "Anna", op: rename("X") });
    assert.deepEqual((await call("GET", "/log?revision=2")).body.ops.map((e) => e.seq), [1]);
    assert.deepEqual((await call("GET", "/log?revision=3")).body.ops, []);
  });

  it("gives every one of many concurrent changes its own seq", async () => {
    const results = await Promise.all(Array.from({ length: 25 }, (_, i) => call("POST", "/log", { revision: 4, author: "Anna", op: rename(`N${i}`) })));
    assert.deepEqual(
      results.map((r) => r.body.seq).sort((a, b) => a - b),
      Array.from({ length: 25 }, (_, i) => i + 1),
    );
  });

  it("stores the log as JSON lines and reads it back after a restart", async () => {
    const lines = (await fs.readFile(path.join(dataDir, "rev-4.jsonl"), "utf8")).trim().split("\n");
    assert.equal(lines.length, 25);
    const restarted = await startServer(dataDir);
    try {
      const log = await restarted.call("GET", "/log?revision=4&since=20");
      assert.deepEqual(
        log.body.ops.map((e) => e.seq),
        [21, 22, 23, 24, 25],
      );
      const next = await restarted.call("POST", "/log", { revision: 4, author: "Anna", op: rename("later") });
      assert.equal(next.body.seq, 26);
    } finally {
      restarted.server.close();
    }
  });

  it("takes back only one of the latest ten changes, and only once", async () => {
    for (let i = 0; i < 12; i++) await call("POST", "/log", { revision: 5, author: "Anna", op: rename(`R${i}`) });
    const tooOld = await call("POST", "/log", { revision: 5, author: "Anna", op: { type: "revert", seq: 2 } });
    assert.equal(tooOld.status, 409);
    assert.equal((await call("POST", "/log", { revision: 5, author: "Anna", op: { type: "revert", seq: 12 } })).status, 200);
    // Reverts do not use up the window: #3 is still among the latest ten changes.
    assert.equal((await call("POST", "/log", { revision: 5, author: "Anna", op: { type: "revert", seq: 3 } })).status, 200);
    assert.equal((await call("POST", "/log", { revision: 5, author: "Bert", op: { type: "revert", seq: 12 } })).status, 409);
    assert.equal((await call("POST", "/log", { revision: 5, author: "Bert", op: { type: "revert", seq: 13 } })).status, 409);
  });

  it("rejects malformed changes", async () => {
    const bad = [
      { revision: -1, author: "Anna", op: rename("A") },
      { revision: 6, author: "", op: rename("A") },
      { revision: 6, author: "x".repeat(61), op: rename("A") },
      { revision: 6, author: "Anna", op: { type: "place.delete", id: 1 } },
      { revision: 6, author: "Anna", op: { type: "node.move", id: 1, x: 1, y: "2", dragWays: true } },
      { revision: 6, author: "Anna", op: { type: "way.add", from: { node: 1 }, to: { x: 1, y: 2 }, way: "l", points: [1] } },
    ];
    for (const body of bad) assert.equal((await call("POST", "/log", body)).status, 400, JSON.stringify(body));
    assert.equal((await call("POST", "/log", "{not json")).status, 400);
    const huge = { revision: 6, author: "Anna", op: { type: "way.reshape", polyline: 1, from: 1, points: Array(16000).fill(1.25) } };
    assert.equal((await call("POST", "/log", huge)).status, 413);
    assert.equal((await call("GET", "/log?revision=abc")).status, 400);
    assert.deepEqual((await call("GET", "/log?revision=6")).body.ops, []);
  });

  it("imports a browser log only into an empty revision, keeping its order and reverts", async () => {
    const ops = [
      { author: "Anna", at: "2026-11-01T10:00:00.000Z", op: rename("A") },
      { author: "Anna", at: "2026-11-01T10:01:00.000Z", op: rename("B") },
      { author: "Anna", at: "nonsense", op: { type: "revert", seq: 2 } },
    ];
    const done = await call("POST", "/import", { revision: 7, ops });
    assert.equal(done.status, 200);
    assert.deepEqual(
      done.body.ops.map((e) => [e.seq, e.op.type, e.at.slice(0, 4)]),
      [
        [1, "place.rename", "2026"],
        [2, "place.rename", "2026"],
        [3, "revert", new Date().toISOString().slice(0, 4)],
      ],
    );
    assert.equal((await call("POST", "/import", { revision: 7, ops })).status, 409);
    const badRevert = await call("POST", "/import", { revision: 8, ops: [{ author: "Anna", op: { type: "revert", seq: 5 } }] });
    assert.equal(badRevert.status, 409);
    assert.deepEqual((await call("GET", "/log?revision=8")).body.ops, []);
  });
});

describe("validateOp", () => {
  it("keeps exactly the fields of the op", () => {
    assert.deepEqual(validateOp({ type: "place.rename", id: 3, name: "Gareth", extra: "<script>" }), { type: "place.rename", id: 3, name: "Gareth" });
    assert.deepEqual(validateOp({ type: "way.add", from: { node: 1, x: 5 }, to: { way: 2, x: 1, y: 2 }, way: "f", points: [1, 2] }), {
      type: "way.add",
      from: { node: 1 },
      to: { way: 2, x: 1, y: 2 },
      way: "f",
      points: [1, 2],
    });
  });

  it("checks every op type", () => {
    const valid = [
      { type: "place.add", name: "Neu", placeType: "s", x: 1, y: 2 },
      { type: "place.setType", id: 1, placeType: "l" },
      { type: "node.remove", id: 1, mode: "withWays" },
      { type: "way.reattach", polyline: 1 },
      { type: "node.connect", id: 100001, to: { way: 2, x: 1, y: 1 } },
      { type: "way.reshape", polyline: 1, from: 2, points: [] },
      { type: "way.setType", polyline: 1, way: "m" },
      { type: "way.reverse", polyline: 1 },
      { type: "way.remove", polyline: 1 },
      { type: "revert", seq: 1 },
    ];
    for (const op of valid) assert.deepEqual(validateOp(op), op);
    assert.throws(() => validateOp({ type: "place.add", name: "Neu", placeType: "w", x: 1, y: 2 }));
    assert.throws(() => validateOp({ type: "node.connect", id: 1, to: { x: 1, y: 1 } }));
    assert.throws(() => validateOp({ type: "revert", seq: 0 }));
    assert.throws(() => validateOp({ type: "node.move", id: 1, x: Infinity, y: 0, dragWays: false }));
  });
});
