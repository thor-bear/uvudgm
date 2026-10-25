---
aliases:
  - IPP2
  - Log3G10
  - RED Wide Gamut RGB
tags:
  - glossary/davinci-resolve
---
# Camera RAW Decode Settings (IPP2, RED Wide Gamut RGB, Log3G10)

## Definition
The standing decode checklist used throughout this course for RED RAW footage (Camera RAW panel): **Decode Using**: Clip or Project; **Color Science**: IPP2 (RED's current image processing pipeline); **Color Space**: RED Wide Gamut RGB; **Gamma Curve**: Log3G10.

## In Practice
Restores full dynamic range access for grading, rather than being stuck with a baked-in display transform some RED footage can default to. **Per-clip** (Decode Using: Clip) is necessary when clips need genuinely different treatment (e.g. differing ISO between shots). **Project-wide** (Project Settings → Camera → RED, Decode Using: Project) applies one set of settings to every RED clip at once — faster when all footage should be treated uniformly, but keep all four "Use Camera Metadata" boxes checked or you risk silently overriding the DP's actual on-set exposure/white-balance decisions. **Middle-click caution**: copying a grade from one RED clip to another also copies its RAW panel settings, including ISO/white balance — a trap if clips were shot at different ISOs. Under [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/ACES]], RED raw footage needs *no* manual input transform at all, a convenience over [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Resolve Color Management (RCM)]], which does not auto-apply these settings and requires them set explicitly (ideally at the project level).

## Teaching Analogies & Examples
- **Choosing how a photo negative gets developed, after the fact**: RAW footage is like an undeveloped negative — the decode settings are the darkroom choices (which chemistry, which paper, how long to expose) that determine what image actually comes out, and unlike a real negative you can change your mind and redevelop it differently any time.
- The class's own RED example is the sharpest teaching moment available here — a wrong/default decode setting can produce an image that looks entirely normal and "already graded," which is exactly what makes it dangerous: there's no obvious visual cue that you're leaving dynamic range on the table, only checking the actual decode settings reveals it.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Raw (Footage)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Debayer, Debayering]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/ACES]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Resolve Color Management (RCM)]]

## Further Resources


## Appears In


[[Lesson 04 - Basic Workflow and Color Terms Part 3]], [[Lesson 11 - Secondaries Part 1 Lab 06]], [[Lesson 12 - Color Management and ACES]], [[Lesson 19c - Practicing Looks II]]
