---
aliases:
  - DaVinci Color Transform Language
tags:
  - glossary/davinci-resolve
---
# DCTL (DaVinci Color Transform Language)

## Definition
A scripting language for custom color transforms — distinct from [[OFX (OpenFX Plugins)]] despite both being installed as third-party additions. A few DCTLs are used in this course by name: **Letterbox** (node-level letterboxing with a custom aspect-ratio field), **Blanking** (flags thin black lines at a frame edge from a slightly-off reframe — an editor's QC tool), and **Gamut Limiter** (intended to clamp saturation to a target color space).

## In Practice
Installed into a DCTL subfolder inside the LUT folder — **DCTLs require a full Resolve restart** to appear in the effects list, not just "Update Lists" the way LUTs do. **DCTL effects require the paid version of Resolve**; free-version use produces a watermark. Also the mechanism behind unofficial camera support in ACES — for cameras without a native IDT (e.g. DJI drones), a community-built DCTL implementing the manufacturer's published gamma white paper can serve as an unofficial input transform, searchable on forums like ACEScentral.

## Teaching Analogies & Examples
- **Writing your own custom kitchen tool instead of using only what's in the drawer**: DCTL lets programmers write custom color-transform code that runs inside Resolve like a built-in effect — for effects and math that Resolve's stock tools simply don't offer out of the box. Most users install and use DCTLs someone else wrote (like installing a plugin), rather than writing their own from scratch.
## Related Terms
[[OFX Plugin Tour (Misc Effects Survey)]], [[LUT]], [[ACES]], [[IDT (Input Device Transform)]]

## Further Resources
