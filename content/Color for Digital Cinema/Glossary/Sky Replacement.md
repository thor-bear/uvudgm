---
aliases:
tags:
  - glossary/davinci-resolve
---
# Sky Replacement

## Definition
Replacing a sky in-color rather than in VFX, via two methods covered in this course: **static replacement** (no tracking — HSL key + Alpha Output + invert, only works on a genuinely locked-off shot) and **tracked replacement** (Match Move + external matte + Layer Mixer rerouting, works with camera movement).

## In Practice
Static method: key the sky with the [[HSL Qualifier]], right-click → Add Alpha Output on that node, drag its connector into the replacement sky clip's blue input, invert, then reposition/grade the sky layer to match. Best practice: nest the finished composite into a [[Compound Clip]] once done. Tracked method: layers [[Match Move (Planar Tracking)]], an [[External Matte (Timeline Matte)]] for the sky asset, and a [[Layer Mixer]] rerouted to bypass Match Move while still pulling from graded primaries — the trickiest, most fiddly step in the whole technique. The two methods are complementary, not "old vs. new" — static replacement isn't obsolete, just narrower in applicability (locked-off shots only).

## Teaching Analogies & Examples
- **Swapping the backdrop behind a photo studio portrait**: isolate the boring/blown-out sky with a Layer Mixer mask, drop a more interesting sky behind it, and match the lighting and color so it reads as if it was always there — the technique lives or dies on that final matching step, the same way a studio backdrop swap only convinces if the lighting on the subject matches the new background.
## Related Terms
[[Match Move (Planar Tracking)]], [[External Matte (Timeline Matte)]], [[Compound Clip]], [[HSL Qualifier]], [[Layer Mixer]]

## Further Resources
- [Sky Replacements Inside DaVinci Resolve Using Match Move OFX (Mixing Light)](https://mixinglight.com/color-grading-tutorials/match-move-ofx-sky-replacement-davinci-resolve/) — walks the tracked-replacement workflow (Match Move + external matte + Layer Mixer reroute) in motion, which is genuinely the fiddliest step in this technique per the note above, and easier to follow watched than described. See also [[Match Move (Planar Tracking)]].
