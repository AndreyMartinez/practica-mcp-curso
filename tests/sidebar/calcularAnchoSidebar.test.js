import { test } from "node:test";
import assert from "node:assert/strict";
import { calcularAnchoSidebar } from "../../src/sidebar/calcularAnchoSidebar.js";

test("tarea-22: calcularAnchoSidebar", () => {
  assert.equal(calcularAnchoSidebar(true), 64);
  assert.equal(calcularAnchoSidebar(false), 240);
});
