---
aliases:
tags:
  - glossary/davinci-resolve
---
> [!info] AI-drafted note
> This glossary entry was drafted by Claude at Torben's request, to fill a gap left when the Color Terms Study Guide was linked. Review and edit before treating it as course material.

# Luma Key

## Definition
Isolates parts of an image based on luminance (brightness) value alone, ignoring hue and saturation entirely — everything above/below/between chosen brightness thresholds gets selected, regardless of color.

## In Practice
Built using a luma-only qualifier or the luminance channel of the HSL Qualifier (hue and saturation ranges left wide open, only the luminance sliders narrowed). Common uses: isolating blown-out highlights or crushed shadows for targeted correction, pulling a quick matte from high-contrast footage (e.g. separating a bright sky from a darker foreground), or building a garbage-matte-style starting selection before refining further. Compare to the [[HSL Qualifier]], which can select by hue and saturation as well as luminance — a Luma Key is the special case where only the brightness axis matters, which makes it fast but also indiscriminate about color (it will grab anything at the right brightness, bright red or bright blue alike).

## Related Terms
[[HSL Qualifier]], [[Power Windows]], [[Luminance]], [[Histogram]]

## Further Resources
