---
aliases:
  - Face Refinement
  - Lens Blur
  - Letterbox DCTL
  - Blanking DCTL
  - Gamut Limiter
  - Light Rays
  - Deflicker
  - Dust Buster
  - Patch Repair
  - Stop Motion
  - Analog Damage
  - Film Damage
  - Camera Shake
  - Flicker Removal
  - Lens Distortion
  - Chromatic Aberration
tags:
  - glossary/davinci-resolve
---
# OFX Plugin Tour (Misc Effects Survey)

## Definition
A grab-bag survey of Resolve's OFX effects covered in this course's "misc color tips" session, explicitly framed as "play with whatever looks interesting" rather than required curriculum. Bundled here as one entry rather than one note per plugin, since most were introduced only briefly.

## In Practice
- **Face Refinement** *(paid)* — tracks a front-facing face; shine reduction, skin contrast, eye/lip/cheek/forehead retouching. Easy to overdo into a "clown makeup" result.
- **Lens Blur** *(paid)* — bokeh-aware background blur; more convincing than the standard Blur palette, especially paired with a [[Layer Mixer]] to protect the foreground.
- **DCTL community plugins** (installed differently — see [[DCTL (DaVinci Color Transform Language)]]): **Letterbox** (node-level, toggleable per-node), **Blanking** (flags thin black-line reframe errors — an editor's QC tool, not really a color tool), **Gamut Limiter** (clamps saturation to a target space; its actual use case wasn't fully clear even to the instructor).
- **Light Rays** — adjustable god-ray effect.
- **Deflicker** *(paid)* — corrects practical-light flicker in slow motion.
- **Dust Buster** — removes dirt/hair/scratches; genuinely useful for restoring old film footage.
- **Patch Repair** — a rougher, faster cousin of the [[Clone Stamp Technique]]: one oval defines the source, another the destination, with automatic edge blending.
- **Stop Motion** — reduces effective frame rate for a stop-motion look.
- **Analog Damage** — VHS/broadcast-era presets (Old VHS, 1960s B&W TV, security-camera look, etc.); presets are strongly recommended over the fully custom option.
- **Film Damage** — tint, blur, dust/dirt, scratches, grain — a heavier "damaged print" look than Analog Damage.
- **Camera Shake** — adjustable randomness/pause length for an organic handheld feel on a locked shot.
- **Flicker Removal / Flicker Addition** — two effects for opposite directions.
- **Lens Distortion** — general lens-warp adjustment.
- **Chromatic Aberration (correction)** — separate red/cyan and blue/yellow scale + edge controls, related to the [[Splitter/Combiner Node]] technique of adjusting channels independently.

## Teaching Analogies & Examples
- **Wandering a hardware store's tool aisle rather than being handed a shopping list**: this lesson deliberately isn't "learn these 17 specific effects" — it's "here's the aisle, go pick up whatever tool looks useful for the job you're actually trying to do." Treat this note the same way: a directory to browse when you have a specific problem, not a vocabulary list to memorize term-by-term.
## Related Terms
[[OFX (OpenFX Plugins)]], [[Clone Stamp Technique]], [[Layer Mixer]], [[Splitter/Combiner Node]]

## Further Resources
