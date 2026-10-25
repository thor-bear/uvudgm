---
aliases:
  - Hue/Sat/Lum Curves
  - Hue vs Hue
  - Hue vs Sat
  - Hue vs Lum
  - Lum vs Sat
  - Sat vs Sat
tags:
  - glossary/davinci-resolve
---
# Hue/Sat/Lum Curves

## Definition
Five two-parameter curves, each following the same pattern: the first term is what you're *selecting*, the second is what you're *adjusting* about that selection.
- **Hue vs. Hue**: select a hue, shift that hue elsewhere on the wheel.
- **Hue vs. Sat**: select a hue, adjust its saturation.
- **Hue vs. Lum**: select a hue, adjust its brightness (a gentler, more limited range in practice).
- **Lum vs. Sat**: select a luminance range (e.g. "the shadows"), adjust saturation within just that range.
- **Sat vs. Sat**: select an existing saturation range, adjust saturation of just that range — good for taming a specific overly-saturated object without a global desaturation.

## In Practice
Hue-vs-Hue is the workhorse of this course's color-scheme pushes — nudging blues toward cyan and oranges toward true orange to strengthen a complementary scheme, for example. Not every idea survives contact with a shot: this course repeatedly models trying a Sat-vs-Sat or Hue-vs-Hue curve, judging it isn't working, and abandoning it in favor of a different tool.

## Teaching Analogies & Examples
- **A dial that only turns when a specific condition is met**: a "Hue vs. Sat" curve says "wherever this specific hue shows up, change its saturation by this amount" — it only acts on the targeted range of the input axis, leaving every other hue in the image completely untouched. That's what makes these curves feel more surgical than a global slider: you're writing a conditional rule, not a blanket adjustment.
- The green-shift example already used in this course (nudging one camera's rendering of green closer to another's) is worth keeping as the anchor case — it's a concrete, real problem (camera-matching) solved by a tool that otherwise sounds abstract.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Curves (Custom, RGB Curves)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Hue]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Saturation]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Complementary (Color Scheme)]]

## Further Resources


## Appears In


[[Lesson 05 - Primaries and Shot-Matching Part 1]], [[Lesson 10 - Secondaries Part 1 and Color Theory Part 2]], [[Lesson 11 - Secondaries Part 1 Lab 06]], [[Lesson 14 - Skintones and Beauty Grading]], [[Lesson 19c - Practicing Looks II]]
