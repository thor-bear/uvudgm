---
aliases:
  - Keyframes
  - Corrector
tags:
  - glossary/davinci-resolve
---
# Keyframing (Power Window Keyframes)

## Definition
Manually animating a power window's shape or a node's settings over time — the fallback for whatever [[Motion Tracking]] can't handle on its own (fast/blurry subjects, insufficient contrast for a tracker to lock onto). Enabled in the Keyframes panel (bottom-right, three-diamond icon).

## In Practice
Several order-of-operations rules treated as close to non-negotiable in this course:
1. **Set feather before enabling keyframes** — feather itself gets keyframed once keyframing is on, so changing it afterward requires manually re-matching that value across every existing keyframe.
2. **Don't add new points to a power curve after keyframing is enabled** — unlike After Effects, Resolve doesn't retroactively apply a new point to previous keyframes, breaking interpolation. Estimate how many points you'll need before starting.
3. **Prefer the general Softness slider over Inside/Outside softness** for simple windows — Inside/Outside adds real keyframe-management complexity.
4. **Use the Power Curve (pen tool) rather than many individual points** — fewer points, less to manage across keyframes.

A frequently-confusing quirk: every node's *default* power window slot has no visible number (effectively "0"); only power windows added manually beyond that default get numbered, so "Power Curve 2" is actually the *third* window on that node. In the Keyframes panel, nodes are referred to as "Correctors" (Corrector 3 = Node 3). Static keyframes are described in this course as unpredictable; the recommended way to get a hard, non-interpolated jump is an anchor keyframe on the last frame before the change, then a new position on the very next frame. See [[Key Output Gain (Node Opacity)]] for keyframing a node's overall strength rather than its shape — used for smoothing exposure drift or simulating a hard cut like a light switching off.

## Teaching Analogies & Examples
- **Setting checkpoints and letting the software fill in the route**: place a window in the right spot on frame 1 and again on frame 100, and the software calculates the smooth path between those two checkpoints automatically — the same idea as automatic Motion Tracking, but done by hand for shots where tracking a moving surface doesn't work cleanly (a sudden cut, an object that briefly leaves frame, erratic motion).
## Related Terms
[[Motion Tracking]], [[Power Windows]], [[Key Output Gain (Node Opacity)]], [[Hero Frame]]

## Further Resources
