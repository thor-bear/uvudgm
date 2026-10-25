---
aliases:
  - RGB Curves
  - Ganged
  - Unganged
tags:
  - glossary/davinci-resolve
---
# Curves (Custom, RGB Curves)

## Definition
A Photoshop-style curve tool — left side is shadows, right side is highlights, drag points to reshape the tonal response. Formerly called "RGB Curves," now just "Curves" in modern Resolve. Alt-click anchors a point to the existing curve position before adjusting, useful for isolating an adjustment (e.g. recover highlights without disturbing anything else).

## In Practice
**Ganged vs. unganged**: ganged adjusts all channels (R/G/B/Y) together; unganged adjusts them independently — this is how split-toning is built (warm highlights via reds/greens up top, cool shadows via blues/greens at the bottom). Editable Splines (a toggle in the curve's three-dot menu) enables more granular midtone/texture adjustments — see [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Editable Splines]]. A recurring technique for deepening contrast without crushing shadows below zero: use Curves rather than Lift, anchoring the low end and pulling down just the lower-midtone region.

## Teaching Analogies & Examples
- **A precise, freeform version of the wheels**: Lift/Gamma/Gain moves three broad zones (shadows, mids, highlights) with three blunt dials. A Curve lets you place as many control points as you want, anywhere along that same range, and shape exactly how each narrow band of tones responds — a scalpel next to the wheels' broad brush.
- The classic "S-curve" is worth demonstrating live as the single most intuitive example: pull shadows down slightly and highlights up slightly on the same curve and watch contrast increase in a way that feels more filmic than the blunt Contrast slider alone.
## Related Terms
[[Hue/Sat/Lum Curves]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Editable Splines]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Contrast]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Bleach Bypass]]

## Further Resources
- [The Curves Tool: An Introduction to Color Correction Curves (PremiumBeat)](https://www.premiumbeat.com/blog/introduction-to-color-correction-curves/) — video + written walkthrough of the S-curve and other curve moves in motion, which reads clearer watched than described.


## Appears In


[[Lesson 06 - Color Theory]], [[Lesson 08 - Conforming and Roundtripping]], [[Lesson 19b - Practicing Looks]]
