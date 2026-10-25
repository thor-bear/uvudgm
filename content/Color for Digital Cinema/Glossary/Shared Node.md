---
aliases:
tags:
  - glossary/davinci-resolve
---
# Shared Node

## Definition
A node whose adjustments propagate to every other instance of that same shared node throughout the project — useful for a look meant to apply consistently across many scenes/shots. Locked by default after creation; must be explicitly unlocked to edit. Distinct from copy-pasting a node, which does *not* stay linked.

## In Practice
Revisited later in the course as a group-grading alternative used less often than actual [[Group Grading (Groups)]] — the two are conceptually similar (adjustments propagating to multiple clips) but operate at different levels: shared nodes at the individual-node level, groups at the whole-clip level. Also used practically for building a single shared "IDT-equivalent" input node across all clips from one camera source (e.g. all DJI-sourced footage inheriting the same DCTL-based handling automatically).

## Teaching Analogies & Examples
- **One master light switch controlling several rooms at once**: a Shared Node's adjustment applies simultaneously across every clip it's shared to — change it once on any of them, and every linked clip updates together, instead of duplicating and manually keeping several separate adjustments in sync.
## Related Terms
[[Group Grading (Groups)]], [[Compound Node]], [[DCTL (DaVinci Color Transform Language)]]

## Further Resources

#glossary/davinci-resolve
