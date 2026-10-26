---
course: Editing 1
source: Avid Media Composer Fundamentals I (MC101, 2019/2020)
lesson: 12
tags:
  - course/editing-1
  - avid/media-composer
---

# Lesson 12 — Technical Fundamentals

> [!abstract] Quick Glance
> The media-management and troubleshooting lesson — unglamorous but the one that saves projects. Students learn Avid's storage logic (**media lives in `Avid MediaFiles/MXF`, separate from the project**), why clips go **Media Offline**, how to **relink**, how to delete media safely with the **Media tool**, and how to recover lost work from the **Avid Attic**. This is the "understand the plumbing and fix what breaks" lesson.

## Primary Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **Cmd+C** | Copy the selection |
| **Cmd+D** | Duplicate a clip or sequence |
| **Option-drag** a clip to a bin | Copy the **clip** (metadata), not the media |

## Avid's Media Management Model

The foundational idea, restated from Lesson 2 and now made rigorous: **the master clip in your bin is not your video file.** Clips, sequences, and effects are bundles of **metadata** that *point to* the real media.

Two ways media relates to a project:

- **Link** — connects to an existing media file in place; no new media created.
- **Import** — copies the original and creates **new** Avid-native media.

All media Media Composer *creates* goes to one place: **`[media drive]/Avid MediaFiles/MXF/1`**. Each such folder also holds two database files — **msmFMID.pmr** and **msmMMOB.mdb** — that track every file's metadata and links.

> [!note] Reveal File
> Select a master clip and use **Reveal File** to open an OS window showing the actual MXF media on disk — the concrete proof that clip ≠ media.

> [!info] Where things live on disk (Mac) — quick lookup
> The two paths students ask about most:
> - **Media files:** `[media drive]/Avid MediaFiles/MXF/1`
> - **Avid Attic (bin backups):** `Macintosh HD/Users/Shared/AvidMediaComposer/Avid Attic`
>
> Inside the Attic, drill into the **project folder → Bins → [bin name]** to find the numbered backup copies. *(Windows equivalent for the Attic, if a student is on a home PC: `C:\Users\Public\Public Documents\Avid Media Composer\Avid Attic`.)*

## Offline Media & Relinking

A clip reads **"Media Offline"** when Media Composer can't find the media its metadata points to — usually because a drive isn't mounted, files moved, or the database lost track. The fix is **relinking**: re-establishing the connection between the master clip and its media file.

> [!tip] Offline is a connection problem, not a data-loss problem
> Frame this clearly: "Media Offline" almost never means the footage is *gone* — it means the *link* is broken. Mount the right drive or relink and it returns. Defusing the panic is half the lesson.

## Deleting Media — the Media Tool

The **Media tool** shows the actual media files (not just clips) so you can identify and **delete project media** to reclaim drive space. This is powerful and dangerous: deleting here removes real media from disk.

> [!warning] Deletion here is real and (largely) irreversible
> Deleting a *clip* from a bin is recoverable; deleting *media* in the Media tool destroys the file on disk. Make students slow down and confirm they're deleting media they truly don't need. Pair this with the "always back up camera originals" rule from Lesson 2.

## The Avid Attic — Recovering Lost Work

Every time Media Composer saves (including auto-saves from Lesson 1), it tucks **backup copies of your bins** into the **Avid Attic** folder. If a bin gets corrupted or work is lost, you can **restore an earlier bin version from the Attic**.

**Location on Mac:** `Macintosh HD/Users/Shared/AvidMediaComposer/Avid Attic`

**To recover a bin (the short version):** quit Media Composer → in Finder, open the Attic path above → open the **project folder → Bins → [bin name]** → sort the numbered backups by **Date Modified** → **copy** (don't move) the version you want → paste it into your actual project folder (Documents for private projects, Shared Documents for shared) → relaunch and open the recovered bin.

> [!note] This closes the loop from Lesson 1
> The auto-save settings configured way back in Lesson 1 are *what populates the Attic*. Now students see the payoff: those backups are recoverable. It's a satisfying full-circle moment to point out.

> [!tip] Copy, never move
> When pulling a bin from the Attic, **copy** the backup rather than dragging it out. If something goes wrong mid-recovery, the original backup is still safely in the Attic.

## Teaching Notes

> [!tip] The whole lesson rests on "clip ≠ media"
> Every concept here — offline, relink, Media tool, Attic — flows from one idea: **the bin holds pointers; the drive holds the actual footage.** Draw it: bins on one side (little metadata cards), the MediaFiles folder on the other (the heavy MXF files), arrows linking them. When an arrow breaks, you get "offline." Teach the diagram and the rest is commentary.

> [!tip] "Offline ≠ lost" — say it before they panic
> Students *will* walk in someday to a sequence full of "Media Offline." If you've pre-taught that this means a broken link (not deleted footage), they'll calmly remount/relink instead of melting down. This is arguably the most practically valuable five minutes in the course.

> [!warning] Treat the Media tool like a sharp knife
> Most of the course is forgiving (undo, trash, Attic). The Media tool is not — it deletes real files. Set a different tone when you reach it: deliberate, double-checked, back-up-first. Consider demoing it read-only and not having students delete anything live.

> [!note] End the course on resilience
> This lesson is a fitting close: it tells students the system has safety nets (Attic, relink, backups) *and* sharp edges (real deletion). The takeaway is professional calm — things break, and a competent editor knows how to recover. That's a confidence-building note to end on.

## Quick-Reference Answers (Review Questions)

- **Is a master clip the same as its media file?** No — the clip is metadata pointing to the media on disk.
- **Where does Media Composer store created media?** `Avid MediaFiles/MXF/1` on the media drive.
- **What does "Media Offline" mean?** The clip can't locate its linked media — a broken link, not necessarily lost footage.
- **How do you fix offline media?** Relink the clip to its media file (or remount the drive).
- **What does the Media tool do?** Shows actual media files so you can identify and delete media to free space (irreversible).
- **What is the Avid Attic?** A folder of automatic bin backups; you can restore an earlier bin version from it.
