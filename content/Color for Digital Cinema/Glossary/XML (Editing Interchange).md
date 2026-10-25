---
aliases:
  - FCPXML
  - Final Cut Pro XML
tags:
  - glossary/davinci-resolve
---
# XML (Editing Interchange)

## Definition
The universal editorial interchange format Resolve reads. Premiere's export option is still labeled "Final Cut Pro XML" — a historical artifact from FCP7, not an actual dependency on Final Cut existing or being installed.

## In Practice
When importing into Resolve, use **Edit page → File → Import → Timeline**, not "Media from XML" — a similarly-named, incorrect option right next to it, an easy misclick. **Uncheck "Automatically import source clips"** before confirming, so Resolve matches the XML's timecodes against footage already imported rather than pulling in proxy media again — the single most important step in this course's conform workflow. A known quirk: the imported timeline can retain the *original* edit's sequence resolution rather than the intended delivery resolution — always check and correct.

## Teaching Analogies & Examples
- **A richer, more modern version of the same moving-truck inventory idea as AAF**: XML describes an edit's structure in a widely-readable text format, and generally carries more detail (effects, richer metadata) than the older EDL — think of AAF and XML as two different but comparably capable inventory formats, both meaningfully more detailed than EDL's bare-bones list.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Conforming]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/AAF (Advanced Authoring Format)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/EDL (Edit Decision List)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Locked Cut (Picture Lock)]]

## Further Resources


## Appears In


[[Lesson 07 - Pre-Production and DIT Workflow]], [[Lesson 08 - Conforming and Roundtripping]], [[Lesson 23 - Roundtripping Part 2, Hardware, and Workflow Tips]], [[Lesson 24 - Onlining Part 2 and Mastering]]
