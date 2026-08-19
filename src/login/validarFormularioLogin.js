// Tarea 12 · login · validarFormularioLogin
// TODO: Valida un formulario de login completo. Regresa `{ valido, errores }`
donde `errores` es un arreglo de strings (mismos mensajes de la tarea 4,
pero escritos aquí directo, sin importar otro archivo):
  - si `email` está vacío: agrega "El correo es obligatorio"
  - si no, y no cumple /^[^\s@]+@[^\s@]+\.[^\s@]+$/: agrega "El correo no es válido"
  - si `password` está vacío: agrega "La contraseña es obligatoria"
  - si no, y no tiene (largo>=8 y al menos un dígito): agrega "La contraseña debe tener al menos 8 caracteres y un número"
`valido` es true solo si `errores` queda vacío.
export function validarFormularioLogin(email, password) {
  throw new Error("no implementado");
}
