---
tags:
  - glossary/editing-1
  - glossary/avid
---
# Import vs. Link

## Definition
The two ways to bring footage into an Avid project. **Link** points a master clip directly at the original media file where it already lives, with no copy or conversion — fast and space-efficient, but dependent on that original file staying put. **Import** copies the footage into Avid's own MediaFiles folder and converts it to Avid-native media — slower and heavier on disk, but self-contained and stable.

## In Practice
Taught in Lesson 5 during the Rock Climber project: students link everything via the **LINK** button in the Source Browser, with one small file also imported so they see both results side by side. **Reveal File** is used immediately after to show *where* the footage physically lives in each case — the original file's own folder for a linked clip, versus a pair of files (video + audio) inside the AvidMediaFiles folder for an imported one. That distinction matters again when deleting: a linked masterclip only offers **Delete Masterclip** (removes it from the bin), while an imported one also offers **Delete 2 Associated Media Files** (removes the actual media from disk) — mixing those up is an easy way to accidentally destroy footage.

## Teaching Analogies & Examples
- **Renting vs. buying a moving truck**: Link is like borrowing the neighbor's truck when you need it — fast and free, but if they move it, you're stuck. Import is buying your own truck — costs more space and time up front, but it's yours no matter what the neighbor does.
- **A shortcut icon vs. a copied file on your desktop**: a Link is a shortcut pointing at the original — delete or move the original and the shortcut breaks. An imported file is an actual copy sitting safely in Avid's own folder.
## Related Terms
[[Reveal File]], [[Delete Masterclip vs. Delete Associated Media Files]], [[Source Browser]]

## Further Resources
```mermaid
flowchart LR
    A[Footage on Drive] -->|Link| B[Master Clip points<br/>at original file]
    A -->|Import| C[Copy created in<br/>Avid MediaFiles folder]
    B --> D[Fast, less stable —<br/>breaks if original moves]
    C --> E[Stable, more space —<br/>self-contained in project]
```

#glossary/editing-1
