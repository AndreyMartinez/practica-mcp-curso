import { test } from "node:test";
import assert from "node:assert/strict";
import { calcularItemsVisibles } from "../../src/sidebar/calcularItemsVisibles.js";

test("tarea-30: calcularItemsVisibles", () => {
  assert.equal(calcularItemsVisibles(500, 48), 10);
  assert.equal(calcularItemsVisibles(40, 48), 0);
  assert.equal(calcularItemsVisibles(0, 48), 0);
});
