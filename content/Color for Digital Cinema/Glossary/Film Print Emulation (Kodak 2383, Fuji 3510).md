---
aliases:
  - Kodak 2383
  - Fuji 3510
tags:
  - glossary/davinci-resolve
---
# Film Print Emulation (Kodak 2383, Fuji 3510)

## Definition
Free, built-in Resolve LUTs (right-click node → LUT → Film Looks) emulating specific real film print stocks. Kodak 2383 is the stock behind most modern Christopher Nolan theatrical prints; Fuji 3510 is a comparable alternative. Both offer variants differing only in white point (D55 warmest through D65 coolest, D60 a common middle choice — avoid the DCI-P3 variants unless actually grading for P3 delivery).

## In Practice
**These LUTs expect Cineon-gamma input, not Rec. 709** — applying one directly to already-709 footage looks badly wrong. Fix: a [[Color Space Transform (CST)]] node before the LUT, converting to [[Cineon (Film Log)]] first, or an ACES Transform converting to ADX10 as the ACES-native alternative. This course also provides ready-made PowerGrades (at 40%/60%/100% opacity) replicating the same look non-destructively, avoiding the LUT's inherent destructiveness. Inside a color-managed pipeline (ACES/DWG), the traditional LUT approach breaks the grade entirely — the correct tool there is an [[LMT (Look Modification Transform)]] instead. A passive principle worth remembering when emulating this look: genuine film stock rarely clips highlights hard, so avoid letting your own highlights hit pure clipped white even in an aggressive grade.

## Teaching Analogies & Examples
- **A digital filter that mimics a specific brand of photo paper**: these LUTs recreate the specific color/contrast signature of shooting through actual physical film print stocks (Kodak 2383, Fuji 3510) that theatrical prints were traditionally made on — even in an all-digital pipeline, applying one imparts the subtle characteristic "look" of that particular chemistry and paper combination.
## Related Terms
[[Cineon (Film Log)]], [[LMT (Look Modification Transform)]], [[LUT]], [[Key Output Gain (Node Opacity)]]

## Further Resources
