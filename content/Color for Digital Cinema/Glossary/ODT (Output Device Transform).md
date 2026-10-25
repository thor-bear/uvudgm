---
aliases:
  - Output Device Transform
tags:
  - glossary/davinci-resolve
---
# ODT (Output Device Transform)

## Definition
Maps graded footage from a color-managed working space out to a chosen delivery/display color space (Rec. 709, P3, Rec. 2020, etc.) — for monitoring/output only, not baked into the actual grade unless deliberately exported that way.

## In Practice
In node-based ACES, an ODT sits as the very last node in the chain (Input: ACEScct, Output: e.g. Rec. 709) — toggling it on/off shows the grade is fully preserved either way; with it off, the image looks like flat log again, but all the underlying node adjustments remain. This "output transform sits at the very end, everything else grades underneath it" principle is the defining feature of a color-managed pipeline — doing the conversion first and grading afterward is not color management, even if visually similar. In project-based ACES this is the ACES Output Transform setting instead of a per-clip node.

## Teaching Analogies & Examples
- **The exit checkpoint on the other side of ACES's border**: after grading happens inside the common ACES space, the ODT translates the result back out into whatever the final destination actually needs — a Rec. 709 ODT for a standard TV, a P3-DCI ODT for a cinema screen, an HDR ODT for a Dolby Vision display. Same footage, different exit paperwork depending on where it's headed.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/IDT (Input Device Transform)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/ACES]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Rec. 709]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Color Space Transform (CST)]]

## Further Resources


## Appears In


[[Lesson 12 - Color Management and ACES]]
