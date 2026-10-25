---
aliases:
  - Planar Tracking
tags:
  - glossary/davinci-resolve
---
# Match Move (Planar Tracking)

## Definition
An OFX effect (search "match" in the effects browser) used for planar tracking — the same conceptual tool as After Effects' planar tracker. Creates its own node with two green inputs, since it needs both the footage and a second source (e.g. a replacement sky) simultaneously.

## In Practice
Central to [[Efforts/Notes/Courses/Color for Digital Cinema/Glossary/Sky Replacement]]'s tracked method: click to place 2–4 tracking points on a stable, well-defined region of the frame (avoiding overlap with a moving subject), enable Zoom and Rotation tracking as a safety margin, then Track Forward. Positioning is set via a separate Controls panel — switching Canvas Controls from the default "Corners" to "Handles" is an easy-to-miss but necessary step, letting two adjustable anchor points define where the tracked content sits. Output mode is then switched to Composite before the tracked layer is actually keyed against the foreground on a downstream node.

## Teaching Analogies & Examples
- **Tracking a whole flat surface, not just a single point**: standard Motion Tracking follows one point or region moving through frame; Planar Tracking specifically follows a flat plane's rotation, tilt, and perspective as it moves — like tracking a sign on a wall as the camera moves around it, so a graphic or sky replacement can be locked convincingly onto that same shifting surface rather than just sliding along with it.
## Related Terms
[[Efforts/Notes/Courses/Color for Digital Cinema/Glossary/Sky Replacement]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/External Matte (Timeline Matte)]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/Motion Tracking]]

## Further Resources
See [[Efforts/Notes/Courses/Color for Digital Cinema/Glossary/Sky Replacement]] for a linked video covering this OFX plugin's tracked-replacement workflow.


## Appears In


[[Lesson 17a - Sky Replacements]]
