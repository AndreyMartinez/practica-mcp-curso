import { test } from "node:test";
import assert from "node:assert/strict";
import { formatearNombreUsuario } from "../../src/login/formatearNombreUsuario.js";

test("tarea-11: formatearNombreUsuario", () => {
  assert.equal(formatearNombreUsuario("ana.perez@gmx.com.mx"), "Ana Perez");
  assert.equal(formatearNombreUsuario("luis_gomez@x.com"), "Luis Gomez");
  assert.equal(formatearNombreUsuario("maria@x.com"), "Maria");
});
