---
aliases:
  - Tracking
  - 3D Tracker
  - Legacy Tracker
tags:
  - glossary/davinci-resolve
---
# Motion Tracking

## Definition
The crosshair icon tracks a [[Power Windows|power window]]'s selection across frames — forward, reverse, or both directions — following the underlying pixels (e.g. tracking a shape to a person's shoulder as they move). Two algorithms: **3D (Perspective 3D)**, the modern default, estimates the tracked object's behavior within pseudo-3D space from 2D footage; **Legacy** (Perspective 3D toggled off) is the older, simpler algorithm, worth trying when 3D's estimate is visibly wrong for a shot.

## In Practice
Each of Pan/Tilt/Zoom/Rotation can be independently excluded from a track's analysis — e.g. disabling Zoom for a genuinely locked-off shot where zoom shouldn't factor in, or isolating just Rotation when tracking a spinning object (a car tire) where Pan/Tilt/Zoom might latch onto the wrong motion. Trackers need real contrast/detail to latch onto — flat regions (a clear sky) give a tracker nothing to hold, and a loosely-drawn window risks the tracker grabbing background detail instead of the intended subject; a tighter, custom-fitted shape (even heavily feathered) fixes this. Realistic benchmark stated directly in this course: tracking alone typically gets you 85–90% of the way there — [[Keyframing (Power Window Keyframes)]] exists specifically to patch the remaining gaps a tracker can't handle on its own.

## Teaching Analogies & Examples
- **A spotlight operator following a moving performer** (same core image as Editing 1's version of this analogy, since it's the same underlying idea): the window doesn't stay glued to one spot on screen — it follows the actual pixels of whatever it was drawn on, frame by frame, the way a spotlight follows a performer walking across a stage.
- The LOTR "tracked spotlight" example already referenced in Lesson 6 is worth keeping as the go-to reference — it's a vivid, real, narratively-motivated use case rather than an abstract technical demo.
## Related Terms
[[Power Windows]], [[Keyframing (Power Window Keyframes)]], [[Hero Frame]], [[Match Move (Planar Tracking)]]

## Further Resources
