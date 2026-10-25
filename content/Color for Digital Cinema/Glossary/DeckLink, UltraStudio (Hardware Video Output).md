---
aliases:
  - DeckLink
  - UltraStudio
tags:
  - glossary/davinci-resolve
---
# DeckLink, UltraStudio (Hardware Video Output)

## Definition
Dedicated hardware output devices that bypass the operating system's own color-management/rendering bias, sending an unmodified signal straight from Resolve to a reference display. **DeckLink** is a PCIe card (desktop towers); **UltraStudio** is the Thunderbolt 3 external-box equivalent for laptops without a PCIe slot.

## In Practice
Entry-level recommendation in this course: DeckLink Mini Monitor 4K (~$200) for real 4K, or a 2K-only Mini Monitor (~$150) if 4K isn't needed. This hardware doesn't bypass the graphics card's rendering workload — Resolve's processing still happens there — it specifically intercepts the *output signal* before it would route through the OS's display-color-management layer. Required for accurate HDR grading in this course's HDR lesson, alongside a proper [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Reference Display (Calibrated Monitor)]] and the paid Resolve Studio tier.

## Teaching Analogies & Examples
- **Skipping the switchboard operator**: routing a call through an operator who might paraphrase your message before passing it on risks the message changing along the way. Sending video through the OS's normal display pipeline works the same way — the OS has its own color-management opinions it can quietly apply. A DeckLink or UltraStudio is a direct line straight from Resolve to the display, no operator in between.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Reference Display (Calibrated Monitor)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Hardware Scopes]]

## Further Resources


## Appears In


[[Lesson 26 - HDR and Miscellaneous]]
