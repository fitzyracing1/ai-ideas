---
title: "Credit as reputation"
summary: "Publish who you credit, and for what, as signed (ed25519), hash-chained, append-only thank-you grants. Credit is recognition only, not money and not a security."
status: prototype
tenets: "0000"
repo: https://github.com/fitzyracing1/credit
tags: [reputation, open-source, standard]
---

# Credit as reputation

Publish who you credit, and for what, as signed (ed25519), hash-chained, append-only thank-you grants. Credit is recognition only, not money and not a security.

## Details

CREDIT-1 is an open standard: a `/.well-known/credit.json` listing who you credit (repos, companies, people), for what, and when. The repo has the spec, a JSON Schema, a zero-dependency validator that prints lit/dark, a scorer, a grants ledger (`ledger/grants.jsonl`), a GitHub Pages scan page that verifies every grant in the browser, crawler feeds, and an Action that proposes unsigned grants on PRs without ever signing in CI.

Repo: https://github.com/fitzyracing1/credit
