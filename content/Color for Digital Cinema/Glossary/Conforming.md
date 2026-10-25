---
aliases:
tags:
  - glossary/davinci-resolve
---
# Conforming

## Definition
Translating a timeline from one piece of software to another — recreating the picture-locked edit so it matches exactly, including handling anything that doesn't translate automatically (scaling issues, time remap quirks, etc.).

## In Practice
Two methods covered in this course. **Automatic**: export the timeline as XML/FCPXML/EDL/AAF from the NLE and import into Resolve — preferred, less work, if the timeline was prepared properly (flattened to one track, unused/disabled content deleted, effects disabled, especially time remapping). **Manual**: finding every clip by hand, matching in/out points via timecode, rebuilding the timeline to match the locked cut exactly — painful but a needed skill, since even a mostly-successful automatic conform often has a handful of clips come in wrong (usually because proxy footage didn't retain timecode metadata). **Never color proxy footage** — always grade from the highest-quality source available, which is the whole point of conforming a proxy-cut timeline back to camera originals.

## Teaching Analogies & Examples
- **Rebuilding a Lego set from the instruction booklet, using the good bricks instead of the loose prototype pieces**: an editor's offline cut used lower-quality proxy media to work fast; Conforming takes that edit's instructions (the AAF/XML/EDL) and rebuilds the exact same sequence, shot for shot, but swapping in the original full-quality camera files — same structure, better materials.
## Related Terms
[[Roundtripping]], [[Locked Cut (Picture Lock)]], [[Proxy (Editing Proxies)]], [[XML (Editing Interchange)]], [[AAF (Advanced Authoring Format)]]

## Further Resources
