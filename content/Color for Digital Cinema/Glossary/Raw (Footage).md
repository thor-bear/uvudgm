---
aliases:
  - RAW
  - REDCode RAW
  - ARRIRAW
  - Blackmagic RAW
  - CinemaDNG
tags:
  - glossary/davinci-resolve
---
# Raw (Footage)

## Definition
Unprocessed (or minimally processed) sensor data — camera settings like ISO and white balance remain adjustable as metadata after the fact, since the image hasn't been "baked" yet. Effectively 4:4:4:4 since no chroma subsampling has been applied. Named formats: REDCode RAW (R3D), ARRIRAW, Canon RAW, Blackmagic RAW, CinemaDNG, ProRes RAW.

## In Practice
Very flexible, but computationally expensive to grade — debayering happens live while grading, which can require serious GPU horsepower at high resolutions. Some cameras allow a lower-quality live debayer while working, then force full quality on export. **Caveat**: Blackmagic RAW isn't technically full raw — it's a partial debayer, trading some of raw's flexibility for significantly better playback performance, a deliberate hybrid rather than "true" raw. Raw formats are camera-recording-only; standard software can't export as raw. Rule of thumb stated repeatedly in this course: always shoot raw or log, never a directly display-baked format, since baked footage can't recover lost highlight/shadow detail.

## Teaching Analogies & Examples
- **The undeveloped negative, not the printed photo**: RAW footage is the sensor's unprocessed data, before decisions like white balance or contrast have been permanently baked in — nearly everything about it stays adjustable after the fact, which is exactly why it needs an explicit decode step (see [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Camera RAW Decode Settings (IPP2, RED Wide Gamut RGB, Log3G10)]]) before it behaves like a normal image.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Log (Footage)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Debayer, Debayering]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Camera RAW Decode Settings (IPP2, RED Wide Gamut RGB, Log3G10)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Dynamic Range]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Latitude]]

## Further Resources


## Appears In


[[Lesson 05 - Primaries and Shot-Matching Part 1]], [[Lesson 08 - Conforming and Roundtripping]]
