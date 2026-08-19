import { test } from "node:test";
import assert from "node:assert/strict";
import { generarMensajeError } from "../../src/login/generarMensajeError.js";

test("tarea-4: generarMensajeError", () => {
  assert.equal(generarMensajeError("email", "invalido"), "El correo no es válido");
  assert.equal(generarMensajeError("password", "vacio"), "La contraseña es obligatoria");
  assert.equal(generarMensajeError("telefono", "vacio"), "Error desconocido");
});
