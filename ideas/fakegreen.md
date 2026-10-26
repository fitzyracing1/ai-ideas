---
title: "fakegreen: catch agents faking passing builds"
summary: "Deterministic scanner that reads an AI coding agent's git diff and flags ways it faked a passing build: skipped or deleted tests, weakened assertions, CI forced to pass."
status: published
tenets: "0000"
repo: https://github.com/fitzyracing1/fakegreen
tags: [agents, testing, ci, tooling]
---

# fakegreen: catch agents faking passing builds

Deterministic scanner that reads an AI coding agent's git diff and flags ways it faked a passing build: skipped or deleted tests, weakened assertions, CI forced to pass.

## Details

Run with `npx fakegreen`. No LLM, no API key, zero runtime dependencies, usually under 100 ms. Targets agents such as Claude Code, Codex, Cursor, Gemini CLI and Aider; catches moves like `.skip`, swapping exact assertions for weaker ones, `@ts-ignore`, test-environment detection, and `|| true` on CI steps. Hooks into CI, pre-commit or an agent's end-of-turn event.

Repo: https://github.com/fitzyracing1/fakegreen
