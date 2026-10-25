---
aliases:
  - Noise Reduction (Spatial/Temporal)
  - Spatial Noise Reduction
  - Temporal Noise Reduction
  - Neat Video
tags:
  - glossary/davinci-resolve
---
# Noise Reduction (Spatial, Temporal)

## Definition
Resolve's built-in noise reduction (paid version only) — Color page → Motion Effects panel → separate Spatial and Temporal sections. **Spatial**: less taxing on the system, less effective, destroys detail if pushed too far. **Temporal**: better quality, much more taxing on the system — a frame-count setting (how many frames it pulls data from, 3 is a reasonable default) and a motion-estimation quality toggle (Faster vs. Better).

## In Practice
The recommended hybrid approach, repeated throughout this course: since eyes are less sensitive to chroma noise than luma noise, link luma/chroma in the Spatial section and push chroma noise reduction fairly aggressively there (it doesn't blotch as visibly when isolated to chroma), then unlink and handle luma noise in the Temporal section instead. This combination reads notably cleaner than maxing out either method alone. **Neat Video** (a paid third-party OFX plugin, works in free Resolve) is a genuine alternative worth having in the toolkit for noise too severe for the built-in tool — build a noise profile from a clean, texture-free patch of the image (not skin, not detail), then apply. Results are shot-dependent; test both rather than defaulting to one.

## Teaching Analogies & Examples
- **Smoothing out a single blurry photo vs. averaging several photos of the same still moment**: Spatial noise reduction looks only within one frame and smooths grain there, the way blurring a single photo softens its speckled texture. Temporal noise reduction compares *multiple frames* over time and averages out what's just random per-frame noise, the way stacking several photos of the same static scene and averaging them cancels out random sensor noise while keeping the real image intact. A hybrid approach uses both together.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Chrominance]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Luminance]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/OFX (OpenFX Plugins)]]

## Further Resources


## Appears In


[[Lesson 19 - Misc Color Tips]]
