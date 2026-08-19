import { test } from "node:test";
import assert from "node:assert/strict";
import { mapearRolAPermisos } from "../../src/login/mapearRolAPermisos.js";

test("tarea-14: mapearRolAPermisos", () => {
  assert.deepEqual(mapearRolAPermisos("admin"), ["ver", "crear", "editar", "eliminar"]);
  assert.deepEqual(mapearRolAPermisos("lector"), ["ver"]);
  assert.deepEqual(mapearRolAPermisos("invitado"), []);
});
