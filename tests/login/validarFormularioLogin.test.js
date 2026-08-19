import { test } from "node:test";
import assert from "node:assert/strict";
import { validarFormularioLogin } from "../../src/login/validarFormularioLogin.js";

test("tarea-12: validarFormularioLogin", () => {
  assert.deepEqual(validarFormularioLogin("ana@gmx.com.mx", "clave1234"), {
    valido: true,
    errores: [],
  });
  assert.deepEqual(validarFormularioLogin("", ""), {
    valido: false,
    errores: ["El correo es obligatorio", "La contraseña es obligatoria"],
  });
  assert.deepEqual(validarFormularioLogin("mala", "corta"), {
    valido: false,
    errores: [
      "El correo no es válido",
      "La contraseña debe tener al menos 8 caracteres y un número",
    ],
  });
});
