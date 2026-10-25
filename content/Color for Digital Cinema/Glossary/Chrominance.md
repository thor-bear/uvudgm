---
aliases:
tags:
  - glossary/davinci-resolve
---
# Chrominance

## Definition
The color information in an image, with no brightness value attached. Chrominance alone produces no visible image — color needs light to be seen, analogous to an old overhead-projector transparency: the marker color is invisible until the projector light illuminates it. Paired conceptually with [[Luminance]] as the two components color is treated as being made of in this course.

## In Practice
Because human vision is much less sensitive to chrominance detail than luminance detail, chrominance can be compressed hard with little perceptible loss — see [[Chroma Subsampling]]. This same principle is why hybrid noise-reduction workflows push chroma noise reduction more aggressively than luma noise reduction — see [[Noise Reduction (Spatial, Temporal)]].

## Teaching Analogies & Examples
- **A black-and-white photo with a colored gel over it**: Luminance is the black-and-white photo underneath — all the brightness/shape/detail. Chrominance is the colored gel laid on top — hue and saturation with none of the shape information. Split an image into these two and the black-and-white version alone is still fully readable; the color-only version alone looks like abstract blobs.
## Related Terms
[[Luminance]], [[Chroma Subsampling]], [[Noise Reduction (Spatial, Temporal)]]

## Further Resources
