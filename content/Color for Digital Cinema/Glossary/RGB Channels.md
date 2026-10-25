---
aliases:
  - RGB
tags:
  - glossary/davinci-resolve
---
# RGB Channels

## Definition
Red, green, and blue — the primary colors of *light* (additive color). A common misconception is that the primaries are red/yellow/blue; that's more accurate for physical pigment (subtractive color), and even then the true subtractive primaries are cyan/magenta/yellow, as in CMYK for print. R+G+B combine to form all reproducible colors in most digital color spaces.

## In Practice
Resolve's Parade scope shows R/G/B as three independent traces (see [[Parade (Scope)]]) — the fundamental diagnostic for spotting channel-specific imbalances, like a crushed or contaminated channel that the [[RGB Mixer]] is built to fix. See [[Additive vs. Subtractive Color]] for the fuller distinction that matters once film emulation enters the picture.

## Teaching Analogies & Examples
- **Three colored stage lights aimed at the same spot**: a red light, a green light, and a blue light overlapping on a wall can combine to make nearly any color — an RGB image works the same way, storing three separate brightness values per pixel (how much red light, how much green light, how much blue light) that combine into the final color you see.
- This is the same underlying idea the Parade scope visualizes directly — three channels standing side by side is just RGB channels made visible and measurable instead of invisibly combined.
## Related Terms
[[Additive vs. Subtractive Color]], [[Parade (Scope)]], [[RGB Mixer]], [[Splitter/Combiner Node]]

## Further Resources
