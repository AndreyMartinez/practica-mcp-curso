import { test } from "node:test";
import assert from "node:assert/strict";
import { esRutaValida } from "../../src/sidebar/esRutaValida.js";

test("tarea-26: esRutaValida", () => {
  const items = [
    { id: "dash", label: "Dashboard", ruta: "/dashboard", seccion: "General", orden: 1, permisoRequerido: null, parentId: null, tipo: "dashboard" },
    { id: "rep", label: "Reportes", ruta: "/reportes", seccion: "General", orden: 2, permisoRequerido: "ver", parentId: null, tipo: "reportes" },
    { id: "usr", label: "Usuarios", ruta: "/usuarios", seccion: "Administración", orden: 3, permisoRequerido: "admin", parentId: null, tipo: "usuarios" },
  ];
  assert.equal(esRutaValida("/reportes", items), true);
  assert.equal(esRutaValida("/no-existe", items), false);
});
