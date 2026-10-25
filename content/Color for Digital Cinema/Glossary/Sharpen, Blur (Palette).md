---
aliases:
  - Sharpen / Blur (Palette)
  - Mist
tags:
  - glossary/davinci-resolve
---
# Sharpen / Blur (Palette)

## Definition
Resolve's Blur/Sharpen palette — used for both simulated depth-of-field effects and beauty-grading skin smoothing, via three related tools: **Sharpen** (negative radius, kept subtle — pushed too far it reads as "fake sharpening"), **Blur** (straight blurring, can emulate a genuinely soft/low-resolution format), and **Mist** (the third teardrop icon — a diffusion-filter-style glow that softens without literally blurring detail the way a straight blur does).

## In Practice
A recurring combo technique: sharpen a subject (negative radius, ~0.44–0.45) while an [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Outside Node]] blurs everything else, simulating a rack-focus/depth-of-field effect even on footage that wasn't shot that way. Mist is the go-to skin-smoothing tool in beauty grading (drag Blur Radius fully down first to define the selection's edges, then dial the Mix slider to a subtle ~40–45 — much lower reads as an obvious beauty-filter effect). Also useful in reverse: a slight blur (~0.51–0.52) counterintuitively *fixes* oversharpened consumer-drone footage by removing fake sharpening artifacts without reading as blurry.

## Teaching Analogies & Examples
- **Focusing vs. defocusing a camera lens, after the fact**: Sharpen boosts edge contrast to make an image read as crisper (though it can't add detail that was never captured); Blur softens edges deliberately — for a dream sequence, a background push, or to hide a seam on a composite. Both are working with edges specifically, in opposite directions, which is why they live together on the same palette.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Outside Node]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Key Output Gain (Node Opacity)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Look (Color Grade)]]

## Further Resources


## Appears In


[[Lesson 11 - Secondaries Part 1 Lab 06]], [[Lesson 14 - Skintones and Beauty Grading]], [[Lesson 16 - Creating Looks Part 1]], [[Lesson 18 - Creating Looks Part 2]], [[Lesson 19 - Misc Color Tips]], [[Lesson 19b - Practicing Looks]]
