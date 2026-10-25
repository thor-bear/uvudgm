---
aliases:
tags:
  - glossary/davinci-resolve
---
# DaVinci YRGB

## Definition
Resolve's native, non-color-managed working color space. Even without color management enabled, Resolve converts everything into this internal format behind the scenes to allow non-destructive push/pull grading — see [[32-bit Float]].

## In Practice
This course's default project setting all semester: Color Management set to DaVinci YRGB (not color-managed), Timeline/Output color space Rec. 709 Gamma 2.4. Distinct from **DaVinci YRGB Color Managed** (Resolve's actual color-managed pipeline, which converts into DaVinci Wide Gamut Intermediate instead) — see [[Resolve Color Management (RCM)]].

## Teaching Analogies & Examples
- **The "default settings" mode, not a specific look**: think of DaVinci YRGB as Resolve's out-of-the-box, non-color-managed operating mode — footage goes in and gets treated at roughly face value, no automatic translation happening behind the scenes the way ACES or RCM would do. It's the simplest starting point, which is exactly why this class starts here before introducing color management later in the semester.
## Related Terms
[[32-bit Float]], [[Rec. 709]], [[Resolve Color Management (RCM)]], [[Color-Managed Workflow]], [[Gamma Workflow (Non-Color-Managed)]]

## Further Resources
