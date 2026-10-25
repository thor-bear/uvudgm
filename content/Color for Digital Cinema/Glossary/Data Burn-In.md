---
aliases:
tags:
  - glossary/davinci-resolve
---
# Data Burn-In

## Definition
On-screen metadata (scene, take, timecode, etc.) overlaid on dailies footage — set up via Color page → Workspace → Data Burn-In.

## In Practice
Enable Source Clip Name (not Source File Name, which includes the full path — overkill), Source Timecode (not Record — see [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Source Timecode vs. Record Timecode]]), Scene, and optionally Day/Date via Custom Text fields, which support `%` variable substitution to combine multiple metadata values into one string. **Font**: use Courier or any fixed-width font specifically so the timecode readout doesn't visually jitter frame to frame. **Alignment quirk**: Resolve applies one global alignment setting across all burn-in fields — the workaround is setting everything to left-align, then positioning fixed-width fields (timecode, date) toward the right (safe, since their width never changes) and variable-width fields (clip name) toward the left with room to grow. Recommended styling to stay unobtrusive: background opacity ~0.25–0.35, text opacity ~0.5–0.6.

## Teaching Analogies & Examples
- **A visible timestamp watermark on a security camera feed**: Data Burn-In overlays metadata (timecode, reel name, scene/take) directly and permanently into the visible image — useful for reference/review copies where anyone watching needs that info at a glance, but never applied to a final deliverable, the same way you'd never want a security camera's timestamp burned into the master footage sold to a client.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Source Timecode vs. Record Timecode]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Roll Numbers (A-B-C-Cam)]]

## Further Resources


## Appears In


[[Lesson 07 - Pre-Production and DIT Workflow]]
