---
aliases:
  - Cineon Film Log
tags:
  - glossary/davinci-resolve
---
# Cineon (Film Log)

## Definition
A film-log gamma standard — the gamma that scanned film comes in as. Free film-print-emulation LUTs (Kodak 2383, Fuji 3510) expect Cineon-gamma input, not Rec. 709; feeding them already-709 footage looks badly wrong.

## In Practice
The fix, in an unmanaged (non-color-managed) project: place a Color Space Transform node before the print-emulation LUT, converting from the current working gamma (e.g. Rec. 709 Gamma 2.4) to Cineon Film Log. An alternative inside ACES: an ACES Transform node converting Rec. 709 → ADX10 (the Academy's own averaged film-gamut standard), producing slightly different but equally valid results — a matter of preference, not one being objectively more correct.

## Teaching Analogies & Examples
- **The original ancestor of every log curve used today**: Cineon was built specifically to store scanned film's dynamic range digitally, back before digital cameras had their own native log formats — think of it as the "great-grandparent" curve that modern camera-specific log formats (S-Log, Log3G10, etc.) are conceptually descended from.
## Related Terms
[[Film Print Emulation (Kodak 2383, Fuji 3510)]], [[Color Space Transform (CST)]], [[LUT]], [[ACES]]

## Further Resources
