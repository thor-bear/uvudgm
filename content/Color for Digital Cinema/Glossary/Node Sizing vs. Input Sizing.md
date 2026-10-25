---
aliases:
  - Input Sizing
tags:
  - glossary/davinci-resolve
---
# Node Sizing vs. Input Sizing

## Definition
Two different modes in a power window's Sizing panel dropdown. **Input Sizing** (the default) repositions the entire frame. **Node Sizing** repositions the actual *content* being displayed within that node's selection — the mechanism that makes a "clone stamp" effect work.

## In Practice
Dragging a power-window shape directly only moves *where the mask is drawn*, not what it displays — to actually relocate sampled content (e.g. covering an unwanted object with a clean patch pulled from elsewhere in frame), switch the Sizing panel's dropdown from Input Sizing to Node Sizing and adjust Pan/Tilt (and Zoom/Rotation if needed) there instead. This is the core mechanic behind [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Clone Stamp Technique]], the Salt Flats-style dead-pixel-removal fallback, and the film-grain-overlay aspect-ratio fix. A flagged, easy-to-miss confusion point: leaving the dropdown on Input Sizing looks like nothing is happening or like the wrong thing is moving.

## Teaching Analogies & Examples
- **Resizing a photo before vs. after framing it**: Input Sizing resizes the image before any grading happens on that node, so everything downstream sees the resized version. Node Sizing resizes only what that specific node outputs, without affecting how earlier nodes saw the image. Getting these backwards is a classic way to end up with a power window that no longer lines up with what's on screen.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Clone Stamp Technique]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Power Windows]]

## Further Resources
See [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Clone Stamp Technique]] for a linked video showing this mechanic in motion — the core skill this concept enables.


## Appears In


[[Lesson 18 - Creating Looks Part 2]], [[Lesson 19 - Misc Color Tips]]
