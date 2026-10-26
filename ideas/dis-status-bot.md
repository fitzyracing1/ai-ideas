---
title: "DIS status bot"
summary: "Self-hostable status bot that watches your sites and marks each one lit (up and healthy) or dark (down, erroring, or too slow)."
status: published
tenets: "0000"
repo: https://github.com/fitzyracing1/DIS
tags: [monitoring, status, lights, self-hosted]
---

# DIS status bot

Self-hostable status bot that watches your sites and marks each one lit (up and healthy) or dark (down, erroring, or too slow).

## Details

Checks HTTP, TCP and DNS targets on a schedule, sends a webhook (e.g. Discord, Slack) when a light changes, serves a small status page plus JSON, and can run as a GitHub Actions cron job so no server is needed. Node 18+, zero dependencies, MIT. Can mirror targets to light-report.

Repo: https://github.com/fitzyracing1/DIS
