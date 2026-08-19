import { test } from "node:test";
import assert from "node:assert/strict";
import { buscarItemsMenu } from "../../src/sidebar/buscarItemsMenu.js";

test("tarea-24: buscarItemsMenu", () => {
  const items = [
    { id: "dash", label: "Dashboard", ruta: "/dashboard", seccion: "General", orden: 1, permisoRequerido: null, parentId: null, tipo: "dashboard" },
    { id: "rep", label: "Reportes", ruta: "/reportes", seccion: "General", orden: 2, permisoRequerido: "ver", parentId: null, tipo: "reportes" },
    { id: "usr", label: "Usuarios", ruta: "/usuarios", seccion: "Administración", orden: 3, permisoRequerido: "admin", parentId: null, tipo: "usuarios" },
  ];
  assert.deepEqual(buscarItemsMenu(items, "report").map((i) => i.id), ["rep"]);
  assert.deepEqual(buscarItemsMenu(items, "  ").map((i) => i.id), ["dash", "rep", "usr"]);
});
