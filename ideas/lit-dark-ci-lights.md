---
title: "Lit/dark CI lights standard"
summary: "One bit of CI truth named only lit or dark, active-low: lit = 0, dark = 1. GitHub Actions conclusion 'success' maps to lit; anything else maps to dark."
status: published
tenets: "0000"
repo: https://github.com/fitzyracing1/lit-dark
tags: [ci, standard, active-low, lights]
---

# Lit/dark CI lights standard

One bit of CI truth named only lit or dark, active-low: lit = 0, dark = 1. GitHub Actions conclusion "success" maps to lit; anything else maps to dark.

## Details

Map once from GitHub Actions, then only say lit or dark. Dark means the upstream project's latest relevant CI run mapped to dark (not that a download failed). Full standard in SPEC.md plus a white paper; the site lists upstream PRs that took a dark light to lit.

Repo: https://github.com/fitzyracing1/lit-dark
