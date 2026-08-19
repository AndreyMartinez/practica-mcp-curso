import { test } from "node:test";
import assert from "node:assert/strict";
import { obtenerIconoPorTipo } from "../../src/sidebar/obtenerIconoPorTipo.js";

test("tarea-27: obtenerIconoPorTipo", () => {
  assert.equal(obtenerIconoPorTipo("dashboard"), "home");
  assert.equal(obtenerIconoPorTipo("usuarios"), "users");
  assert.equal(obtenerIconoPorTipo("otra-cosa"), "circle");
});
