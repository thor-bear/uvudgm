---
aliases:
tags:
  - glossary/davinci-resolve
---
# Audio Sync (Auto Sync via Timecode)

## Definition
Highlighting all clips (video + audio) for a given day and right-click → Auto Sync Audio Based on Timecode — Resolve's automatic timecode-based sync.

## In Practice
No confirmation dialog appears when sync succeeds — a useful sanity check is watching the audio channel count on the video clips jump from 0 to however many channels the audio file has, a visible confirmation the sync actually attached. **Always manually verify** every clip after auto-sync, even though timecode sync is generally reliable — drift or device resets can cause a silent out-of-sync clip. Manual fallback (also the method for footage with no timecode at all): switch the audio panel to Waveform view, click the unlink (chain) icon to detach audio from video, navigate to the frame showing the slate clap's transient peak, and re-click the chain icon to re-lock at the corrected offset.

## Teaching Analogies & Examples
- **Two synchronized stopwatches instead of clapping to line things up by ear**: when camera and separate sound recorder share matching embedded timecode, Resolve can automatically line up audio and video by that shared number rather than needing a human to spot and align a slate clap manually — the same underlying concept Editing 1 students learn as "jammed slate" sync, just automated here rather than done by eye.
## Related Terms
[[Source Timecode vs. Record Timecode]], [[Data Burn-In]]

## Further Resources
