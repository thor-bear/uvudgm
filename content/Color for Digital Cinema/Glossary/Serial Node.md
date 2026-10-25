---
aliases:
tags:
  - glossary/davinci-resolve
---
# Serial Node

## Definition
The default node type — stacks on top of whatever came before. Each serial node builds on the previous one's output.

## In Practice
The baseline node type used throughout this course; primaries and most sequential secondary corrections are built as serial nodes unless a specific technique (overriding, blending, inverting) calls for a different type. Add via Option+S (adds after current node) or Shift+S (adds before current node).

## Teaching Analogies & Examples
- **An assembly line**: each node is a station the image passes through in order — Station 1 fixes exposure, Station 2 adjusts color, Station 3 adds a vignette — and each station sees the result of everything before it, not the original raw image.
- The order genuinely matters, which is worth demonstrating rather than just stating: build the exact same three adjustments in a different node order and show how the result changes, especially with something like a vignette before vs. after a saturation boost.
## Related Terms
[[Layer Mixer]], [[Parallel Node]], [[Outside Node]], [[Compound Node]]

## Further Resources
See [[Layer Mixer]] for a side-by-side diagram comparing all three node types.
