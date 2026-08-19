import { test } from "node:test";
import assert from "node:assert/strict";
import { debeMostrarDivisor } from "../../src/sidebar/debeMostrarDivisor.js";

test("tarea-28: debeMostrarDivisor", () => {
  const a = { seccion: "General" };
  const b = { seccion: "General" };
  const c = { seccion: "Administración" };
  assert.equal(debeMostrarDivisor(a, null), false);
  assert.equal(debeMostrarDivisor(b, a), false);
  assert.equal(debeMostrarDivisor(c, b), true);
});
