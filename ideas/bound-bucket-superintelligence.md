---
title: "Bound bucket superintelligence"
summary: "A bound bucket uses AI to drive an attack bot that derives information from an LLM: the bucket fences targets and steps, the oracle (LLM) proposes, the driver acts, the checker reads the light."
status: prototype
tenets: "0000"
repo: https://github.com/fitzyracing1/bound-loop
tags: [loop, llm, safety, agents]
---

# Bound bucket superintelligence

A bound bucket uses AI to drive an attack bot that derives information from an LLM: the bucket fences targets and steps, the oracle (LLM) proposes, the driver acts, the checker reads the light.

## Details

Implemented as bound-loop, a tiny dependency-free Python loop for letting an AI try fixes safely. Four parts: **Bucket** (the fence: allowed targets and max steps), **Oracle** (wraps an LLM call, proposes actions, sees memory of prior tries), **Driver** (runs one action), **Checker** (`success` is lit, anything else dark). The loop stops at the first lit action or returns `None`.

Repo: https://github.com/fitzyracing1/bound-loop
