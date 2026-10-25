---
aliases:
  - CST
tags:
  - glossary/davinci-resolve
---
# Color Space Transform (CST)

## Definition
An OFX node performing the same log→display color-space conversion as a technical [[LUT]], but genuinely non-destructive — it doesn't break [[32-bit Float]] grading the way a LUT does. Node-based color management, specifying a source color space/gamma (e.g. ARRI Wide Gamut 3 / LogC3) and a target (e.g. Rec. 709 Gamma 2.4).

## In Practice
Applied at the clip or (more commonly, for consistency) timeline level. Preferred over a raw technical LUT for this reason throughout the course. The ACES-flavored equivalent is an ACES Transform node — functionally similar, converting to/from ACEScct instead of a generic target space. Also used in VFX handoff to convert mismatched camera sources to a common space (e.g. RED graded to match ARRI shot the same day).

## Teaching Analogies & Examples
- **A manual currency converter, used when there's no automatic exchange booth**: a CST node explicitly converts an image from one named color space to another, right there in the node tree — useful specifically in workflows where you're *not* relying on an automatic color-managed pipeline to handle those conversions for you behind the scenes.
## Related Terms
[[LUT]], [[32-bit Float]], [[ACES]], [[IDT (Input Device Transform)]], [[ODT (Output Device Transform)]]

## Further Resources
