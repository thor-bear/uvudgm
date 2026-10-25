---
aliases:
  - Editing Proxies
  - Attached Proxy
tags:
  - glossary/davinci-resolve
---
# Proxy (Editing Proxies)

## Definition
Low-resolution, disposable stand-in media used to make editing smooth on lower-powered systems or slower storage — never used for actual grading.

## In Practice
Export settings, Deliver page: **Individual Clips** (not one combined file), **ProRes Proxy** codec (H.264 is explicitly discouraged — it's a delivery codec, not editing-friendly), **1920×1080** regardless of source resolution, **audio uncompressed** (Linear PCM, matched to source bit depth), and critically **"Source Name" checked / "Use Unique Filenames" left unchecked** for proxies — proxy filenames should exactly match their corresponding raw camera files so relinking works cleanly later. This course's stated general preference: "proxy-only editing, relink at the color stage" — editing entirely on lightweight proxies, then relinking to full-resolution originals once picture is locked — over Resolve/Premiere's built-in "attached proxy" toggle feature, which swaps resolution on the fly but is described as less preferred despite being widely used.

## Teaching Analogies & Examples
- **A low-res thumbnail standing in for the full-size photo while you're browsing**: a proxy is a smaller, easier-to-play copy of the original heavy media, used for smooth editing/scrubbing on modest hardware — swap back to the original full-quality file only when it's time for final output, the same way a photo app shows you fast-loading thumbnails while browsing and only loads the full file when you actually open one.
## Related Terms
[[ProRes (Codec Family)]], [[Use Unique Filenames]], [[Conforming]]

## Further Resources
