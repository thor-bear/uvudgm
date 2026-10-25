---
aliases:
  - Broadcast Safe
tags:
  - glossary/davinci-resolve
---
# Broadcast Legalization (Broadcast Safe)

## Definition
Ensuring footage stays within the technical limits broadcast TV requires: shadows not below 0 on the [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Parade (Scope)]], highlights not above 1023, and saturation not crossing the target boxes on the [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Vectorscope]] (including colors *between* primaries, like orange between red and yellow).

## In Practice
**Saturation fixes**: key the most saturated areas and desaturate (watch for a perceptual side effect — desaturating a very saturated color can read as *darker* even without a real luminance change, sometimes needing a small brightness compensation), or pull a Sat-vs-Sat curve down on the offending range directly. **Highlight/shadow fixes**: on timeline-level custom curves, use the **hard clip** Low/High sliders (set the High slider just below 1023 and Low just above 0) rather than the **soft clip** L.S./H.S. taper — for broadcast-safe work, hard clip is usually preferable since the goal is invisible compliance, not a visible grade change. **Finding out-of-spec areas**: View → Display Broadcast Safe Exceptions highlights violations directly on the image; Project Settings → Color Management → Broadcast Safe has several auto-correction modes, though these aren't always a complete fix on their own (still worth reading the Vectorscope directly). Chromatic aberration can quietly push a shot out of spec even when nothing looks obviously oversaturated.

## Teaching Analogies & Examples
- **A safety inspection before a building opens to the public**: broadcast standards set hard limits on how bright and how saturated a signal is allowed to get, because pushing past them can cause real technical problems on broadcast equipment — Broadcast Legalization is the pass that clamps any illegal values back within the allowed range before delivery, the same way an inspector flags anything outside code before a building gets its occupancy permit.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Vectorscope]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Parade (Scope)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Curves (Custom, RGB Curves)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Saturation]]

## Further Resources


## Appears In


[[Lesson 03 - Color Terms Part 2]]
