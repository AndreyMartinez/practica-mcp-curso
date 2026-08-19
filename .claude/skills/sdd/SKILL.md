---
name: sdd
description: Flujo de Spec-Driven Development para practica-mcp-curso. Guía el ciclo completo — tomar una tarea del tablero de Notion, spec corta, implementación, revisión y PR. Usar cuando el usuario invoque /sdd o quiera arrancar/cerrar una tarea del taller.
---

# Spec-Driven Development (SDD) — practica-mcp-curso

Versión ligera del flujo SDD para el taller. Cada "spec" aquí es una sola tarea del tablero de Notion — hay 30, cada una es una función en `src/login/*.js` (tareas 1–15) o `src/sidebar/*.js` (tareas 16–30), con su test correspondiente en `tests/login/*.test.js` o `tests/sidebar/*.test.js`.

## Fase 0 — Tomar la tarea

1. Conéctate al MCP de Notion (ver README.md) y lee el tablero de tareas.
2. Elige una tarea en estado "Por hacer" y márcala como "En progreso", con tu nombre en "Asignado a" — esto es una llamada MCP real, no edición manual.
3. Crea un branch nuevo: `git checkout -b tarea-N-<slug>` (usa el número de tarea del tablero).

## Fase 1 — Entender antes de escribir

Lee el TODO de la función correspondiente (en `src/login/` o `src/sidebar/`, según tu tarea) y su test — el test ya define exactamente el comportamiento esperado, no hace falta escribir una spec aparte para una tarea de este tamaño.

Si algo del test no queda claro, pregúntale al usuario antes de implementar — no lo inventes.

## Fase 2 — Implementar

Implementa solo la función de tu tarea. No toques las demás funciones ni refactorices código que no te pidieron tocar.

Corre `npm test` y confirma que tu test pasa (y que los demás siguen igual que antes).

## Fase 3 — Revisión antes del PR

Antes de abrir el PR, corre `/code-review medium` sobre el diff del branch — son cambios chicos, no hace falta el nivel `high`. Arregla lo que se confirme; si algo queda fuera de alcance de esta tarea puntual, dilo en la descripción del PR en vez de forzarlo.

## Fase 4 — Abrir el PR

1. Commit con mensaje descriptivo (`git commit -m "Implementa <función> — tarea N"`).
2. `git push -u origin tarea-N-<slug>`
3. `gh pr create` con una descripción corta: qué tarea es, qué decidiste, qué tests corren.
4. Al abrir el PR, la Action de revisión automática (`.github/workflows/claude-review.yml`) va a comentar sola en unos minutos — espera ese comentario antes de pedirle a alguien más que revise.

## Fase 5 — Cerrar

1. Actualiza la tarea en Notion a "Hecho" y pega el link del PR en la propiedad correspondiente (otra llamada MCP real).
2. Si quieres tomar otra tarea, vuelve a la Fase 0.
