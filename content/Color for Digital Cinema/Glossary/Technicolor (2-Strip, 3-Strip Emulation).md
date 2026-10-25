---
aliases:
  - 2-Strip Technicolor
  - 3-Strip Technicolor
tags:
  - glossary/davinci-resolve
---
# Technicolor (2-Strip, 3-Strip Emulation)

## Definition
Two historical film color processes emulated in this course. **2-strip**: only two color layers (a warm and a cool tone rather than true full color), tricking the eye into reading it as color — used deliberately by Scorsese in *The Aviator* and *Hugo* for an "old" look. **3-strip**: the classic, fuller Technicolor look — three separate film strips (cyan/magenta/yellow) physically overlaid, seen in *The Wizard of Oz*.

## In Practice
Two implementation approaches, mirroring the LUT-vs-PowerGrade tension seen elsewhere: a **LUT approach** (quick, but destructive and aggressive — see [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/LUT]]), or a **PowerGrade approach** (preferred), which builds ~6 nodes performing an actual RGB→CMY channel conversion — see [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Additive vs. Subtractive Color]]. This conversion massively oversaturates on application; always grab a reference still before applying it, then desaturate afterward to match, checking the vectorscope. Only combine techniques representing genuinely different real analog stages (a negative-emulation step + a separate print-emulation step); don't combine two mutually exclusive alternatives (2-strip and 3-strip together). This technique still works correctly inside a color-managed (ACES/DWG) pipeline, since it's a pure channel conversion, not a color-space transform — unlike a standard technical LUT.

## Teaching Analogies & Examples
- **Recreating a vintage postcard's exact printing quirks**: early Technicolor cameras/prints physically combined only 2 or 3 color-record strips (rather than a full modern color process), producing a distinctive, limited, highly saturated look — like the specific color shift you see in an old hand-tinted postcard. Digital emulation recreates that historical color-reproduction limitation on purpose, as a style choice.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Additive vs. Subtractive Color]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/LUT]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Film Print Emulation (Kodak 2383, Fuji 3510)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Compound Node]]

## Further Resources
- [Technicolor (Wikipedia)](https://en.wikipedia.org/wiki/Technicolor) — covers the actual 2-strip and 3-strip processes with period photos, useful for seeing the real physical color-reproduction limitation this technique deliberately recreates.


## Appears In


[[Lesson 19b - Practicing Looks]]
