---
aliases:
tags:
  - glossary/davinci-resolve
---
# Color-Managed Workflow

## Definition
Knowing every source clip's native camera color space and gamma, conforming everything into one common large-format working space, grading within that space, then using an output transform to convert to whatever delivery spec is actually needed. The output transform can be swapped later without re-grading.

## In Practice
The defining test: the output transform sits at the very end of the pipeline, with all grading happening before it, on the flat log data. A project only counts as genuinely color-managed if there's a single unified pipeline throughout — using a different LUT per camera source with no common intermediate format is not color management, just several independent gamma-workflow conversions landing in the same delivery space. This course covers two implementations: [[ACES]] and [[Resolve Color Management (RCM)]].

## Teaching Analogies & Examples
- **Automatic transmission vs. manual**: a color-managed workflow (ACES or RCM) handles all the space-to-space conversions automatically in the background, based on rules you set up once — a non-color-managed workflow means shifting those gears yourself, manually, on every clip that needs it. Automatic is more hands-off and consistent; manual gives more direct control but more room for a mistake to slip through.
## Related Terms
[[Gamma Workflow (Non-Color-Managed)]], [[ACES]], [[Resolve Color Management (RCM)]], [[Color Space Referents (Display-, Camera-, Scene-Referred)]], [[IDT (Input Device Transform)]], [[ODT (Output Device Transform)]]

## Further Resources
