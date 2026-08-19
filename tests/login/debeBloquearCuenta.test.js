import { test } from "node:test";
import assert from "node:assert/strict";
import { debeBloquearCuenta } from "../../src/login/debeBloquearCuenta.js";

test("tarea-10: debeBloquearCuenta", () => {
  assert.equal(debeBloquearCuenta(4), false);
  assert.equal(debeBloquearCuenta(5), true);
  assert.equal(debeBloquearCuenta(10), true);
});
