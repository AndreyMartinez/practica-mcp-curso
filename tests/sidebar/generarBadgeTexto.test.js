import { test } from "node:test";
import assert from "node:assert/strict";
import { generarBadgeTexto } from "../../src/sidebar/generarBadgeTexto.js";

test("tarea-20: generarBadgeTexto", () => {
  assert.equal(generarBadgeTexto(0), "");
  assert.equal(generarBadgeTexto(5), "5");
  assert.equal(generarBadgeTexto(10), "9+");
});
