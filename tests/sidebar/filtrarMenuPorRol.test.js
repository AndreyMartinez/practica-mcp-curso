import { test } from "node:test";
import assert from "node:assert/strict";
import { filtrarMenuPorRol } from "../../src/sidebar/filtrarMenuPorRol.js";

test("tarea-16: filtrarMenuPorRol", () => {
  const items = [
    { id: "dash", label: "Dashboard", ruta: "/dashboard", seccion: "General", orden: 1, permisoRequerido: null, parentId: null, tipo: "dashboard" },
    { id: "rep", label: "Reportes", ruta: "/reportes", seccion: "General", orden: 2, permisoRequerido: "ver", parentId: null, tipo: "reportes" },
    { id: "usr", label: "Usuarios", ruta: "/usuarios", seccion: "Administración", orden: 3, permisoRequerido: "admin", parentId: null, tipo: "usuarios" },
  ];
  const resultado = filtrarMenuPorRol(items, ["ver"]);
  assert.deepEqual(resultado.map((i) => i.id), ["dash", "rep"]);
});
