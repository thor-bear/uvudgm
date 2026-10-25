---
aliases:
  - HSL Key
  - Qualifier
tags:
  - glossary/davinci-resolve
---
# HSL Qualifier

## Definition
Selects by hue, saturation, and luminance in combination — functions like a chroma/green-screen key generalized to any color, able to isolate very specific combinations (e.g. only bright, saturated reds). Includes blur/feather and denoise controls for smoothing selection edges.

## In Practice
Two ways to build a selection: click-and-drag directly on the image with the eyedropper (fast, but less precise, since it's estimating what you're trying to select), or manual slider adjustment (preferred) — hue width/position, saturation low/high clip points, luminance low/high clip points, each with independent softness/feather (L.Soft/H.Soft) controls. **Highlight mode** (Shift+H) shows exactly what's selected as a white/black matte overlay — essential for judging selection quality, toggled off once refining is done. Matte finesse controls (denoise/clean) exist separately for the selected ("white") and unselected ("black") portions. For very fine, targeted problems (a few overly-pink pixels, not the whole skin tone), use the manual sliders rather than the eyedropper — practice predicting where a problem sits on the hue wheel and dialing the width slider directly to that position.

## Teaching Analogies & Examples
- **A metal detector with three separate dials**: Hue is "what kind of metal," Saturation is "how strong a signal," Luminance is "how deep." Narrow all three dials and you find only very specific objects; widen them and you sweep up more.
- **A fishing net with adjustable mesh size**: the softness/feather controls are the net's mesh — a hard-edged selection (no feather) catches everything-or-nothing at a sharp boundary, while a feathered selection lets the "catch" fade gradually at the edges instead of cutting off abruptly, which is what keeps a selective grade looking natural.
## Related Terms
[[3D Keyer]], [[Power Windows]], [[Garbage Matte]], [[Vectorscope]]

## Further Resources
- [DaVinci Resolve Color page overview (Blackmagic Design, official)](https://www.blackmagicdesign.com/products/davinciresolve/color) — the qualifier section shows the eyedropper-and-refine workflow in motion, which is easier to follow watched than described.
