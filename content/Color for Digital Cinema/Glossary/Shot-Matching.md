---
aliases:
tags:
  - glossary/davinci-resolve
---
# Shot-Matching

## Definition
Grading a shot to visually and scopically match another shot — either a reference within the same footage, or an externally-provided reference still with no node data attached.

## In Practice
Core technique: grab a **Still** (not PowerGrade — Stills are project-scoped references, PowerGrades persist project-wide as reusable templates) of a shot you're happy with via right-click → Grab Still, apply the same node template to the next shot, then toggle the reference still on/off as a live overlay with **Cmd+W** while adjusting Luma/Chroma/Curves until both the visual look and the [[Parade (Scope)]]/[[Vectorscope]] alignment converge. Explicitly preferred over a side-by-side split view, which makes the working image uncomfortably small. Matching to a **provided reference still with no node data** (a client screenshot scenario) is treated as the more transferable real-world skill than matching within your own graded footage, since there's no shortcut to lean on — only visual/scope judgment.

## Teaching Analogies & Examples
- **Matching paint chips at the hardware store**: you hold the sample next to the wall and flip your eyes back and forth until they read as the same color — shot-matching with a Still is exactly that, toggling between "my shot" and "the reference" until they converge, rather than trying to remember what the reference looked like from memory.
- The scene-should-look-like-"the same 30 seconds" framing from this course is worth repeating directly: cuts within one scene need to read as continuous even when production reality was scattered across days of different light.
## Related Terms
[[Parade (Scope)]], [[Vectorscope]], [[PowerGrade]], [[Primary Corrections]], [[Color Bible]]

## Further Resources
