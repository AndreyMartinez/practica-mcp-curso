import { test } from "node:test";
import assert from "node:assert/strict";
import { toggleColapsoMenu } from "../../src/sidebar/toggleColapsoMenu.js";

test("tarea-21: toggleColapsoMenu", () => {
  assert.equal(toggleColapsoMenu(false), true);
  assert.equal(toggleColapsoMenu(true), false);
});
