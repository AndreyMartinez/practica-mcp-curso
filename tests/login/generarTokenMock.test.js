import { test } from "node:test";
import assert from "node:assert/strict";
import { generarTokenMock } from "../../src/login/generarTokenMock.js";

test("tarea-6: generarTokenMock", () => {
  assert.equal(generarTokenMock("ana@gmx.com.mx", 1000), "YW5hQGdteC5jb20ubXg6MTAwMA==");
});
