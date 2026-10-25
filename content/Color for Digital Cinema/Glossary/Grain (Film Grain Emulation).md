---
aliases:
tags:
  - glossary/davinci-resolve
---
# Grain (Film Grain Emulation)

## Definition
Adding simulated film-grain texture to a shot — two methods covered in this course. **Grain OFX plugin** (paid): stock presets (16mm/35mm/70mm), adjustable strength, softness, saturation, and grain size. **Real scanned film grain overlay** (works in the free version, and the method this course actually recommends): import a real grain texture as a Matte, apply it on a [[Layer Mixer]] node as a Timeline Matte, set Composite Mode to Overlay, and control intensity via [[Key Output Gain (Node Opacity)]].

## In Practice
This course's personal-practice recommendation: keep grain as one of the very last nodes in a chain (right before any final print-emulation LUT), since grain applied earlier (e.g. via Resolve's Fusion page, which sits before the node graph entirely) can interfere with later qualifier/HSL selections trying to key clean color in a now-noisy image.

## Teaching Analogies & Examples
- **The texture of paper vs. a perfectly smooth screen**: digital images can look almost unnaturally clean and flat compared to the organic, textured randomness of actual film grain — adding emulated grain back in is like choosing textured cardstock over glossy printer paper, a deliberate tactile quality some looks specifically want rather than a flaw to eliminate.
## Related Terms
[[Layer Mixer]], [[Key Output Gain (Node Opacity)]], [[Film Print Emulation (Kodak 2383, Fuji 3510)]], [[OFX Plugin Tour (Misc Effects Survey)]]

## Further Resources
