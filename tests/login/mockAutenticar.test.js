import { test } from "node:test";
import assert from "node:assert/strict";
import { mockAutenticar } from "../../src/login/mockAutenticar.js";

test("tarea-5: mockAutenticar", () => {
  assert.equal(mockAutenticar("ana@gmx.com.mx", "clave1234"), true);
  assert.equal(mockAutenticar("ANA@gmx.com.mx", "clave1234"), true);
  assert.equal(mockAutenticar("ana@gmx.com.mx", "mala"), false);
  assert.equal(mockAutenticar("nadie@x.com", "x"), false);
});
