---
aliases:
tags:
  - glossary/davinci-resolve
---
# Bit Depth

## Definition
The number of possible shades/levels per color channel — determines color fidelity and how much banding/artifacting shows up. 8-bit gives 256 shades per channel (~16.8 million total colors, fine for casual/web content only); 10-bit gives 1,024 shades per channel (recommended minimum for serious grading); 12-bit gives 4,096; 14-bit (common in RAW) gives 16,384; 16-bit RAW formats (RED, ARRI) go further still.

## In Practice
Rule of thumb: shoot/work in a bit depth higher than your final delivery target — the same logic as recording audio with extra headroom — to give room to fix problems without artifacts. Never combine 8-bit with 4:2:0 chroma subsampling; the two limitations compound. Premiere silently defaults to an 8-bit export regardless of the chosen codec's real capability — always manually confirm bit depth at export (e.g. selecting 16-bit for a ProRes 4444 master, whose real ceiling is 12-bit).

## Teaching Analogies & Examples
- **How many steps are on the staircase between black and white**: 8-bit gives you 256 steps per channel; 10-bit gives you 1,024. More steps means smoother gradients — an 8-bit sky can show visible banding (distinct stripes) where a 10-bit version shows a seamless gradient, because there simply aren't enough steps in 8-bit to represent the transition smoothly once you start pushing it.
## Related Terms
[[Chroma Subsampling]], [[Dynamic Range]], [[Latitude]], [[ProRes (Codec Family)]]

## Further Resources
