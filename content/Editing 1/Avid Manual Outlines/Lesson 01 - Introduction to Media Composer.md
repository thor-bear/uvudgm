---
course: Editing 1
source: Avid Media Composer Fundamentals I (MC101, 2019/2020)
lesson: 1
tags:
  - course/editing-1
  - avid/media-composer
---

# Lesson 1 — Introduction to Media Composer

> [!abstract] Quick Glance
> First contact with the application. Students launch Media Composer, learn the **three principal windows** (Bin Container, Composer, Timeline), and start customizing the workspace. The big takeaway for beginners: *nothing is lost when you close a window* — work lives in bins, and the interface is endlessly rearrangeable. This is the "where is everything and how do I make it mine" lesson.

## Primary Keyboard Shortcuts
| Shortcut | Action |
|----------|--------|
| **1** | Step backward 10 frames |
| **2** | Step forward 10 frames |
| **3** / **Left Arrow** | Step backward one frame |
| **4** / **Right Arrow** | Step forward one frame |
| **5** / **Spacebar** | Play forward |
| **Home** | Jump to first frame |
| **End** | Jump to last frame |
| **Cmd+L** | Enlarge — Timeline track height, bin frame size, or monitor zoom |
| **Cmd+K** | Reduce — Timeline track height (and the inverse of the above) |
| **Cmd+S** | Save |

## The Three Principal Windows

Everything in Media Composer happens across three windows. If a student is lost, it's almost always because they closed one of these.

- **Bin Container** — the central hub. Manages every project resource: bins, scripts, volumes, folders. The right panel shows opened bins; the sidebar shows project contents.
- **Composer** — the viewing window. Holds the **Source monitor** (left, for raw clips) and the **Record monitor** (right, for the sequence).
- **Timeline** — where the sequence is built and arranged.

Each window has a vertical title bar on the left. Clicking the purple **×** closes it — but closing never loses work. The fastest way to restore the default three-window layout is the **Edit** button on the Workspace toolbar.

> [!tip] Common student panic
> "My bins disappeared!" — Closing the Bin Container also closes all open bins, Composer, and Timeline contents. Nothing is lost. Reopen the bins and the work reappears.

## Bins — the Heart of the Project

A **bin** is a container file holding every asset in a project: master clips, subclips, sequences, titles, effects, graphics. Named after the physical bins that held celluloid film strips. Key facts:

- No asset can live loose in the Bin Container — *everything* must be inside a bin.
- Every project starts with one default bin named after the project.
- Bins can be grouped into folders for organization.

### Three Bin Layouts

Switch with the Bin Layout buttons at the top of the bin (they collapse into a dropdown if the bin is narrow):

| View | Think of it as | Use |
|------|----------------|-----|
| **Text view** (default) | A database | Maximum info in minimal space; sortable columns of metadata |
| **Frame view** | A light table | Visual thumbnails; drag to rearrange as a storyboard |
| **Script view** | Frame + Text + notes | Thumbnails with a Comments field for logging |

In **Frame view**, tidy a messy bin with **Bin > Align and Fill > Fill Window** (grid), **Fill Sorted** (grid in Text-view order), or **Align to Grid** (snaps without reordering).

### Changing the Representative Frame
By default a clip shows its first frame (often bars, black, or a slate). To pick a better frame: select the clip, then step through with the **1 / 2 / 3 / 4** keys or **spacebar** to play, and optionally save with **Cmd+S**.

## Customizing the Application

All personalization saves into your **User Profile** (File > Settings > User tab). Create one via **Create User Profile** in the User Profile dropdown — available both before opening a project (Select Project screen) and after.

### Workspaces

Predesigned window arrangements for different editing stages, accessed from the Workspace toolbar or **Windows > Workspaces**.

- **Customize:** arrange windows, then **Windows > Workspaces > Save Current**.
- **Reset:** **Windows > Workspaces > Restore Current to Default**.
- Bins are *not* saved as part of a workspace.

### Bin Window Management

Open bins tab together by default to save space (handy on one monitor). You can also drag a bin tab onto a green **eligible edge** to make a subdivided pane, or away from edges to float it in its own window.

### Interface Colors

**File > Settings > User > Interface > General** — toggle interface brightness and highlight color. **Apply** to preview, **OK** to commit.

### Mapping Buttons & Keys

Two tools, both essential to mention since pro editors live in customized keyboards:

- **Command Palette** (Tools menu) — the one place with every user-selectable button, grouped by category (Move, Play, Edit, Trim, FX, etc.). Set to **'Button to Button' Reassignment** to drag buttons onto the interface or keyboard.
- **Keyboard Palette** (File > Settings > User > Keyboard) — visual map of the physical keyboard. Holding **Shift** reveals a second mapping layer.

### Auto-Save

**File > Settings > User > Bin** — three values control backup frequency:

- **Auto-Save Interval** (default 15 min) — how often it tries to save.
- **Inactivity Period** (default 15 sec) — pause length before it's allowed to save.
- **Force Auto-Save At** (default 17 min) — interrupts and saves if you never paused.

No universally "right" setting — faster editors and tight deadlines (e.g. news) favor shorter intervals. Saves also create backups in the **Attic** folder (covered in Lesson 12).

## Teaching Notes

> [!tip] "L for larger, K for kleiner"
> The resize shortcuts trip everyone up because they don't seem mnemonic. *Kleiner* is German for "smaller," and the **K** key sits right next to **L** on the keyboard. Drop this once and students never forget which is which. Worth reinforcing that these are *universal* — the same keys resize Timeline tracks, bin frames, and Composer zoom depending on which window is active.

> [!tip] The "jiggling apps" analogy
> When the Command Palette's 'Button to Button' Reassignment is active, *no interface buttons work*. Frame it exactly like rearranging apps on a phone: when the apps are jiggling you can move them but not open them. Media Composer icons don't jiggle, but the rule is identical — and this preempts the inevitable "why is nothing clicking?" question.

> [!note] Lead with "you can't break it"
> The single most useful thing to establish in this lesson is psychological: closing windows, tabbing bins, floating panes — none of it loses work. New editors are terrified of clicking the wrong thing. If you demo closing the Bin Container and reopening it intact, you defuse a whole class's worth of anxiety up front.

> [!note] Make them build a profile immediately
> Have every student create a named User Profile in the first ten minutes. It gives them ownership, makes their customizations persist, and means later lessons (keyboard mapping, workspaces) have somewhere to land. A shared lab machine without individual profiles becomes chaos by Lesson 5.

> [!note] Defer the keyboard-mapping rabbit hole
> The Command Palette and Keyboard Palette are genuinely exciting to tinkerers — and a black hole of class time. Show the *mechanics* (drag a button to a key), then move on. Tell them pro editors spend years refining personal layouts; they don't need to today.

## Quick-Reference Answers (Review Questions)

- **Where are private project files stored?** In the logged-on user's Documents folder.
- **The three principal windows?** Bin Container, Composer, Timeline.
- **Central hub of the project?** The Bin Container.
- **What is a bin?** A container file holding all project assets.
- **Combine two open bins?** Drag one bin's tab onto the other's tab to tab them together.
- **What's saved in an auto-save?** Your bins (your work) — plus a backup copy to the Attic.
