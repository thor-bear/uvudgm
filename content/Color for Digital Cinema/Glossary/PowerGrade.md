---
aliases:
tags:
  - glossary/davinci-resolve
---
# PowerGrade

## Definition
A [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Still (Gallery)|Still]] that *also* carries its full node-tree information — applying it (via middle-click) recreates the entire grade, not just a look-alike reference image.

## In Practice
The **PowerGrade gallery persists across every project** opened on the same machine (though it doesn't follow to a different computer), unlike the project-scoped Stills gallery — this is why a reusable node template (Luma/Chroma/Chroma2/Curves/Versus Curves) gets saved as a PowerGrade rather than a Still. **Critical gotcha**: before grabbing a still for a template, make sure the correct node is selected/highlighted — the still remembers whichever node was active when saved, and middle-clicking the template later lands you on that same node. Exporting a PowerGrade to disk produces two files (the still image and the PowerGrade data) — both are needed to share a look with someone else. Right-click → **Append** (rather than middle-click) applies a PowerGrade's look without dragging along any stale tracking data it might carry, which middle-click can do.

## Teaching Analogies & Examples
- **A saved recipe vs. a photo of the finished dish**: a Still is the photo — just a picture of what the dish looked like. A PowerGrade is the actual recipe — apply it to a new dish (clip) and it recreates the whole preparation, not just a similar-looking result.
- The node-template gotcha (which node was selected when you saved it) is worth demonstrating live and letting it "go wrong" once on purpose — watching a PowerGrade land on the wrong node is far more memorable than being warned about it in the abstract.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Still (Gallery)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Append Node Graph]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Look (Color Grade)]]

## Further Resources


## Appears In


[[Lesson 04 - Basic Workflow and Color Terms Part 3]], [[Lesson 05 - Primaries and Shot-Matching Part 1]], [[Lesson 06 - Color Theory]], [[Lesson 09 - Codecs and Primaries and Shot-Matching Part 2]], [[Lesson 16 - Creating Looks Part 1]], [[Lesson 17a - Sky Replacements]], [[Lesson 18 - Creating Looks Part 2]], [[Lesson 19b - Practicing Looks]]
