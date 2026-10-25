---
aliases:
tags:
  - glossary/davinci-resolve
---
# Color-to-VFX Workflow (Pipeline Order)

## Definition
The correct order of operations for handing footage to VFX: original log/raw footage → colorist applies primaries → that primaries-graded version goes to VFX → VFX artist completes work → colorist applies the final look on top of the VFX-completed shot. Primaries always come *before* VFX, and the final look always comes *after*.

## In Practice
Nothing is worse for a VFX artist than receiving unmanaged raw footage — debayer and color-space decisions are the colorist's responsibility, not the VFX artist's. On larger productions this often happens even earlier than post, via a dailies colorist working on-set. Practical ways to flag which shots need VFX to a colorist: a separate locked XML of just those shots, all VFX shots placed on their own dedicated video track (the preferred method in this course), or a plain list of timecodes. Once flagged, the colorist debayers/converts to the proper working space, applies primaries, and exports with handles ([[Handles]]) before sending to VFX. When the ideal order wasn't followed and a colorist inherits an already-composited shot, [[External Matte (Timeline Matte)]] is the recovery tool.

## Teaching Analogies & Examples
- **Deciding whether to season the ingredients or the finished dish**: hand a VFX artist raw, unbalanced footage and they're compositing against an unpredictable target; hand them a primaried plate and they have a stable, known baseline to match their work into — pipeline order here is really a question of who needs the more finished material first, and getting it backwards creates real rework for the other department.
## Related Terms
[[External Matte (Timeline Matte)]], [[Handles]], [[Online/Offline Workflow]], [[OCIO (OpenColorIO)]]

## Further Resources
```mermaid
flowchart LR
    A[Raw / log footage] --> B[Colorist: primaries]
    B --> C[VFX artist: composite]
    C --> D[Colorist: final look]
```
Primaries always come before VFX so the artist has a stable, known baseline to composite against; the look always comes after so it doesn't have to be redone once VFX lands.
