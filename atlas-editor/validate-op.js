/**
 * Shape check for the change operations of the Kartenpaket dataset editor (dsa-tools, dev build).
 * The server never replays the log — the editors do — so it only makes sure every stored op is
 * well-formed: known type, the right fields, sane values. Returns a fresh op with exactly those
 * fields, or throws an Error saying what is wrong.
 *
 * Mirror of `EditorOp` in dsa-tools/src/app/atlas/editor/ops.ts — keep both in step.
 */

const PLACE_TYPES = ["m", "c", "t", "s", "v", "l"];
const WAY_TYPES = ["r", "l", "s", "f", "m"];
const REMOVE_MODES = ["keepAsJunction", "withWays"];
const MAX_NAME = 120;
/** Map coordinates are a few thousand pixels; anything far beyond is garbage. */
const MAX_COORD = 1e6;
/** Flat x, y list: up to 2000 points per way. */
const MAX_POINTS = 4000;

const OP_TYPES = [
  "place.add",
  "place.rename",
  "place.setType",
  "node.move",
  "node.remove",
  "way.reattach",
  "node.connect",
  "way.add",
  "way.reshape",
  "way.setType",
  "way.reverse",
  "way.remove",
  "revert",
];

class InvalidOp extends Error {
  status = 400;
}

function fail(message) {
  throw new InvalidOp(message);
}

function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function id(op, key) {
  const value = op[key];
  if (!Number.isSafeInteger(value) || value < 0) fail(`${key}: ganze Zahl ≥ 0 erwartet`);
  return value;
}

function coord(op, key) {
  const value = op[key];
  if (typeof value !== "number" || !Number.isFinite(value) || Math.abs(value) > MAX_COORD) fail(`${key}: Koordinate erwartet`);
  return value;
}

function name(op) {
  const value = op.name;
  if (typeof value !== "string" || value.length > MAX_NAME) fail(`name: Text mit höchstens ${MAX_NAME} Zeichen erwartet`);
  return value;
}

function oneOf(op, key, allowed) {
  const value = op[key];
  if (!allowed.includes(value)) fail(`${key}: einer von ${allowed.join(", ")} erwartet`);
  return value;
}

function points(op) {
  const value = op.points;
  if (!Array.isArray(value) || value.length % 2 !== 0 || value.length > MAX_POINTS) fail("points: Liste aus x, y-Paaren erwartet");
  value.forEach((_, i) => coord(value, i));
  return [...value];
}

/** `{node}` | `{way, x, y}` | `{x, y}` — see WayAnchor in ops.ts. */
function anchor(op, key) {
  const value = op[key];
  if (!isObject(value)) fail(`${key}: Anker erwartet`);
  if ("node" in value) return { node: id(value, "node") };
  if ("way" in value) return { way: id(value, "way"), x: coord(value, "x"), y: coord(value, "y") };
  return { x: coord(value, "x"), y: coord(value, "y") };
}

function validateOp(op) {
  if (!isObject(op)) fail("op: Objekt erwartet");
  if (!OP_TYPES.includes(op.type)) fail(`op.type: unbekannt (${String(op.type).slice(0, 40)})`);
  const type = op.type;
  switch (type) {
    case "place.add":
      return { type, name: name(op), placeType: oneOf(op, "placeType", PLACE_TYPES), x: coord(op, "x"), y: coord(op, "y") };
    case "place.rename":
      return { type, id: id(op, "id"), name: name(op) };
    case "place.setType":
      return { type, id: id(op, "id"), placeType: oneOf(op, "placeType", PLACE_TYPES) };
    case "node.move":
      if (typeof op.dragWays !== "boolean") fail("dragWays: true oder false erwartet");
      return { type, id: id(op, "id"), x: coord(op, "x"), y: coord(op, "y"), dragWays: op.dragWays };
    case "node.remove":
      return { type, id: id(op, "id"), mode: oneOf(op, "mode", REMOVE_MODES) };
    case "node.connect": {
      const to = anchor(op, "to");
      if (!("node" in to) && !("way" in to)) fail("to: Knoten oder Weg erwartet");
      return { type, id: id(op, "id"), to };
    }
    case "way.add":
      return { type, from: anchor(op, "from"), to: anchor(op, "to"), way: oneOf(op, "way", WAY_TYPES), points: points(op) };
    case "way.reshape":
      return { type, polyline: id(op, "polyline"), from: id(op, "from"), points: points(op) };
    case "way.setType":
      return { type, polyline: id(op, "polyline"), way: oneOf(op, "way", WAY_TYPES) };
    case "way.reattach":
    case "way.reverse":
    case "way.remove":
      return { type, polyline: id(op, "polyline") };
    case "revert":
      if (id(op, "seq") < 1) fail("seq: ganze Zahl ≥ 1 erwartet");
      return { type, seq: op.seq };
  }
}

module.exports = { validateOp, InvalidOp, OP_TYPES };
