import { test } from "node:test";
import assert from "node:assert/strict";
import {
  calcularPrimaAnual,
  validarNumeroPoliza,
  diasParaVencimiento,
  clasificarRiesgo,
  formatearMoneda,
} from "../src/poliza.js";

test("tarea-1: calcularPrimaAnual", () => {
  assert.equal(calcularPrimaAnual(150.5, 12), 1806);
  assert.equal(calcularPrimaAnual(99.99, 12), 1199.88);
});

test("tarea-2: validarNumeroPoliza", () => {
  assert.equal(validarNumeroPoliza("POL-004821"), true);
  assert.equal(validarNumeroPoliza("POL-4821"), false);
  assert.equal(validarNumeroPoliza("XYZ-004821"), false);
  assert.equal(validarNumeroPoliza(""), false);
});

test("tarea-3: diasParaVencimiento", () => {
  const hoy = new Date("2026-08-19T00:00:00");
  assert.equal(diasParaVencimiento("2026-08-29", hoy), 10);
  assert.equal(diasParaVencimiento("2026-08-09", hoy), -10);
});

test("tarea-4: clasificarRiesgo", () => {
  assert.equal(clasificarRiesgo(40, 0), "bajo");
  assert.equal(clasificarRiesgo(40, 1), "medio");
  assert.equal(clasificarRiesgo(40, 2), "medio");
  assert.equal(clasificarRiesgo(40, 3), "alto");
});

test("tarea-5: formatearMoneda", () => {
  assert.equal(formatearMoneda(1234.5), "$1,234.50");
  assert.equal(formatearMoneda(0), "$0.00");
});
