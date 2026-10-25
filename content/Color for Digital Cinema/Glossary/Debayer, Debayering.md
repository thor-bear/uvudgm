---
aliases:
  - Debayer/Debayering
  - Debayering
  - Debayer
tags:
  - glossary/davinci-resolve
---
# Debayer, Debayering

## Definition
The process of reconstructing a full-color image from a camera sensor's raw Bayer-pattern data — the computationally expensive step that happens live while grading raw footage.

## In Practice
This course's standing rule: never let a VFX application debayer raw camera files (e.g. R3D) — different apps (Nuke, After Effects) will debayer differently than Resolve, producing inconsistent results. Always debayer in Resolve first, then hand off as ProRes 4444 or an EXR sequence. RED's specific debayer/decode settings are covered under [[Camera RAW Decode Settings (IPP2, RED Wide Gamut RGB, Log3G10)]].

## Teaching Analogies & Examples
- **Assembling a mosaic back into a photograph**: most camera sensors don't record full RGB at every pixel — they record a checkerboard-like pattern of individual red, green, and blue sensor sites (the Bayer pattern). Debayering is the math that reconstructs a normal full-color image from that mosaic, interpolating the missing color information at each pixel from its neighbors.
## Related Terms
[[Raw (Footage)]], [[Camera RAW Decode Settings (IPP2, RED Wide Gamut RGB, Log3G10)]], [[Color-to-VFX Workflow (Pipeline Order)]]

## Further Resources
- [The Bayer Sensor Strategy (RED Digital Cinema, official)](https://www.reddigitalcinema.com/red-101/bayer-sensor-strategy) — shows the actual mosaic pattern at 400% alongside the debayered result, making the checkerboard-to-photo reconstruction visible rather than just described.
