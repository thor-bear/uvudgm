---
aliases:
  - Lift/Gamma/Gain Gamma
tags:
  - glossary/davinci-resolve
---
# Gamma

## Definition
Gamma has two related but distinct senses in this course, both ultimately about the same underlying idea (how brightness is distributed through an image):

1. **As a color-space property**: the contrast curve of a color space — its "height." Log gammas (e.g. ARRI LogC) produce a flat, low-contrast image; display gammas like Rec. 709's 2.4 produce a contrastier, S-curved image. HDR uses an EOTF (Electro-Optical Transfer Function) instead of "gamma" technically, but the two terms are used interchangeably in practice — see [[EOTF]] and [[PQ vs. HLG (HDR Transfer Functions)]].
2. **As a primary-wheel control**: one of the four Lift/Gamma/Gain/Offset wheels, specifically targeting the image's midtones.

## In Practice
Sense 1 matters when comparing color spaces (Rec. 709 gamma 2.4 vs. P3-DCI's gamma 2.6, or PQ's ~10,000-nit ceiling vs. Rec. 709's 100-nit cap). Sense 2 matters during actual grading — see [[Primary Wheels (Lift, Gamma, Gain, Offset)]]. A student pushing "gamma" in a color-managed pipeline is affecting the working-space midtones, not the display transform, which is why gamma behaves differently depending on whether a project is color-managed — see [[Color-Managed Workflow]].

## Teaching Analogies & Examples
- **Two senses worth two different pictures, since this note covers both.** Color-space Gamma (the EOTF-related sense): a dimmer switch curve — how quickly brightness ramps up as you turn the dial, not a straight line but a curve tuned to match how human eyes actually perceive brightness steps. Primary-wheel Gamma (the grading-tool sense): the *midtones* dial specifically — Lift moves shadows, Gamma moves the middle, Gain moves highlights, like three separate volume knobs for three different parts of a mix.
- Worth stating the connection explicitly rather than letting the two senses feel like a coincidence of naming: the wheel is named "Gamma" because it's adjusting where the midtones sit along that same brightness curve the color-space sense describes.
## Related Terms
[[Color Space]], [[EOTF]], [[PQ vs. HLG (HDR Transfer Functions)]], [[Primary Wheels (Lift, Gamma, Gain, Offset)]], [[Log (Footage)]]

## Further Resources
