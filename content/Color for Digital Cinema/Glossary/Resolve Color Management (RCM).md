---
aliases:
  - RCM
  - RCM2
  - DaVinci YRGB Color Managed
tags:
  - glossary/davinci-resolve
---
# Resolve Color Management (RCM)

## Definition
Resolve's own built-in equivalent to [[ACES]] — converts all input footage into a common internal working space (**DaVinci Wide Gamut**), then converts that out to whatever the display/delivery color space is. Same conceptual shape as ACES's pipeline, but using Resolve's own gamut instead of the Academy's.

## In Practice
Enabled via Project Settings → Color Management → DaVinci YRGB Color Managed, Color Processing Mode set to Wide Gamut Intermediate (labeled "HDR" but usable for SDR work too), Timeline/Output color space Rec. 709 Gamma 2.4. Per-clip input color space assignment is required for most sources (auto-detected for some ARRI ProRes footage, but should still be spot-checked); RED raw clips are auto-handled. **Gotcha**: unlike ACES, RCM does not automatically apply RED's decode/debayer settings ([[Camera RAW Decode Settings (IPP2, RED Wide Gamut RGB, Log3G10)]]) — those still need to be set explicitly, ideally at the project level. Primaries built under RCM don't transfer to ACES or vice versa — switching pipelines means redoing primaries from scratch.

## Teaching Analogies & Examples
- **Resolve's own house brand of the same idea as ACES**: both are automatic color-managed pipelines with the same basic shape (translate everything into one common internal space, then translate back out for delivery) — RCM just uses Resolve's own internal gamut (DaVinci Wide Gamut) instead of the Academy's ACES space. Same concept, different "currency" underneath.
## Related Terms
[[ACES]], [[Color-Managed Workflow]], [[DaVinci YRGB]], [[Camera RAW Decode Settings (IPP2, RED Wide Gamut RGB, Log3G10)]]

## Further Resources
