// Utilidades de práctica para el taller — cada función tiene un TODO.
// Cada TODO corresponde a una tarea en el tablero de Notion del taller.

export function calcularPrimaAnual(primaMensual, meses) {
  // TODO(tarea-1): regresar primaMensual * meses, redondeado a 2 decimales.
  throw new Error("no implementado");
}

export function validarNumeroPoliza(numero) {
  // TODO(tarea-2): un número de póliza válido es "POL-" seguido de 6 dígitos.
  // Ejemplo válido: "POL-004821". Regresar true/false.
  throw new Error("no implementado");
}

export function diasParaVencimiento(fechaVencimientoISO, hoy = new Date()) {
  // TODO(tarea-3): regresar los días completos entre `hoy` y la fecha de
  // vencimiento (fechaVencimientoISO, formato "YYYY-MM-DD"). Si ya venció,
  // regresar un número negativo.
  throw new Error("no implementado");
}

export function clasificarRiesgo(edad, siniestrosUltimos5Anios) {
  // TODO(tarea-4): clasificar en "bajo", "medio" o "alto":
  //   - "alto" si siniestrosUltimos5Anios >= 3
  //   - "medio" si siniestrosUltimos5Anios es 1 o 2
  //   - "bajo" si siniestrosUltimos5Anios es 0
  // La edad no afecta la clasificación todavía — es información para la
  // siguiente iteración, no la usen en este taller.
  throw new Error("no implementado");
}

export function formatearMoneda(valor) {
  // TODO(tarea-5): regresar el valor formateado como moneda MXN, ej:
  // formatearMoneda(1234.5) -> "$1,234.50"
  throw new Error("no implementado");
}
