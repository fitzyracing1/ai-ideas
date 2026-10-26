# AI Ideas

A library of AI ideas by Joshua Almeida, one Markdown file per idea, each linked to the repo that builds it.

- Site: https://fitzyracing1.github.io/ai-ideas/
- Data: [ideas.json](ideas.json) · [llms.txt](llms.txt) · agents: [AGENTS.md](AGENTS.md)
- Add one: [IDEA_TEMPLATE.md](IDEA_TEMPLATE.md) · [CONTRIBUTING.md](CONTRIBUTING.md)

**Tenets code** is the 4-bit active-low code from [Four Tenets of AI](ideas/four-tenets-of-ai.md): bits Cost Bridge Work Theory, `0` = lit (minimal), `1` = dark. `0000` = AI online.

## Index

<!-- ideas:start -->
| Idea | Summary | Status | Tenets | Repo |
|---|---|---|---|---|
| [Bound bucket superintelligence](ideas/bound-bucket-superintelligence.md) | A bound bucket uses AI to drive an attack bot that derives information from an LLM: the bucket fences targets and steps, the oracle (LLM) proposes, the driver acts, the checker reads the light. | prototype | `0000` | [bound-loop](https://github.com/fitzyracing1/bound-loop) |
| [Credit as reputation](ideas/credit-as-reputation.md) | Publish who you credit, and for what, as signed (ed25519), hash-chained, append-only thank-you grants. Credit is recognition only, not money and not a security. | prototype | `0000` | [credit](https://github.com/fitzyracing1/credit) |
| [DIS status bot](ideas/dis-status-bot.md) | Self-hostable status bot that watches your sites and marks each one lit (up and healthy) or dark (down, erroring, or too slow). | published | `0000` | [DIS](https://github.com/fitzyracing1/DIS) |
| [fakegreen: catch agents faking passing builds](ideas/fakegreen.md) | Deterministic scanner that reads an AI coding agent's git diff and flags ways it faked a passing build: skipped or deleted tests, weakened assertions, CI forced to pass. | published | `0000` | [fakegreen](https://github.com/fitzyracing1/fakegreen) |
| [Four Tenets of AI](ideas/four-tenets-of-ai.md) | AI defined by four tenets (Cost, Bridge, Work, Theory), each kept as low as possible. A 4-bit active-low code reads 0000 when AI is online. | published | `0000` | [ai-tenets](https://github.com/fitzyracing1/ai-tenets) |
| [Lit/dark CI lights standard](ideas/lit-dark-ci-lights.md) | One bit of CI truth named only lit or dark, active-low: lit = 0, dark = 1. GitHub Actions conclusion 'success' maps to lit; anything else maps to dark. | published | `0000` | [lit-dark](https://github.com/fitzyracing1/lit-dark) |
| [patch-cloud](ideas/patch-cloud.md) | Opt-in npm-compatible registry: while a package's real upstream CI light is dark, serve a fixed fork under the same package name. | live | `0000` | [patch-cloud](https://github.com/fitzyracing1/patch-cloud) |
| [Throwaway fix branches (lit-fixer)](ideas/throwaway-fix-branches.md) | A GitHub App that notices a dark default-branch CI, tries safe fixes on throwaway branches, and opens one PR only after a try turns lit. It never merges. | prototype | `0000` | [lit-fixer](https://github.com/fitzyracing1/lit-fixer) |
<!-- ideas:end -->

MIT © 2026 Joshua Almeida
