---
aliases:
  - Avid MediaFiles Folder
tags:
  - glossary/editing-1
  - glossary/avid
---
# Sahara (Avid MediaFiles Folder Check)

## Definition
A diagnostic test that confirms whether a project's **Avid MediaFiles** folder is correctly placed on the root of the hard drive — the location Avid expects imported/linked media to live so a project can find its footage.

## In Practice
Run on Day 3, right after students create their personal user profile, as the first real troubleshooting checkpoint of the semester. If media reads as offline despite the folder being in the right place, it's often a corrupted media database rather than a missing-file problem — the fix is going into `Avid MediaFiles > MXF` and deleting the `.mdb` and `.pmr` files, which rebuild automatically. Flagged in the lesson notes as a recurring gotcha that surfaces once or twice a year — worth keeping as a standing troubleshooting reference rather than re-diagnosing from scratch each time it comes up.

## Teaching Analogies & Examples
- **A GPS check before a road trip**: it's not fixing anything by itself — it's just confirming the map (the MediaFiles folder) is where the car (Avid) expects it to be before you rely on it.
- If media shows offline "for no reason," walk students through the two-step troubleshooting logic out loud: first confirm the folder location is right (that's what Sahara checks), then — if it's already right — suspect a corrupted database file instead of a missing one.
## Related Terms
[[Import vs. Link]]

## Further Resources

#glossary/editing-1
