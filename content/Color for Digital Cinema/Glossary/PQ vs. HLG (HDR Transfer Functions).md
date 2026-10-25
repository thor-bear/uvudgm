---
aliases:
  - Perceptual Quantization
  - Hybrid Log Gamma
  - PQ
  - HLG
tags:
  - glossary/davinci-resolve
---
# PQ vs. HLG (HDR Transfer Functions)

## Definition
The two HDR transfer functions ([[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/EOTF]]) covered in this course:
- **PQ (Perceptual Quantization)**: used for film and scripted/produced television — anything mastered in advance before airing/streaming. Graded per-shot like everything else in this course. Uses Rec. 2020 (or a smaller gamut like P3 within it) with the SMPTE ST.2084 transfer function, capable of up to 10,000 nits in spec.
- **HLG (Hybrid Log Gamma)**: designed for live events/sports, where per-shot grading in advance isn't possible. Functionally closer to a standard Rec. 709 Gamma 2.4 curve that's allowed to extend brighter in the highlights rather than clamping — a genuine hybrid of log and display gamma.

## In Practice
Explicit advice: don't shoot HLG for anything you're planning to grade afterward — it's suited specifically to live, un-graded broadcast, not post-production work. PQ is the one that matters for narrative/documentary color work and pairs with delivery-side metadata formats like Dolby Vision — see [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/HDR Delivery Formats (Dolby Vision, HDR10, HDR10+)]].

## Teaching Analogies & Examples
- **A fixed absolute scale vs. a scale that adapts to the room**: PQ (Perceptual Quantization) maps signal values to exact, absolute brightness numbers regardless of the display — like a thermostat with a precise numeric target. HLG (Hybrid Log-Gamma) is designed to degrade gracefully and still look reasonable on a plain SDR screen that has no idea it's receiving HDR content — more like a recipe written to still taste fine even if you're missing one specialty ingredient. PQ is common for streaming/film; HLG is common for broadcast, specifically because of that graceful-fallback behavior.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/EOTF]], [[HDR / WCG (High Dynamic Range, Wide Color Gamut)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/HDR Delivery Formats (Dolby Vision, HDR10, HDR10+)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Rec. 2020]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Gamma]]

## Further Resources
- [What Is the Difference Between PQ and HLG HDR Transfer Functions? (KTC)](https://us.ktcplay.com/blogs/technology-hub/pq-vs-hlg-hdr-transfer-functions-explained) — shows the actual curve shapes (PQ's fixed absolute mapping vs. HLG's gamma-then-log hybrid shape), making the "fixed thermostat vs. adaptive recipe" analogy above literally visible as two different graph lines.


## Appears In


[[Lesson 02 - Color Terms Part 1]]
