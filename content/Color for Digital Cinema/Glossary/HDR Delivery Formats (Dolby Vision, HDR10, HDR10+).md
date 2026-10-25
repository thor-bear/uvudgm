---
aliases:
  - Dolby Vision
  - HDR10
  - HDR10+
tags:
  - glossary/davinci-resolve
---
# HDR Delivery Formats (Dolby Vision, HDR10, HDR10+)

## Definition
Three delivery-side implementations of PQ HDR, covered in this course as genuinely unequal in quality:
- **Dolby Vision**: the strongest implementation. Master once at the brightest target (e.g. 4000 nits), then generate metadata-driven trims tailored to specific display brightness tiers — the colorist retains creative control over how the image looks on each tier.
- **HDR10**: no metadata at all; relies entirely on the display manufacturer's own tone-mapping algorithm to compress the mastered signal down to whatever the specific TV can show — quality is genuinely inconsistent set-to-set.
- **HDR10+**: a newer, metadata-carrying update to HDR10 chasing Dolby Vision's approach, but far less adopted — mostly a Samsung-backed standard that's effectively lost the format war.

## In Practice
**Clarifying point worth remembering**: Dolby Vision is not itself "a type of HDR" — it's a delivery/metadata method layered on top of a PQ master, not a competing color space or gamma (see [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/PQ vs. HLG (HDR Transfer Functions)]]). Dolby Vision's automatic per-shot trim analysis is free within Resolve Studio; manual fine-tuning of individual trims requires an additional Dolby license. "Fake HDR" warning: cheap TVs marketed with an HDR sticker but only reaching 200–300 nits are technically above SDR spec but nowhere near genuine HDR territory.

## Teaching Analogies & Examples
- **Different shipping instructions for the same fragile cargo**: HDR10 ships with one fixed set of brightness instructions for the whole file (static metadata); Dolby Vision and HDR10+ can ship different instructions scene-by-scene or even frame-by-frame (dynamic metadata) — like a package with one handling label for the whole shipment versus a smart label that updates its own instructions as conditions change en route.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/PQ vs. HLG (HDR Transfer Functions)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/HDR, WCG (High Dynamic Range, Wide Color Gamut)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Reference Display (Calibrated Monitor)]]

## Further Resources


## Appears In


[[Lesson 12 - Color Management and ACES]]
