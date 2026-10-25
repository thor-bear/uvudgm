---
aliases:
  - Inside/Outside Softness (Advanced Window Feathering)
  - Inside/Outside Softness
tags:
  - glossary/davinci-resolve
---
# Inside/Outside Softness (Advanced Window Feathering)

## Definition
Distinct from the single general Softness slider used by default all semester — Inside/Outside softness lets a power window apply a different feather amount on different parts of its edge, addressing the tension between a loosely-feathered window (reads as an obvious "added digital light") and a fully hand-traced detailed shape (labor-intensive, unclear how far to extend the detail).

## In Practice
The technique: draw high detail only where an edge genuinely needs to be clean (tight around a face, where mismatched roll-off would be obvious), letting it fall off into a loose, simple line elsewhere (into hair, where detail doesn't matter) — then use Inside/Outside softness to apply a small, precise feather specifically at the detailed edge while allowing a much larger feather everywhere else. **Explicit caution**: don't reach for this by default — it roughly triples the shape's control points, which can seriously complicate later keyframing. Use the standard single Softness slider unless a shot genuinely demands this more surgical control.

## Teaching Analogies & Examples
- **Two separate dimmer zones on either side of a doorway threshold**: standard feathering treats a window's edge as one symmetric blur. Inside/Outside Softness lets you control how the effect fades *into* the window and how it fades *outside* it independently — like being able to dim the light differently on each side of a doorway instead of one uniform gradient straddling the frame.
## Related Terms
[[Power Windows]], [[Keyframing (Power Window Keyframes)]], [[Organic Vignette]]

## Further Resources
