// Tarea 4 · login · generarMensajeError
// TODO: Dado `campo` ("email" o "password") y `tipoError` ("vacio" o "invalido"),
regresa el mensaje correspondiente de esta tabla exacta:
  email.vacio     -> "El correo es obligatorio"
  email.invalido  -> "El correo no es válido"
  password.vacio  -> "La contraseña es obligatoria"
  password.invalido -> "La contraseña debe tener al menos 8 caracteres y un número"
Si la combinación no existe en la tabla, regresa "Error desconocido".
export function generarMensajeError(campo, tipoError) {
  throw new Error("no implementado");
}
