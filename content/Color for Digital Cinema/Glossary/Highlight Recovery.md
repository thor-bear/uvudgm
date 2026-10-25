---
aliases:
tags:
  - glossary/davinci-resolve
---
# Highlight Recovery

## Definition
Pulling detail back into a blown-out or overexposed area of a shot — several practical methods covered in this course, most relying on keying the highlight from a point in the node chain *before* the main contrast/grading work, rather than from the already-graded image.

## In Practice
1. **Outside node before the contrast node** (Shift+S to insert before) — key the highlight on this pre-contrast node so the selection pulls from the raw/flat image, then pipe the alpha into the node handling final contrast and grade the highlight independently.
2. **Layer mixer method** — same concept, but a [[Layer Mixer]] pulls from the log/raw image instead; often gives a cleaner result than the outside-node method, though it varies shot to shot.
3. **Highlight qualifier slider** — key after the main contrast node, then use the dedicated Highlight adjustment slider (the "HL" control) instead of Gain — Gain moves broadly across the tonal range, while the Highlight slider targets specifically the brightest values for a more surgical pull-down. A matching Shadow slider exists for the deep end.
4. **ACES workflow** — grading from flat log data with the display conversion applied at the very end of the chain means targeted highlight work comes out cleaner than in a gamma-managed space — see [[Color-Managed Workflow]].

## Teaching Analogies & Examples
- **Finding the detail hiding in an overexposed window, if it's there to find**: highlight recovery techniques try to reconstruct detail in blown-out areas — but this only works if that detail was actually captured and just compressed/clipped visually, not truly gone. A shot with real Latitude has recoverable highlights sitting just past what's visible on the scope; a truly clipped highlight has nothing left to reconstruct, no matter which technique you throw at it.
## Related Terms
[[Layer Mixer]], [[Outside Node]], [[Color-Managed Workflow]], [[HSL Qualifier]]

## Further Resources
