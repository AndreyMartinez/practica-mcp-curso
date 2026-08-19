import { test } from "node:test";
import assert from "node:assert/strict";
import { contarIntentosFallidos } from "../../src/login/contarIntentosFallidos.js";

test("tarea-9: contarIntentosFallidos", () => {
  assert.equal(contarIntentosFallidos(0), 1);
  assert.equal(contarIntentosFallidos(4), 5);
});
