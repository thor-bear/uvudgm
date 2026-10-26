---
tags:
  - glossary/editing-1
  - glossary/avid
---
# Use Only Active Tracks

## Definition
An Export to File setting that renders only the tracks currently selected in the timeline's track selectors — any track that's deselected at export time is silently excluded from the output file, even if it's fully populated in the sequence.

## In Practice
Flagged in Lesson 7 as a specific, easy-to-miss failure mode: the most common way students accidentally export a video with no sound is having this setting active while their music track happens to be deselected in the [[Track Selectors, Patching Tools]]. Worth calling out explicitly right before export rather than after — catching it as a bug report later is a much worse experience than a thirty-second warning beforehand.

## Teaching Analogies & Examples
- **Only inviting the guests you've checked off the list**: if a track's checkbox isn't lit up in the track selectors when you export, it simply doesn't get invited to the final file — silently, with no warning dialog.
- Make this a standing pre-export habit to say out loud every time: "before you hit export, look at your track selectors — is everything actually lit up?"
## Related Terms
[[Export to File]], [[Track Selectors, Patching Tools]]

## Further Resources

#glossary/editing-1
