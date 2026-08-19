import { test } from "node:test";
import assert from "node:assert/strict";
import { debeMostrarRecordarme } from "../../src/login/debeMostrarRecordarme.js";

test("tarea-15: debeMostrarRecordarme", () => {
  assert.equal(debeMostrarRecordarme(31), true);
  assert.equal(debeMostrarRecordarme(30), false);
  assert.equal(debeMostrarRecordarme(0), false);
});
