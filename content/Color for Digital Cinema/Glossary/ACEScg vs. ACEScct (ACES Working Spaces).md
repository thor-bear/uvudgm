---
aliases:
  - ACEScg
  - ACEScct
tags:
  - glossary/davinci-resolve
---
# ACEScg vs. ACEScct (ACES Working Spaces)

## Definition
Two distinct working spaces inside the ACES pipeline that serve different jobs:
- **ACEScct**: a log-gamma space — where actual color grading happens (Resolve).
- **ACEScg**: a linear-gamma space — the standard compositing/VFX-friendly ACES variant, distinct from ACEScct.

## In Practice
When handing footage off for VFX, exporting as an EXR sequence in ACEScg (linear) is the official, spec-recommended approach, since compositing tools generally expect linear data. A practical everyday alternative: ProRes 4444 tagged with an ACES color space via an OCIO transform — visually and technically near-identical for footage that wasn't itself raw camera-original data, at a fraction of the file size. In After Effects (Project Settings → Color → OCIO), the working space should be set to ACEScg for compositing, with imported ACEScg assets explicitly tagged as such via Interpret Footage — AE sometimes mis-guesses an ACEScg asset as the larger ACES2065-1 gamut by default, producing a visibly wrong result until manually corrected.

## Teaching Analogies & Examples
- **Two different units of measurement for the same quantity**: ACEScg is linear — like measuring light in raw physical units, which is exactly what a compositing/VFX renderer needs to do accurate physics-based math. ACEScct is log — like measuring on a curved, perceptually-scaled dial, which is what a colorist's eye and grading tools respond to more intuitively. Same underlying scene, two different rulers depending on which job you're doing.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/ACES]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/OCIO (OpenColorIO)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/EXR (OpenEXR)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Color-to-VFX Workflow (Pipeline Order)]]

## Further Resources


## Appears In


[[Lesson 04 - Basic Workflow and Color Terms Part 3]], [[Lesson 12 - Color Management and ACES]], [[Lesson 26 - HDR and Miscellaneous]]
