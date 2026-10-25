---
aliases:
tags:
  - glossary/davinci-resolve
---
# Append Node Graph

## Definition
A right-click function that appends a copied node chain (typically a "look") after whatever already exists on a target clip's node tree — distinct from middle-click applying a PowerGrade, which *replaces* everything on the target clip, including its own primaries.

## In Practice
The core mechanism for transferring a finished [[Look (Color Grade)]] across shots without disturbing each shot's own primaries: build the look on one shot, temporarily delete that shot's primaries, grab a still of the now-primaries-stripped look-only chain, immediately undo to restore primaries, then use Append Node Graph (not middle-click) on other shots. Expect to tweak after appending, not just apply and walk away — qualifier selections and intensity often need per-shot adjustment even with well-matched primaries.

## Teaching Analogies & Examples
- **Adding a new verse onto an existing song instead of rewriting the whole thing**: Append Node Graph adds a saved node structure (like a PowerGrade) onto the *end* of the clip's existing node tree, preserving whatever's already there — as opposed to a plain middle-click apply, which can replace the whole tree outright. Worth demonstrating the difference live, since choosing the wrong one can either wipe out work or stack unwanted duplicate nodes.
## Related Terms
[[Look (Color Grade)]], [[PowerGrade]], [[Still (Gallery)]]

## Further Resources
