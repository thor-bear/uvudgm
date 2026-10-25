---
aliases:
  - Deliverable Codecs
  - H.264
  - H.265
  - HEVC
tags:
  - glossary/davinci-resolve
---
# High Compression (Deliverable) Codecs

## Definition
The third codec category covered in this course: H.264/AVC, H.265/HEVC, MPEG-2, MPEG-4, DV. Consumer delivery only (YouTube, iTunes, DVD/Blu-ray) — explicitly never for post-production work.

## In Practice
Rationale stated repeatedly across this course: compression artifacts compound at every pass — sending compressed footage to VFX, then coloring the returned (now-recompressed) result, degrades quality cumulatively. Even when a modern camera records natively in high-bitrate HEVC, intermediate work should still happen in [[ProRes (Codec Family)]] rather than staying in the delivery codec throughout the pipeline. Two genuinely different implementations of the same codec can look meaningfully different — see [[Codec vs. Encoder]].

## Teaching Analogies & Examples
- **A finished, sealed jar vs. the ingredients in the kitchen**: EXR/ProRes-level formats are the working ingredients — flexible, high-quality, still meant to be worked with. High-compression deliverable codecs (H.264, H.265) are the sealed jar you hand to the customer — small, convenient, and playable everywhere, but not meant to be reopened and re-edited.
## Related Terms
[[Codec]], [[Codec vs. Encoder]], [[Visually Lossless (Intermediate Codec)]], [[ProRes (Codec Family)]]

## Further Resources
