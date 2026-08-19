import { test } from "node:test";
import assert from "node:assert/strict";
import { ordenarMenuPorPrioridad } from "../../src/sidebar/ordenarMenuPorPrioridad.js";

test("tarea-18: ordenarMenuPorPrioridad", () => {
  const items = [
    { id: "b", orden: 2 },
    { id: "a", orden: 1 },
    { id: "c", orden: 3 },
  ];
  const resultado = ordenarMenuPorPrioridad(items);
  assert.deepEqual(resultado.map((i) => i.id), ["a", "b", "c"]);
  assert.equal(items[0].id, "b", "no debe mutar el arreglo original");
});
