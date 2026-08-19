# practica-mcp-curso

Repo de práctica del taller — Nexus Parte 3. El objetivo: conectar un cliente MCP a un tablero de tareas en Notion, asignarse una tarea, implementarla, abrir un PR y ver una revisión automática.

## Antes de la sesión (quien presenta)

1. **Secret de la Action de revisión automática** — en GitHub: `Settings → Secrets and variables → Actions → New repository secret`, nombre `ANTHROPIC_API_KEY`. Sin esto, la Action de `.github/workflows/claude-review.yml` falla al abrir el primer PR.
2. **Token de Notion compartido** — genera un "Internal Integration Secret" en [notion.so/my-integrations](https://www.notion.so/my-integrations), conéctalo a la base de datos "Practica MCP — Tareas", y compártelo con el grupo **fuera del repo** (es un token de escritura — no lo pongas en ningún archivo de este repo, que es público).
3. Clona este repo y corre `npm test` una vez para confirmar que las 5 tareas están en rojo (esperado — nadie las ha implementado todavía).

## Para cada asistente, mañana

1. Clona el repo: `git clone https://github.com/AndreyMartinez/practica-mcp-curso`
2. Configura tu cliente MCP (Claude Code, Copilot, etc.) con el token de Notion que te compartieron:
   ```json
   {
     "mcpServers": {
       "notion": {
         "command": "npx",
         "args": ["-y", "@notionhq/notion-mcp-server"],
         "env": { "NOTION_TOKEN": "<el token que te compartieron>" }
       }
     }
   }
   ```
3. En tu agente, di algo como: *"conéctate al Notion y muéstrame la base 'Practica MCP — Tareas'"*.
4. Elige una tarea en "Por hacer", asígnatela (tu agente edita la propiedad "Asignado a" y el estado vía MCP — esa es la parte que están practicando).
5. Invoca `/sdd` (o simplemente pide "implementa la tarea N siguiendo el skill sdd") — el skill en `.claude/skills/sdd/SKILL.md` guía el resto: implementar, `npm test`, `/code-review medium`, y `gh pr create`.
6. Al abrir el PR, espera el comentario automático de la Action — es la "revisión automática" del objetivo del taller.
7. Marca la tarea como "Hecho" en Notion con el link del PR.

## Qué hay aquí

- `src/poliza.js` — 5 funciones con un `TODO` cada una (una por tarea del tablero).
- `tests/poliza.test.js` — el test de cada función ya define el comportamiento esperado.
- `.claude/skills/sdd/SKILL.md` — el flujo guiado, mismo patrón que usa [joga-bonito-admin](https://github.com/AndreyMartinez/joga-bonito-admin).
- `.github/workflows/claude-review.yml` — revisión automática de PR con [`anthropics/claude-code-action`](https://github.com/anthropics/claude-code-action).
