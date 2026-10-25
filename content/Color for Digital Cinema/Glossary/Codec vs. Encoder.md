---
aliases:
  - Encoder
  - x264
tags:
  - glossary/davinci-resolve
---
# Codec vs. Encoder

## Definition
A codec (e.g. H.264) is a *format*; an encoder is the *software* that converts to that format. Genuinely different encoders produce different quality results even at the same codec and bitrate.

## In Practice
Premiere uses MainConcept (competent, not top-tier). **x264** is widely regarded as the best H.264 encoder, used by major studios for retail Blu-ray releases, but isn't natively available inside Premiere or Resolve — accessed via FFmpeg (command-line or GUI wrappers like Hybrid) or HandBrake. A genuinely useful practical implication: re-exporting at the same bitrate a source file was originally encoded at doesn't guarantee matching quality, since the source may have used a stronger encoder — padding the bitrate somewhat compensates for a weaker one.

## Teaching Analogies & Examples
- **A recipe vs. the chef who cooks it**: a Codec is the specification — the rules for how video gets compressed and decompressed (H.264, ProRes). An Encoder is the specific piece of software or hardware actually doing that compression according to those rules — two different H.264 encoders can follow the same recipe (spec) but produce slightly different results depending on how well each one cooks.
## Related Terms
[[Codec]], [[Container (Wrapper)]], [[High Compression (Deliverable) Codecs]]

## Further Resources
