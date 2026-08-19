import { test } from "node:test";
import assert from "node:assert/strict";
import { normalizarEmail } from "../../src/login/normalizarEmail.js";

test("tarea-3: normalizarEmail", () => {
  assert.equal(normalizarEmail("  Ana@GMX.com.mx  "), "ana@gmx.com.mx");
  assert.equal(normalizarEmail("LUIS@X.COM"), "luis@x.com");
});
