---
aliases:
  - Ripple Trim
  - Dual Roller Trim
tags:
  - glossary/editing-1
  - glossary/avid
---
# Overwrite Trim / Ripple Trim / Dual Roller Trim

## Definition
The three underlying trim types available once inside [[Trim Mode]]: **Overwrite Trim** (red) changes an edit point without moving the rest of the sequence — it trades frames between the two neighboring shots, keeping total sequence length fixed. **Ripple Trim** (yellow) changes a shot's length *and* shifts everything downstream to compensate, changing total sequence length. **Dual Roller Trim** moves both sides of an edit point together as a matched pair, adjusting where the cut falls without changing either shot's individual length.

## In Practice
Introduced together in Lesson 10 as the first real Trim Mode content, taught with the mouse and Smart Tools before moving to keyboard-driven trimming. The vault's Avid Fundamentals reference material (`Avid Manual Outlines/Lesson 05`) uses the same red = "affects only what you touch" / yellow = "ripples the neighbors" color logic that governs Segment Mode tools generally — worth reinforcing that connection, since it's one consistent mental model rather than three separate ones to memorize. Default Media Composer shortcuts per that reference: **Shift+D** for Overwrite (red) Trim, **Shift+F** for Ripple (yellow) Trim — not called out with specific shortcuts in the colleague's own lesson outline, so confirm against the actual lab machines before relying on these.

## Teaching Analogies & Examples
- **A see-saw between two neighbors (Overwrite Trim)**: lengthen one clip and the neighbor loses exactly that many frames — the total length of the sequence never changes, frames just trade hands at the boundary.
- **Squeezing a rubber hose (Ripple Trim)**: change one shot's length and everything downstream physically slides to make room or close the gap — the whole sequence's total length shifts.
- **Grabbing both ends of a piece of string at once (Dual Roller Trim)**: both sides of the cut move together as a pair, repositioning exactly where the cut falls without changing either shot's own length.
- The color coding (red = Overwrite, yellow = Ripple) is worth pointing at literally on screen every time — students retain the color association faster than the names alone.
## Related Terms
[[Trim Mode]]

## Further Resources
```mermaid
flowchart TD
    A[Trim an edit point] --> B{Which trim type?}
    B -->|Overwrite Trim - red| C[Total sequence length<br/>STAYS THE SAME<br/>neighbor loses/gains frames]
    B -->|Ripple Trim - yellow| D[Total sequence length<br/>CHANGES<br/>everything downstream shifts]
    B -->|Dual Roller Trim| E[Cut POINT moves<br/>both shots' lengths<br/>stay the same]
```

#glossary/editing-1
