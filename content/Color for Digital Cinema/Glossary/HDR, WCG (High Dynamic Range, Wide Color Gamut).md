---
aliases:
  - HDR / WCG (High Dynamic Range, Wide Color Gamut)
  - HDR
  - WCG
tags:
  - glossary/davinci-resolve
---
# HDR / WCG (High Dynamic Range, Wide Color Gamut)

## Definition
Shorthand for High Dynamic Range / Wide Color Gamut — brighter highlights, darker shadows, and a wider color range than a traditional gamma workflow allows. Core definition stressed in this course: the ability to have your darkest possible black and your brightest possible highlight represented within the *same frame*, closely matching how the human eye perceives real-world dynamic range.

## In Practice
**Important correction of a common misconception**: HDR is not a creative "look." That confusion stems from unrelated HDR *photography* (merging bracketed exposures into one stylized SDR image). Video HDR is just a larger working space that can still be graded dim, muted, or restrained — it doesn't force a particular aesthetic. Since color = hue + luminance, expanding the available luminance range multiplies the number of representable colors even before accounting for a wider gamut. Grading HDR in Resolve requires the paid Studio version, plus a proper reference display and DeckLink/UltraStudio hardware output — see [[Reference Display (Calibrated Monitor)]]. The two transfer functions used for HDR are covered separately — see [[PQ vs. HLG (HDR Transfer Functions)]].

## Teaching Analogies & Examples
- **Two separate upgrades that often ship together, but aren't the same thing**: HDR is about the range from darkest to brightest a display can show (a taller ladder). WCG is about how many distinct colors it can show (a bigger box of crayons). A display can technically have one without the other, but modern HDR formats are usually paired with wide gamut, which is why the two terms travel together so often in practice.
## Related Terms
[[PQ vs. HLG (HDR Transfer Functions)]], [[HDR Delivery Formats (Dolby Vision, HDR10, HDR10+)]], [[Rec. 2020]], [[Reference Display (Calibrated Monitor)]]

## Further Resources
