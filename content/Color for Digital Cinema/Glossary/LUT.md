---
aliases:
  - Look-Up Table
  - Technical LUT
  - Creative LUT
tags:
  - glossary/davinci-resolve
---
# LUT

## Definition
A Look-Up Table — a preset mathematical transform applied to color/pixel values. Two distinct uses come up constantly in this course:
- **Technical LUT**: performs only a color-space conversion (e.g. ARRI LogC → Rec. 709), no styling.
- **Creative LUT**: a stylized, film-emulation-style look.

## In Practice
LUTs are genuinely destructive — they break [[32-bit Float]] non-destructive grading, since data they clip can't be recovered by nodes downstream. The near-non-negotiable rule taught throughout this course: if using a LUT, place it at the very end of the node chain (or timeline level) so all grading happens on the un-clipped data beneath it. [[Color Space Transform (CST)]] and ACES Transform nodes accomplish the same log→display conversion non-destructively and are generally preferred over a raw technical LUT for that reason. Film-print-emulation LUTs (Kodak 2383, Fuji 3510) additionally require Cineon-gamma input rather than Rec. 709 — see [[Film Print Emulation (Kodak 2383, Fuji 3510)]]. Inside a color-managed (ACES) pipeline, a standard technical LUT actively breaks the pipeline; the ACES-native equivalent for style-only looks is an [[LMT (Look Modification Transform)]].

## Teaching Analogies & Examples
- **An Instagram filter with a fixed math table underneath**: a LUT takes every possible input color and swaps it for a specific output color, based on a pre-baked lookup table — apply the same LUT to two different shots and you get a consistent, repeatable transformation, not a live "adjustment" that reacts differently to each image.
- Useful distinction to draw explicitly: a LUT is a *fixed conversion*, while manual grading (wheels, curves) is *interpretation* — a LUT can be a great starting point or a technical necessity (like converting log to Rec.709 for viewing), but it isn't a substitute for actually grading a shot to match its neighbors.
## Related Terms
[[32-bit Float]], [[Color Space Transform (CST)]], [[LMT (Look Modification Transform)]], [[Film Print Emulation (Kodak 2383, Fuji 3510)]], [[Technicolor (2-Strip, 3-Strip Emulation)]], [[Show LUT (Pre-Production LUT)]], [[Key Output Gain (Node Opacity)]]

## Further Resources
```mermaid
flowchart LR
    N1[Node 1<br/>primary grade] --> N2[Node 2<br/>secondary grade] --> N3[Node 3<br/>look] --> L[LUT<br/>always last]
```
Grading happens on un-clipped 32-bit float data; the LUT sits at the very end of the chain so nothing downstream has to recover data the LUT already clipped.
