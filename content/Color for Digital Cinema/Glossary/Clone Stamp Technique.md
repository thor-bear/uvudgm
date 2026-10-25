---
aliases:
tags:
  - glossary/davinci-resolve
---
# Clone Stamp Technique

## Definition
Resolve's answer to Photoshop's clone stamp — Resolve has no literal stamp/brush tool, so the equivalent is a power window repositioned via [[Node Sizing vs. Input Sizing|Node Sizing]] rather than the default Input Sizing, used to "paint" a clean patch of pixels over an unwanted object.

## In Practice
Core sequence: draw a shape over a *source* region that visually matches the destination area's background/lighting, then switch the Sizing panel from Input Sizing to Node Sizing and adjust Pan/Tilt to relocate the sampled content over the object being removed. When the patch overshoots and covers something that should stay visible (an actor, a chair), a [[Layer Mixer]] with its own protective shape restores that content in front of the patch. On a moving shot, the order flips: draw the window over the area *to be removed* first, track it, then apply Node Sizing to pull from a clean source afterward — the offset is preserved relative to the tracked motion. A rougher, faster cousin exists as the OFX Patch Repair effect, part of the [[OFX Plugin Tour (Misc Effects Survey)]].

## Teaching Analogies & Examples
- **Photoshop's clone stamp tool, moving through time instead of just across a photo**: copy pixels from one part of the frame (or a nearby, cleaner frame) and paint them over an unwanted element — the same fundamental idea as retouching a photo, just extended to work across a moving sequence of frames rather than one still image.
## Related Terms
[[Node Sizing vs. Input Sizing]], [[Layer Mixer]], [[Motion Tracking]]

## Further Resources
- [Object Removal/Clone Stamping — Fusion Fundamentals (YouTube)](https://www.youtube.com/watch?v=bWK08P_B9so) — walks through the source-shape-then-Node-Sizing sequence in motion, which is easier to follow watched than described in prose.
