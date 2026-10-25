---
aliases:
tags:
  - glossary/davinci-resolve
---
# Luminance

## Definition
The light/brightness information in an image, with no color attached. Luminance alone equals a grayscale image. One of the two components color is treated as being made of in this course (the other is chrominance) — a useful working model, if a slight oversimplification.

## In Practice
Human vision is far more sensitive to luminance detail than to color detail — this is the whole reason [[Chroma Subsampling]] works as a compression technique (chroma can be compressed hard with much less perceptible quality loss than luminance can). Diagnostically useful too: if an image problem (noise, etc.) is isolated to one component, you can address that component specifically. See also [[Waveform (Scope)]], which reads luminance top-to-bottom.

## Teaching Analogies & Examples
- **The black-and-white photo underneath the color**: Luminance is exactly what's left if you strip all the color out of an image and keep only brightness — squint at a colorful sunset and you can still make out its luminance structure (bright sky, dark silhouette) even with your color vision effectively "turned down." That's the same information a Waveform scope is reading.
## Related Terms
[[Chrominance]], [[Chroma Subsampling]], [[Waveform (Scope)]], [[Contrast]]

## Further Resources
