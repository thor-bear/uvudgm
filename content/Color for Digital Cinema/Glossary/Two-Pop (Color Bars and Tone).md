---
aliases:
  - Color Bars and Tone
tags:
  - glossary/davinci-resolve
---
# Two-Pop (Color Bars and Tone)

## Definition
A one-frame graphic placed at 00:59:58:00, two seconds before content starts — represents where audio typically syncs to in professional delivery, standing in for what would normally already exist in a full audio mix.

## In Practice
**Two-pop audio must be duplicated across all channels** (Option-drag to copy) — leaving it only on the front L/R won't function as a true sync reference across a full 5.1+stereo channel layout. A critical export gotcha specific to ProRes 4444: any gap in the timeline (like the black between the two-pop and content start) renders as *transparent*, not black, because 4444 carries an alpha channel — fill intentional black sections with actual Black Video clips rather than leaving them empty.

## Teaching Analogies & Examples
- **A single tuning-fork beep before a performance starts**: a Two-Pop is one audio/video sync beep placed exactly 2 seconds before picture starts, letting a broadcast engineer instantly confirm audio and video are still aligned — the same idea as a conductor giving one clear beat before a symphony begins, a single unambiguous reference point everyone can check against.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Slate (Delivery)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/5.1 Surround (Channel Order, Panning)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/ProRes (Codec Family)]]

## Further Resources
See [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Slate (Delivery)]] for a diagram of the full Slate → Two-Pop → Content sequence.


## Appears In


[[Lesson 24 - Onlining Part 2 and Mastering]]
