---
aliases:
tags:
  - glossary/davinci-resolve
---
# Use Unique Filenames

## Definition
A Deliver-page export setting (File tab) that prefixes each rendered clip's filename with track number + clip position, while the base filename still matches the original source clip name.

## In Practice
**Must be checked** for a general export where the same source clip might appear multiple times in a timeline (e.g. a shot/reverse-shot cut) — without it, each export instance would silently overwrite the previous one under the same filename. **Deliberate exception**: for genuine dailies work rather than a full deliverable, this course actually recommends *unchecking* it, so a derivative clip's name correlates 1:1 with its original for easier relinking — worth knowing the reasoning isn't purely mechanical, it depends on the handoff's purpose.

## Teaching Analogies & Examples
- **Never having two students turn in a file literally named "Untitled.mov"**: cameras frequently reset their own file-numbering per card, meaning "A001.mov" from card 1 and "A001.mov" from card 3 can silently collide once both land in the same project — a discipline of renaming or prefixing files to guarantee uniqueness is what prevents one from quietly overwriting or shadowing the other.
## Related Terms
[[Proxy (Editing Proxies)]], [[Roundtripping]]

## Further Resources
