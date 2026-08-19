import { test } from "node:test";
import assert from "node:assert/strict";
import { marcarItemActivo } from "../../src/sidebar/marcarItemActivo.js";

test("tarea-17: marcarItemActivo", () => {
  const items = [
    { id: "dash", label: "Dashboard", ruta: "/dashboard", seccion: "General", orden: 1, permisoRequerido: null, parentId: null, tipo: "dashboard" },
    { id: "rep", label: "Reportes", ruta: "/reportes", seccion: "General", orden: 2, permisoRequerido: "ver", parentId: null, tipo: "reportes" },
    { id: "usr", label: "Usuarios", ruta: "/usuarios", seccion: "Administración", orden: 3, permisoRequerido: "admin", parentId: null, tipo: "usuarios" },
  ];
  const resultado = marcarItemActivo(items, "/reportes");
  assert.deepEqual(
    resultado.map((i) => i.activo),
    [false, true, false]
  );
  assert.equal(items[0].activo, undefined, "no debe mutar el arreglo original");
});
