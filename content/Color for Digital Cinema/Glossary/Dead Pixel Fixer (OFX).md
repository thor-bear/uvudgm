---
aliases:
tags:
  - glossary/davinci-resolve
---
# Dead Pixel Fixer (OFX)

## Definition
An OFX effect for removing dead/hot sensor pixels — drag onto a node, zoom in, click directly on each hot pixel. Handles motion well with minimal artifacting; remover size is adjustable if the default doesn't grab cleanly.

## In Practice
Dead/hot pixels are often invisible until working at full resolution — a shot mastering to HD can hide pixels visible at 4K, worth checking timeline resolution before declaring a shot clean. An alternate manual method exists using the [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Clone Stamp Technique]] (grab a clean pool of pixels, use Node Sizing to drag it over the bad spot). RED footage has a built-in hot-pixel removal checkbox in its RAW settings as a third option.

## Teaching Analogies & Examples
- **A single dead pixel on a monitor, but in your footage instead**: a sensor can develop one stuck or dead pixel that shows up as a tiny, fixed, wrong-colored dot in the exact same screen location every frame — this plugin patches that one specific spot using surrounding pixel data, the video equivalent of retouching a single scratch that shows up identically in every photo from a damaged lens.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Clone Stamp Technique]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/OFX (OpenFX Plugins)]]

## Further Resources


## Appears In


[[Lesson 19 - Misc Color Tips]]
