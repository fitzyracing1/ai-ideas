---
title: "Four Tenets of AI"
summary: "AI defined by four tenets (Cost, Bridge, Work, Theory), each kept as low as possible. A 4-bit active-low code reads 0000 when AI is online."
status: published
tenets: "0000"
repo: https://github.com/fitzyracing1/ai-tenets
tags: [tenets, standard, active-low]
---

# Four Tenets of AI

AI defined by four tenets (Cost, Bridge, Work, Theory), each kept as low as possible. A 4-bit active-low code reads 0000 when AI is online.

## Details

Cost (money/compute per answer), Bridge (glue/integration hops to the real world), Work (steps, retries, loops) and Theory (unproven assumptions) must each be as low as possible.

Bits are active-low in order Cost Bridge Work Theory (MSB to LSB): 0 = lit (tenet at its minimum), 1 = dark (too high). `0000` = AI online, `1111` = fully dark. An extended 8-bit form uses 2 bits per tenet (`00` none, `01` low, `10` high, `11` over limit). The repo ships RULES.md, tenets.json, llms.txt, a reference decoder (tenets.js) and drop-in agent instruction files.

Repo: https://github.com/fitzyracing1/ai-tenets
