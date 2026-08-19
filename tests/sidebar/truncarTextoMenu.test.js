import { test } from "node:test";
import assert from "node:assert/strict";
import { truncarTextoMenu } from "../../src/sidebar/truncarTextoMenu.js";

test("tarea-29: truncarTextoMenu", () => {
  assert.equal(truncarTextoMenu("Reportes", 20), "Reportes");
  assert.equal(truncarTextoMenu("Configuración avanzada", 10), "Configura…");
});
