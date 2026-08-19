---
description: Toma una tarea del tablero de Notion del taller, la implementa, la revisa y abre el PR.
argument-hint: número de tarea del tablero de Notion (ej. "12")
agent: agent
---

Vas a resolver la **tarea ${input:tarea:número de tarea del tablero de Notion}** del taller de MCP, siguiendo estos pasos en orden.

## 1 · Tomar la tarea

Usa las herramientas MCP de Notion (ya conectadas en este proyecto — ver `.vscode/mcp.json`) para leer la base "Tareas del taller" y encontrar la tarea número ${input:tarea}. Márcala como "En progreso" y pon tu nombre en "Asignado a" — esto es una llamada MCP real contra Notion, no una edición manual.

## 2 · Entender

La descripción de la tarea en Notion apunta a un archivo en `src/login/` o `src/sidebar/`. Lee el `TODO` de esa función y su test correspondiente en `tests/login/` o `tests/sidebar/` — el test ya define exactamente el comportamiento esperado. Si algo no queda claro, pregunta antes de escribir código.

## 3 · Implementar

Implementa **solo** la función de esta tarea. No toques otras funciones ni archivos.

Corre `npm test` y confirma que el test de tu tarea pasa (y que los demás no se rompieron).

## 4 · Revisar antes del PR

Revisa tu propio cambio contra el TODO: ¿hace exactamente lo que pide? ¿cubre los casos del test? ¿tocaste algo fuera de esta tarea? Corrige lo que encuentres.

## 5 · Abrir el PR

1. Crea un branch: `git checkout -b tarea-${input:tarea}-<slug-corto>`
2. Commit descriptivo y `git push -u origin <branch>`
3. `gh pr create` con una descripción corta de la tarea.
4. La Action de revisión automática (`.github/workflows/claude-review.yml`) va a comentar sola en el PR en unos minutos — espera ese comentario.

## 6 · Cerrar

Actualiza la tarea en Notion a "Hecho" y pega el link del PR en la propiedad "PR" (otra llamada MCP real).

Al terminar, resume en el chat: qué tarea era, qué decidiste, y el link del PR.
