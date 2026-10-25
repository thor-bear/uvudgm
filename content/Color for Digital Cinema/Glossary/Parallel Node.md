---
aliases:
tags:
  - glossary/davinci-resolve
---
# Parallel Node

## Definition
Applies simultaneously with, and *blends with*, the node(s) it's parallel to, rather than overriding them (Option+P). All parallel nodes source from the same upstream node and combine their effects.

## In Practice
Good for "preserve the overall look, but also nudge this one selection" scenarios (e.g. keep a gritty desaturated grade but still warm up the skin tone), where a [[Layer Mixer]] would fully cancel out the base look wherever its selection applies. The two are visually similar but functionally opposite — a recurring live self-correction across the course's demos is reaching for a parallel node when a layer mixer's override/blend-mode behavior is actually needed (e.g. bleach bypass specifically requires a layer mixer's Composite Mode control; a parallel node has no blend-mode concept).

## Teaching Analogies & Examples
- **Two chefs working from the same raw ingredients at once**: unlike a Serial Node's assembly line (each station building on the last), Parallel Nodes all start from the *same* original image simultaneously — each branch does its own independent adjustment, then the results get combined at the end.
- Good contrast to draw directly against Serial Node: "Serial passes the image down a line; Parallel hands out copies and combines the results." Worth teaching them back-to-back specifically because they're both "multiple nodes" but work in fundamentally different ways.
## Related Terms
[[Layer Mixer]], [[Serial Node]], [[Outside Node]]

## Further Resources
See [[Layer Mixer]] for a side-by-side diagram comparing all three node types.
