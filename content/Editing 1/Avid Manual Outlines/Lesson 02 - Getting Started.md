---
course: Editing 1
source: Avid Media Composer Fundamentals I (MC101, 2019/2020)
lesson: 2
tags:
  - course/editing-1
  - avid/media-composer
---

# Lesson 2 — Getting Started

> [!abstract] Quick Glance
> Students create their *own* project for the first time and get media into it. Two big concepts anchor the lesson: a **project is a folder, not a file** (you open projects through the app, never by double-clicking a file), and the difference between **Link** (point to media where it lives) and **Import** (copy and convert to Avid-native media). This is the "set up your workspace and ingest footage" lesson, done through the **Source Browser**.

## Primary Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **J – K – L** | Shuttle: reverse / pause / forward (tap repeatedly for faster speeds) |
| **Spacebar** | Play / pause |
| **Cmd+A** | Select all clips |
| **Cmd+L** | Enlarge Timeline track height / bin frames / monitor image |
| **Cmd+Shift+9** | Activate the Bin Container sidebar |
| **Cmd+S** | Save |

## Creating a Project

A new project is **a folder at the OS level**, containing a project file (.avp), a settings file (.xml), and a bin file (.avb) — never any media. To move or archive a project, move the *entire folder*.

Three save locations in the Select Project dialog:

- **Private** — saved to the current OS user's Documents; invisible to other login accounts.
- **Shared** — saved to a Shared Avid Projects folder; visible to anyone on the machine. *(This is typically what a lab uses.)*
- **External** — any location you browse to (doesn't have to be a physical external drive).

A project's **Format** = frame size + frame rate (e.g. 1080p/23.976 = 1920×1080, progressive, 23.976 fps). Rule of thumb: set it to match most of your source footage. You can change format settings later, but *not* the frame-rate family.

> [!warning] Projects can't be renamed
> There is no rename-project command. Name it for what it *is* (e.g. "Senior Doc") and never bake a version number into the project name — version your *sequences* instead.

## Setting Up Bins

The Bin Container sidebar lists every bin, flat or in folders. A news editor uses one bin per story; a feature can have hundreds. Create one via the **Fast menu > New Bin**, right-click > **New Bin**, or **File > New > New Bin**.

> [!note] Enter vs. Return when renaming (Mac)
> Pressing **Enter** (numeric keypad) renames the bin and exits. Pressing **Return** renames *and* drops the highlight to the next bin — handy for renaming several in a row.

## Inputting Media — Link vs. Import

The industry calls this *ingesting*; Avid calls it **inputting**. The main tool is the **Source Browser** (**File > Input > Source Browser**), which combines linking and importing in one window.

| Method | What it does | Result |
|--------|--------------|--------|
| **Link** | Connects to the original file *where it lives* — no copy, no conversion | Camera-native media; fast, space-efficient |
| **Import** | Copies the file to Avid's media folder *and* converts it | Avid-native media; a brand-new file |
| Tape capture | Cabled input from a deck/feed (legacy) | Rarely used today |

> [!tip] Always back up camera originals first
> Drill this in: before inputting anything, copy the original camera files to a second drive. Linking points *to* those originals — if they move or vanish, clips go offline.

### Media Folder View

When footage was offloaded from camera cards (the DIT's job), enable the **Media Folder View** button in the Source Browser so Media Composer treats the card folder as a single **media volume** rather than a maze of subfolders.

### Browsing & Adding Clips

You can play clips *before* committing them — scrub a thumbnail in Frame view or **double-click to load into the Source monitor**. To add: select files (Shift-click for a range, **Cmd-click** for scattered, **Cmd+A** for all) then drag to a bin or click **Link** / **Import**.

> [!note] Master clip = metadata, not media
> A master clip is a tiny packet of text (timecode, name, file path) that *points* to the real media on disk. When Media Composer can't find the media, the clip reads **"Media Offline"** (fixed in Lesson 12).

## Teaching Notes

> [!tip] "A project is a folder, not a file"
> The single most common beginner mistake is trying to open a project by double-clicking a file in Finder. Say it explicitly and repeatedly: you *launch the app*, then pick the project. Demo it once so it sticks.

> [!tip] Link vs. Import — use the suitcase analogy
> **Link** is like reading a library book — you don't own it, you just have access while it stays on the shelf. **Import** is like photocopying the book so you have your own copy regardless of what happens to the original. Linking is faster and lighter; importing is safer and self-contained. For a class working off shared lab storage, clarify which one your workflow uses *before* day one.

> [!warning] The "Media Offline" panic is coming
> Linked media breaks if the source drive isn't mounted or files get moved. Students *will* hit "Media Offline" — pre-frame it now as a normal, fixable thing (Lesson 12) rather than a catastrophe, and you'll save yourself a dozen alarmed emails.

> [!note] Make them build bin structure on day one
> Have students create and name their bins (Footage, Audio, Sequences, Titles) before importing a single clip. Organization is a habit; if they start messy they stay messy. A clean Bin Container is the difference between a calm edit and a frantic one.

## Quick-Reference Answers (Review Questions)

- **Where are private projects stored?** In the current OS user's Documents folder.
- **Link vs. Import?** Link points to media in place (no copy); Import copies and converts to Avid-native media.
- **What is a project, at the OS level?** A folder containing the .avp, .xml, and .avb files — no media.
- **What does "Media Offline" mean?** The master clip can't locate its linked media file.
- **What's the main media-input tool?** The Source Browser.
