# Contributing

1. Copy `IDEA_TEMPLATE.md` to `ideas/<slug>.md` (lowercase, hyphens).
2. Fill every front-matter field. `tenets` is 4 bits, active-low (Cost Bridge Work Theory).
3. Describe only what the linked repo really does. No invented claims.
4. Run `node scripts/build.mjs` (Node 18+, no deps) and commit the regenerated `ideas.json`, `docs/ideas.json`, `docs/sitemap.xml` and README table.
5. CI runs `node scripts/build.mjs --check`; it must stay lit.

Words: say **lit** / **dark** for lights and builds.
