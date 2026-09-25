const test = require("node:test");
const assert = require("node:assert/strict");

test("Node.js is available", () => {
  assert.equal(typeof process.version, "string");
});