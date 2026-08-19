import { test } from "node:test";
import assert from "node:assert/strict";
import { contarNotificacionesPorItem } from "../../src/sidebar/contarNotificacionesPorItem.js";

test("tarea-19: contarNotificacionesPorItem", () => {
  const notificaciones = [{ itemId: "rep" }, { itemId: "rep" }, { itemId: "usr" }];
  assert.equal(contarNotificacionesPorItem("rep", notificaciones), 2);
  assert.equal(contarNotificacionesPorItem("dash", notificaciones), 0);
});
