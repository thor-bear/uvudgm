---
aliases:
  - OpenEXR
tags:
  - glossary/davinci-resolve
---
# EXR (OpenEXR)

## Definition
A visually-lossless intermediate file format, part of the same category as ProRes/DNxHR/DPX/TIFF. Used with linear gamma for VFX/compositing handoffs specifically.

## In Practice
The official, spec-recommended format for ACES VFX handoff: a 16-bit float EXR sequence in [[ACEScg vs. ACEScct (ACES Working Spaces)|ACEScg]] (linear), since compositing tools generally expect linear data. Genuinely large file sizes compared to the alternative — a short clip example in this course ran ~5.4GB as EXR vs. under 1GB as a comparably-tagged ProRes 4444. True EXR matters most for genuinely high-bit-depth raw camera-original material (RED, ARRI), where real extra data exists to preserve; for footage that was already ProRes-compressed camera footage, a tagged ProRes 4444 handoff is visually and technically near-identical.

## Teaching Analogies & Examples
- **A shipping crate built for lossless cargo, not a suitcase**: EXR is a file format built to carry extremely high dynamic range and precision (often 32-bit float) without throwing anything away in compression — the industry standard for VFX and compositing work specifically because it can move between studios and software without any quality lost in transit, unlike a compressed delivery codec.
## Related Terms
[[ACEScg vs. ACEScct (ACES Working Spaces)]], [[Visually Lossless (Intermediate Codec)]], [[OCIO (OpenColorIO)]], [[Color-to-VFX Workflow (Pipeline Order)]]

## Further Resources
