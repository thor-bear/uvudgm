---
aliases:
  - 4:2:2
  - 4:2:0
  - 4:4:4
  - 4:4:4:4
tags:
  - glossary/davinci-resolve
---
# Chroma Subsampling

## Definition
A compression method that reduces chrominance data more aggressively than luminance data, since human vision is far more sensitive to luminance detail than color detail. The three-number naming convention (e.g. 4:2:2): the first number is a fixed reference (always 4), the second is how many pixels in a sample row get unique chroma data, the third is the same for the row below it.

## In Practice
- **4:4:4** — no subsampling; every pixel has unique chroma data.
- **4:2:2** — chroma halved; still sharp and colorful, a good practical tradeoff (e.g. ProRes 422/422 HQ).
- **4:2:0** — chroma resolution effectively 1/4 of luminance resolution. Makes keying subtle hues (skin tones, green screen) noticeably harder — avoid for anything you plan to color seriously, and never combine with 8-bit ([[Bit Depth]]), which compounds both limitations.
- **4:4:4:4** — the extra 4 is an alpha (transparency) channel, needed for exports with see-through pixels (e.g. ProRes 4444).

## Teaching Analogies & Examples
- **A weather map with one temperature reading per city block**: brightness gets measured at every single pixel, but color gets measured at a coarser grid and shared across neighboring pixels — like reporting one temperature for a whole block instead of one per house. The eye is much less sensitive to fine color detail than fine brightness detail, so this shortcut is mostly invisible — until you try to pull a tight key on a soft-edged color boundary and the coarser color data becomes a real, visible problem.
- Good way to make 4:2:0 vs. 4:4:4 concrete: describe 4:4:4 as "full color resolution everywhere" and 4:2:0 as "color resolution cut down to a quarter" — a shorthand worth repeating whenever a lesson references footage's subsampling as a factor in how forgiving it'll be under a tight key.
## Related Terms
[[Bit Depth]], [[Luminance]], [[Chrominance]], [[ProRes (Codec Family)]], [[Visually Lossless (Intermediate Codec)]]

## Further Resources
