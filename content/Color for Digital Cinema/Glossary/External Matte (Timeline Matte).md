---
aliases:
  - Timeline Matte
  - Add Matte
tags:
  - glossary/davinci-resolve
---
# External Matte (Timeline Matte)

## Definition
A matte/key asset imported independently of any specific clip (right-click → Add to Media Pool as Matte, done with **no clip selected**), then applied to a node via Add Matte → Timeline Mattes.

## In Practice
**Critical, easy-to-miss detail**: if a clip happens to be selected when a matte is imported this way, Resolve associates the matte with that specific clip instead of creating an independent, reusable asset — a common real mistake in this course's demos, deliberately preserved as a teaching moment. The recovery tool of choice when a colorist inherits an already-composited shot with no control over the original VFX — if the VFX artist can provide the matte/key they already built (their green-screen key, say), the colorist can separate foreground from background and grade each independently without manually rotoscoping a selection from scratch. Also the mechanism behind [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Grain (Film Grain Emulation)|film-grain overlays]] (imported as a matte, connected green-to-green rather than the default blue-to-blue).

## Teaching Analogies & Examples
- **A stencil made somewhere else and handed to you**: instead of building a selection yourself inside Resolve (a Power Window, an HSL Qualifier), an External Matte is a pre-made mask — typically built in a VFX/compositing tool — imported and dropped onto the timeline to isolate an area, ready to use rather than constructed from scratch.
## Related Terms
[[Efforts/Notes/Courses/Color for Digital Cinema/Glossary/Sky Replacement]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Match Move (Planar Tracking)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Color-to-VFX Workflow (Pipeline Order)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Grain (Film Grain Emulation)]]

## Further Resources


## Appears In


[[Lesson 17b - Color to VFX Workflow and External Mattes]]
