import { test } from "node:test";
import assert from "node:assert/strict";
import { validarEmail } from "../../src/login/validarEmail.js";

test("tarea-1: validarEmail", () => {
  assert.equal(validarEmail("ana@gmx.com.mx"), true);
  assert.equal(validarEmail("ana@gmx"), false);
  assert.equal(validarEmail(""), false);
  assert.equal(validarEmail("ana@@gmx.com"), false);
});
