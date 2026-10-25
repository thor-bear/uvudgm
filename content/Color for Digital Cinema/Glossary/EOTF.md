---
aliases:
  - Electro-Optical Transfer Function
tags:
  - glossary/davinci-resolve
---
# EOTF

## Definition
Electro-Optical Transfer Function — the technically correct HDR term for what SDR workflows just call "gamma." In practice the two terms are used interchangeably. PQ (Perceptual Quantization) is the common HDR EOTF, capable of up to 10,000 nits in spec (versus Rec. 709's 100-nit cap), meaning HDR can represent extreme brightness differences (sun vs. paper) without clipping the way SDR does.

## In Practice
Comes up primarily when comparing SDR and HDR color spaces — see [[Gamma]] for the fuller SDR-side discussion, and [[PQ vs. HLG (HDR Transfer Functions)]] for the two HDR-specific transfer functions this course covers.

## Teaching Analogies & Examples
- **A recipe for turning a number into light**: an EOTF is the instruction sheet a display follows to convert an incoming signal value into an actual amount of light on screen — "if the signal says 50%, output this much brightness, not necessarily 50% of maximum." Different EOTFs (SDR's traditional gamma curve vs. PQ for HDR) are different recipes for that same fundamental job.
## Related Terms
[[Gamma]], [[PQ vs. HLG (HDR Transfer Functions)]], [[HDR / WCG (High Dynamic Range, Wide Color Gamut)]]

## Further Resources
