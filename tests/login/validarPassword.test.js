import { test } from "node:test";
import assert from "node:assert/strict";
import { validarPassword } from "../../src/login/validarPassword.js";

test("tarea-2: validarPassword", () => {
  assert.equal(validarPassword("abcdefg1"), true);
  assert.equal(validarPassword("abcdefg"), false);
  assert.equal(validarPassword("abc12"), false);
  assert.equal(validarPassword("12345678"), true);
});
