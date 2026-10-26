---
title: "patch-cloud"
summary: "Opt-in npm-compatible registry: while a package's real upstream CI light is dark, serve a fixed fork under the same package name."
status: live
tenets: "0000"
repo: https://github.com/fitzyracing1/patch-cloud
tags: [npm, registry, lights, supply-chain]
---

# patch-cloud

Opt-in npm-compatible registry: while a package's real upstream CI light is dark, serve a fixed fork under the same package name.

## Details

Opt in per install with `--registry` or per project via `.npmrc`. When a mapped package's light is dark and its fork is ready, the registry serves the fork; when lit, it proxies to the public npm registry. A public `/status` board shows dark-now packages, merged upstream fixes and a watchlist. Nothing is published to the public npm registry.

Repo: https://github.com/fitzyracing1/patch-cloud
