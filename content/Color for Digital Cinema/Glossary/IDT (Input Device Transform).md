---
aliases:
  - Input Device Transform
tags:
  - glossary/davinci-resolve
---
# IDT (Input Device Transform)

## Definition
Converts source footage from its native camera color space into a common working space (ACES, or whatever the pipeline's shared format is). The first stage of a color-managed pipeline, applied per-clip based on that clip's actual camera/color space.

## In Practice
In node-based ACES, an IDT is built manually as an ACES Transform OFX node (Input: source camera space, e.g. ARRI LogC3; Output: ACEScct). In project-based ACES, it's assigned per-clip via right-click → ACES Input Transform, selecting the matching camera space — RED raw footage needs no manual input transform at all under project-based ACES, since it's genuinely raw sensor data that ACES can read directly. An IDT/ODT pair can also be exported as a monitoring LUT for on-set use, so what the DP sees during production closely matches the eventual color-managed grade.

## Teaching Analogies & Examples
- **A customs checkpoint at the border**: every camera's footage has to pass through its own specific IDT before entering the ACES "country" — a RED camera declares its own footage differently than an Alexa does, and the IDT is the paperwork that translates each one into the same common internal standard everything inside the border uses.
- Pairs directly with ODT as the exit checkpoint: IDT translates footage *in*, ODT translates the graded result *out* to whatever screen it's headed to — same border-crossing idea, opposite direction.
## Related Terms
[[ODT (Output Device Transform)]], [[ACES]], [[Color Space Referents (Display-, Camera-, Scene-Referred)]], [[Camera RAW Decode Settings (IPP2, RED Wide Gamut RGB, Log3G10)]]

## Further Resources
