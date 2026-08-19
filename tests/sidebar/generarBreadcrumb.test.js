import { test } from "node:test";
import assert from "node:assert/strict";
import { generarBreadcrumb } from "../../src/sidebar/generarBreadcrumb.js";

test("tarea-25: generarBreadcrumb", () => {
  const items = [
    { id: "root", label: "Reportes", parentId: null },
    { id: "child", label: "Ventas", parentId: "root" },
    { id: "grand", label: "Q3", parentId: "child" },
  ];
  assert.deepEqual(generarBreadcrumb("grand", items), ["Reportes", "Ventas", "Q3"]);
  assert.deepEqual(generarBreadcrumb("root", items), ["Reportes"]);
  assert.deepEqual(generarBreadcrumb("no-existe", items), []);
});
