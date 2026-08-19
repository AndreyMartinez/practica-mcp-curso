import { test } from "node:test";
import assert from "node:assert/strict";
import { esSesionValida } from "../../src/login/esSesionValida.js";

test("tarea-8: esSesionValida", () => {
  assert.equal(esSesionValida(1000, 1000 + 3599999), true);
  assert.equal(esSesionValida(1000, 1000 + 3600001), false);
  assert.equal(esSesionValida(0, 500, 1000), true);
});
