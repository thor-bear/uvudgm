---
aliases:
  - ProRes 422
  - ProRes 4444
  - ProRes Proxy
  - ProRes RAW
tags:
  - glossary/davinci-resolve
---
# ProRes (Codec Family)

## Definition
Apple's family of visually-lossless intermediate codecs — described in this course as the de facto industry standard for this category. Variants used throughout the semester: **ProRes 422/422 HQ** (a good practical tradeoff at 4:2:2 chroma subsampling), **ProRes 4444** (full 4:4:4:4, preserves an alpha channel — the standard choice for VFX handoff and final masters), and **ProRes Proxy** (lightweight, for editing proxies).

## In Practice
Nearly every professional delivery request cited in this course specifies ProRes 4444 or 422 HQ. A critical, easy-to-miss gotcha: any gap in a timeline exports as *transparent*, not black, in a ProRes 4444 export, because 4444 carries an alpha channel — intentional "black" sections need actual Black Video clips, not empty gaps. Also, Premiere silently defaults to 8-bit export regardless of the chosen codec's real capability — manually select 16-bit so the codec itself (ProRes 4444's real ceiling is 12-bit) determines the effective bit depth.

## Teaching Analogies & Examples
- **A family of vacuum-seal settings, from "still pretty roomy" to "extremely tight"**: ProRes Proxy/LT/422/422HQ/4444 all use the same underlying compression family, just at different quality/size tradeoffs — Proxy is the loosest seal (smallest, lowest quality, great for scrubbing through footage fast), 4444 is the tightest (largest, highest quality, includes alpha channel support), with the others sitting in between.
- Worth stating directly why this matters for grading specifically: the class explicitly avoids ProRes 4444 for simple deliverables because it's overkill (largest file, features like alpha unused) — matching codec choice to actual need is itself a skill, not just picking the "best" option by default.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Visually Lossless (Intermediate Codec)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Chroma Subsampling]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Bit Depth]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Proxy (Editing Proxies)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Codec vs. Encoder]]

## Further Resources


## Appears In


[[Lesson 02 - Color Terms Part 1]], [[Lesson 06 - Color Theory]], [[Lesson 08 - Conforming and Roundtripping]], [[Lesson 09 - Codecs and Primaries and Shot-Matching Part 2]], [[Lesson 12 - Color Management and ACES]], [[Lesson 23 - Roundtripping Part 2, Hardware, and Workflow Tips]], [[Lesson 24 - Onlining Part 2 and Mastering]], [[Lesson 26 - HDR and Miscellaneous]]
