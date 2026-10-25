---
aliases:
  - Look Modification Transform
tags:
  - glossary/davinci-resolve
---
# LMT (Look Modification Transform)

## Definition
An ACES-specific category of LUT that applies *only* a stylistic look, performing no color-space conversion at all — since ACES is already handling that conversion elsewhere in the pipeline. Distinct from a standard technical [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/LUT]], which does the conversion.

## In Practice
Inside a color-managed pipeline (ACES or DaVinci Wide Gamut), a traditional gamma-conversion LUT actively breaks the grade — applying one on top of ACES double-applies a color-space conversion and constrains the grade to a smaller gamut than ACES provides. LMTs are the correct tool instead. LMTs built for ACES are typically labeled "ACEScct to ACES" in the LUT menu; a parallel set labeled "DWG" (DaVinci Wide Gamut) exists for [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Resolve Color Management (RCM)]] projects — the two are not interchangeable.

## Teaching Analogies & Examples
- **A style filter that sits inside ACES's translation pipeline, not outside it**: the IDT and ODT are strictly about *technical* translation (this camera in, this display out) — an LMT is where an actual creative look gets inserted into that same pipeline, without breaking the neutral, portable translation happening on either side of it.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/LUT]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/ACES]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Resolve Color Management (RCM)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Film Print Emulation (Kodak 2383, Fuji 3510)]]

## Further Resources
See [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/ACES]] for the IDT→working space→ODT pipeline diagram — an LMT sits inside that working-space stage, alongside the actual grade.


## Appears In


[[Lesson 18 - Creating Looks Part 2]], [[Lesson 26 - HDR and Miscellaneous]]
