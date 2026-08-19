import { test } from "node:test";
import assert from "node:assert/strict";
import { decodificarTokenMock } from "../../src/login/decodificarTokenMock.js";

test("tarea-7: decodificarTokenMock", () => {
  const resultado = decodificarTokenMock("YW5hQGdteC5jb20ubXg6MTAwMA==");
  assert.equal(resultado.email, "ana@gmx.com.mx");
  assert.equal(resultado.timestamp, 1000);
});
