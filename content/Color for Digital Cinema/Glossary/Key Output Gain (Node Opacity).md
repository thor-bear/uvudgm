---
aliases:
  - Node Opacity
tags:
  - glossary/davinci-resolve
---
# Key Output Gain (Node Opacity)

## Definition
A control that dials down a node's overall effect strength — rather than fighting to get the raw adjustment values exactly right, reduce the node's opacity (e.g. 0.75) to soften an adjustment that's directionally correct but too strong.

## In Practice
Used constantly throughout this course as a finishing touch on secondary corrections, LUTs, and PowerGrades alike. Its most powerful use is keyframed: setting Key Output Gain to 0 at one frame and 1 at another creates a fade (e.g. smoothing a mid-shot exposure/iris shift so a correction is at full strength exactly where needed and fades to nothing once the shot's natural exposure catches up), or a hard, un-interpolated cut between two adjacent frames (e.g. simulating a light switching off). Note the internal node name in the Keyframes panel is sometimes labeled "Defocus" — an unrelated, non-descriptive holdover name, not a literal defocus effect.

## Teaching Analogies & Examples
- **A dimmer on the whole effect, not the tool inside it**: instead of adjusting the actual grade a node is applying, Key Output Gain turns down how strongly that entire node's result gets blended back in — like a mix knob on one channel of a mixing board, dialing the whole effect toward "barely there" or "fully applied" without touching any of its individual settings.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Keyframing (Power Window Keyframes)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/32-bit Float]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/LUT]]

## Further Resources


## Appears In


[[Lesson 15 - Tracking and Keyframing]], [[Lesson 18 - Creating Looks Part 2]]
