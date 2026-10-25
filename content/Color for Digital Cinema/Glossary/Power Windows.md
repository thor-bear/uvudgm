---
aliases:
  - Power Curve
  - Power Window
tags:
  - glossary/davinci-resolve
---
# Power Windows

## Definition
Resolve's term for masks/shapes used to isolate part of a frame geometrically rather than by color — can be tracked across motion. Shape options: **Linear** (rectangle, edge-feather handles), **Circle** (same feather behavior), **Polygon** (rarely useful — requires modifying an existing shape rather than drawing freely), **Power Curve** (pen-tool icon — the most-used shape in this course, works like the Photoshop/Illustrator pen tool: click for straight points, click-and-drag for curves), and **Gradient**.

## In Practice
**Universal rule stressed throughout this course**: always add feather/softness to a power window — a hard, unfeathered edge reads as an obviously artificial shape, one of the most common student mistakes flagged. Selection philosophy repeated constantly: keep shapes **rough**, not tightly traced to a subject's exact contours — a loose shape tolerates natural subject movement far better than a precisely-traced mask, which visibly fails the moment the subject moves. Power windows combine naturally with an [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Outside Node]] to grab the inverse of whatever the window selected, and with [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Motion Tracking]] and [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Keyframing (Power Window Keyframes)]] for moving shots. See [[Inside/Outside Softness (Advanced Window Feathering)]] for more surgical, asymmetric feathering when a shape needs clean detail in one area and a loose falloff elsewhere.

## Teaching Analogies & Examples
- **A stage spotlight, not a paper cutout**: a Power Window isolates part of the frame the way a spotlight isolates part of a stage — soft-edged and natural. An unfeathered window is the paper-cutout version: an obviously artificial hard boundary that reads as fake the moment it moves.
- The "always add feather" rule is worth demonstrating both ways on purpose — show a hard-edged window adjustment first (it'll look like an obvious sticker slapped on the image), then add feather and watch it disappear into the shot. The visible before/after does more work than stating the rule.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Outside Node]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Motion Tracking]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Keyframing (Power Window Keyframes)]], [[Inside/Outside Softness (Advanced Window Feathering)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Organic Vignette]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Node Sizing vs. Input Sizing]]

## Further Resources


## Appears In


[[Lesson 05 - Primaries and Shot-Matching Part 1]], [[Lesson 06 - Color Theory]], [[Lesson 10 - Secondaries Part 1 and Color Theory Part 2]]
