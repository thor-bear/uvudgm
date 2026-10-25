---
aliases:
tags:
  - glossary/davinci-resolve
---
# 32-bit Float

## Definition
Resolve's non-destructive grading math — lets you make extreme adjustments in one node and fully recover in a later node, because color data isn't clipped or rounded along the way. An extreme exposure push in one node can be pulled back down in a subsequent node with detail intact.

## In Practice
**Important caveat**: certain operations break 32-bit float non-destructiveness — most notably LUTs and the Soft Clip controls. Once a LUT clips data, a later node can no longer recover it, which is why this course treats LUT placement (always at the very end of a chain) as a near-non-negotiable rule — see [[LUT]]. Color Space Transform and ACES Transform nodes are the non-destructive alternative, since they don't clip the way a technical LUT does.

## Teaching Analogies & Examples
- **A ruler with infinite tick marks vs. one with only 256**: lower bit depths round every value to the nearest available notch, like measuring with a ruler that only has whole-inch marks. 32-bit float gives you so many notches between any two points that rounding error effectively disappears, even after many rounds of math stacked on top of each other.
- The "why does this matter for heavy grading" point is worth stating plainly: every node in a chain does math on the image, and rounding errors compound — 32-bit float is what keeps a seven-node grade from visibly degrading (banding, posterization) the way it might in a lower-precision pipeline.
## Related Terms
[[LUT]], [[Color Space Transform (CST)]], [[DaVinci YRGB]], [[Key Output Gain (Node Opacity)]]

## Further Resources
