---
title: "Throwaway fix branches (lit-fixer)"
summary: "A GitHub App that notices a dark default-branch CI, tries safe fixes on throwaway branches, and opens one PR only after a try turns lit. It never merges."
status: prototype
tenets: "0000"
repo: https://github.com/fitzyracing1/lit-fixer
tags: [ci, github-app, automation, lights]
---

# Throwaway fix branches (lit-fixer)

A GitHub App that notices a dark default-branch CI, tries safe fixes on throwaway branches, and opens one PR only after a try turns lit. It never merges.

## Details

A rule-list Oracle (no AI) picks a workflow fix (e.g. bump actions/checkout or setup-node to v4, drop end-of-life Node versions, npm ci to npm install on lockfile drift), pushes it to `lit-fixer/try-<n>`, and waits for that branch's run. Lit opens a PR; dark deletes the branch and tries the next fix. A Bucket caps tries (3 per dark event, 6 per repo per day) and memory tries previously lit fixes first. Loop idea from bound-loop.

Repo: https://github.com/fitzyracing1/lit-fixer
