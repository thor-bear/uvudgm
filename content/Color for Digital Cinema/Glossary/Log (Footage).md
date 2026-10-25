---
aliases:
tags:
  - glossary/davinci-resolve
---
# Log (Footage)

## Definition
A specific flat, low-contrast gamma curve baked into the recorded image at capture, designed to preserve dynamic range/highlight-shadow detail without raw's storage/processing cost. Once baked in, camera metadata like white balance/ISO is no longer adjustable — that flexibility is the tradeoff for the storage savings.

## In Practice
Both raw and log preserve real detail for grading; a directly display-baked (Rec. 709-style) export does not, and that lost detail can't be recovered. Log footage looking intentionally "flat" and unappealing before grading is expected — it's viewing the image within a wide working space directly, the same underlying reason a genuinely log-recorded shot looks the way it does before any correction. See [[Camera RAW Decode Settings (IPP2, RED Wide Gamut RGB, Log3G10)]] for how a specific log curve (Log3G10) gets applied to RED footage.

## Teaching Analogies & Examples
- **Packing a suitcase efficiently instead of throwing everything in loosely**: Log footage compresses a huge dynamic range into a normal-looking file size by redistributing where the data gets spent — more room for shadow/highlight detail, less for the midrange, versus a standard image that spends its data more evenly but has less room at the extremes. That's why flat, washed-out-looking log footage actually contains *more* recoverable detail than it appears to on first glance, not less.
- The "why does it look so flat and gray" question is worth pre-empting directly: log footage is deliberately not meant to be watched as-is — it's raw material waiting for a LUT or a manual grade to unpack it into something that looks normal.
## Related Terms
[[Raw (Footage)]], [[Gamma]], [[Dynamic Range]], [[Latitude]], [[Color Space Referents (Display-, Camera-, Scene-Referred)]]

## Further Resources
