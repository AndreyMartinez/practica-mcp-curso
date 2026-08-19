# practica-mcp-curso

Repo de práctica del taller — Nexus Parte 3. El objetivo: conectar un cliente MCP a un tablero de tareas en Notion, asignarse una tarea, implementarla, abrir un PR y ver una revisión automática.

**30 tareas independientes** — 15 de un mock de login y 15 de un menú lateral (dos features típicas de cualquier panel de administración). Cada tarea es **una sola función pura, en su propio archivo, con su propio test que ya define exactamente qué debe hacer** — nadie tiene que redactar el detalle de su tarea, solo leer el TODO + el test y hacerlo pasar. Al estar cada una en su propio archivo, 30 personas pueden trabajar al mismo tiempo sobre `main` sin pisarse.

## Antes de la sesión (quien presenta)

1. **Secret de la Action de revisión automática** — en GitHub: `Settings → Secrets and variables → Actions → New repository secret`, nombre `ANTHROPIC_API_KEY`. Sin esto, la Action de `.github/workflows/claude-review.yml` falla al abrir el primer PR.
2. **Token de Notion compartido** — genera un "Internal Integration Secret" en [notion.so/my-integrations](https://www.notion.so/my-integrations), conéctalo a la base de datos "Practica MCP — Tareas", y compártelo con el grupo **fuera del repo** (es un token de escritura — no lo pongas en ningún archivo de este repo, que es público).
3. Clona este repo y corre `npm test` una vez para confirmar que las 30 tareas están en rojo (esperado — nadie las ha implementado todavía).

## Para cada asistente, mañana (con GitHub Copilot en VS Code)

1. Clona el repo: `git clone https://github.com/AndreyMartinez/practica-mcp-curso` y ábrelo en VS Code.
2. Abre Copilot Chat en **modo Agent**. VS Code detecta `.vscode/mcp.json` y te va a pedir el token de Notion la primera vez que el servidor "notion" intente arrancar — pega ahí el token que te compartió quien presenta (queda guardado de forma segura en VS Code, nunca en el repo).
3. En el chat, escribe `/sdd` y el número de tarea que quieras tomar (ej. `/sdd 12`) — el prompt en `.github/prompts/sdd.prompt.md` guía todo el flujo: leer la tarea en Notion, asignártela, implementar, correr `npm test`, y abrir el PR con `gh pr create`.
4. Al abrir el PR, espera el comentario automático de la Action — es la "revisión automática" del objetivo del taller.
5. La tarea 6 del prompt marca "Hecho" en Notion con el link del PR — confírmalo en el tablero.

**¿Usas Claude Code en vez de Copilot?** Mismo flujo, con `/sdd` invocando el skill en `.claude/skills/sdd/SKILL.md` en vez del prompt de Copilot — configura el MCP de Notion en tu cliente con el mismo token.

## Qué hay aquí

- `src/login/*.js` — 15 funciones (tareas 1–15) para un flujo de login simulado: validaciones, token mock, mensajes, permisos por rol.
- `src/sidebar/*.js` — 15 funciones (tareas 16–30) para un menú lateral: filtrado por permisos, item activo, badges, breadcrumb, etc.
- `tests/login/*.test.js`, `tests/sidebar/*.test.js` — un test por función, ya con los casos que definen el comportamiento esperado (uno a uno con cada archivo de `src/`).
- `.vscode/mcp.json` — conexión MCP a Notion para Copilot Chat (agent mode), token pedido por VS Code, nunca escrito en el repo.
- `.github/prompts/sdd.prompt.md` — el flujo `/sdd` para Copilot, mismo patrón que ya usaron en la Parte 2 del curso.
- `.claude/skills/sdd/SKILL.md` — el mismo flujo, para quien use Claude Code en vez de Copilot.
- `.github/workflows/claude-review.yml` — revisión automática de PR con [`anthropics/claude-code-action`](https://github.com/anthropics/claude-code-action) (corre en GitHub, funciona sin importar qué herramienta usó quien abrió el PR).

Corre `npm test` para ver el estado de las 30 tareas en cualquier momento.
