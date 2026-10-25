---
aliases:
tags:
  - glossary/davinci-resolve
---
# PowerGrade

## Definition
A [[Still (Gallery)|Still]] that *also* carries its full node-tree information — applying it (via middle-click) recreates the entire grade, not just a look-alike reference image.

## In Practice
The **PowerGrade gallery persists across every project** opened on the same machine (though it doesn't follow to a different computer), unlike the project-scoped Stills gallery — this is why a reusable node template (Luma/Chroma/Chroma2/Curves/Versus Curves) gets saved as a PowerGrade rather than a Still. **Critical gotcha**: before grabbing a still for a template, make sure the correct node is selected/highlighted — the still remembers whichever node was active when saved, and middle-clicking the template later lands you on that same node. Exporting a PowerGrade to disk produces two files (the still image and the PowerGrade data) — both are needed to share a look with someone else. Right-click → **Append** (rather than middle-click) applies a PowerGrade's look without dragging along any stale tracking data it might carry, which middle-click can do.

## Teaching Analogies & Examples
- **A saved recipe vs. a photo of the finished dish**: a Still is the photo — just a picture of what the dish looked like. A PowerGrade is the actual recipe — apply it to a new dish (clip) and it recreates the whole preparation, not just a similar-looking result.
- The node-template gotcha (which node was selected when you saved it) is worth demonstrating live and letting it "go wrong" once on purpose — watching a PowerGrade land on the wrong node is far more memorable than being warned about it in the abstract.
## Related Terms
[[Still (Gallery)]], [[Append Node Graph]], [[Look (Color Grade)]]

## Further Resources
