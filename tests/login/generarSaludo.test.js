import { test } from "node:test";
import assert from "node:assert/strict";
import { generarSaludo } from "../../src/login/generarSaludo.js";

test("tarea-13: generarSaludo", () => {
  assert.equal(generarSaludo("Ana", 9), "Buenos días, Ana");
  assert.equal(generarSaludo("Ana", 14), "Buenas tardes, Ana");
  assert.equal(generarSaludo("Ana", 21), "Buenas noches, Ana");
  assert.equal(generarSaludo("Ana", 19), "Buenas noches, Ana");
});
