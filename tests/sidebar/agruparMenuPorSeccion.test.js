import { test } from "node:test";
import assert from "node:assert/strict";
import { agruparMenuPorSeccion } from "../../src/sidebar/agruparMenuPorSeccion.js";

test("tarea-23: agruparMenuPorSeccion", () => {
  const items = [
    { id: "dash", label: "Dashboard", ruta: "/dashboard", seccion: "General", orden: 1, permisoRequerido: null, parentId: null, tipo: "dashboard" },
    { id: "rep", label: "Reportes", ruta: "/reportes", seccion: "General", orden: 2, permisoRequerido: "ver", parentId: null, tipo: "reportes" },
    { id: "usr", label: "Usuarios", ruta: "/usuarios", seccion: "Administración", orden: 3, permisoRequerido: "admin", parentId: null, tipo: "usuarios" },
  ];
  const resultado = agruparMenuPorSeccion(items);
  assert.deepEqual(Object.keys(resultado), ["General", "Administración"]);
  assert.equal(resultado["General"].length, 2);
  assert.equal(resultado["Administración"].length, 1);
});
