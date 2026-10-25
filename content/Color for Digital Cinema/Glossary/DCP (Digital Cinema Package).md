---
aliases:
  - Digital Cinema Package
  - Interop
  - SMPTE DCP
tags:
  - glossary/davinci-resolve
---
# DCP (Digital Cinema Package)

## Definition
Not a single video file — a folder containing a JPEG2000 image sequence wrapped in an MXF container, plus accompanying XML metadata. Must conform to one of the two standard cinema resolutions — see [[Aspect Ratio (Cinema, Delivery Standards)]].

## In Practice
**Frame rate**: DCPs must be true 24fps, not 23.976 — Resolve auto-converts via an imperceptible micro time-remap when fed 23.976 source. **Delivery medium**: physically delivered on a Linux ext2/ext3-formatted drive, since DCP servers typically run Linux — Paragon extFS (~$40) lets non-Linux users format/read/write such drives. **Standard choice**: Use Interop Packaging — the older but far more broadly compatible standard, versus the newer SMPTE standard, which has better modern feature support but meaningfully worse cross-theater compatibility. **Composition naming** requires a compliant title string built through Resolve's Composition Settings (content kind, film name in caps, frame rate, audio language/type, resolution, package type OV/VF, etc.). DCP creation is a paid-tier Resolve feature — bundled into DaVinci Resolve Studio, a one-time license currently priced at $295 (verified current as of mid-2026; check Blackmagic's site for the latest figure, since this has shifted before). Colors preview visually "wrong" during export — this is correct and expected, since the P3 conversion is actively happening; it plays back correctly once finished. **Encrypted vs. unencrypted**: an unencrypted DCP (used throughout this course) needs no special licensing; theater-side access-code encryption requires a separately-licensed Kakadu MXF encoder key.

## Teaching Analogies & Examples
- **The specific, sealed package a movie theater's projector expects**: a DCP isn't just "a video file" — it's a structured, encrypted, JPEG2000-based package built to a strict cinema-industry spec, the format a real theater's digital projection system is actually built to read, the same way a shipping company only accepts packages in specific approved box sizes.
## Related Terms
[[Aspect Ratio (Cinema, Delivery Standards)]], [[P3-DCI]], [[IMF (Interoperable Master Format)]]

## Further Resources
