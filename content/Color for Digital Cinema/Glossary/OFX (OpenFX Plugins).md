---
aliases:
  - OpenFX
tags:
  - glossary/davinci-resolve
---
# OFX (OpenFX Plugins)

## Definition
OpenFX — the plugin standard underlying a large share of Resolve's non-native effects, both first-party and third-party. Many tools covered throughout this course are technically OFX plugins: ACES Transform, Color Space Transform, Match Move, Dead Pixel Fixer, Grain, and the whole survey covered in [[OFX Plugin Tour (Misc Effects Survey)]].

## In Practice
Distinct from [[DCTL (DaVinci Color Transform Language)]], which is a different plugin/scripting mechanism (installed into its own subfolder, requires a full Resolve restart to appear, not an OFX effect despite similar-feeling installation). A free-vs-paid reference is worth keeping handy, since a meaningful share of Resolve's OFX toolkit (Face Refinement, Lens Blur, Deflicker, built-in Noise Reduction) is paid-only.

## Teaching Analogies & Examples
- **An app store for effects, with one common install format**: OFX is an open plugin standard multiple NLE/grading apps can support, so a plugin built to the OFX spec can run inside Resolve and other compatible software alike — similar to how a universal file format can be opened by more than one program, rather than every app requiring its own proprietary plugin format.
## Related Terms
[[OFX Plugin Tour (Misc Effects Survey)]], [[DCTL (DaVinci Color Transform Language)]], [[ACES]], [[Color Space Transform (CST)]]

## Further Resources
