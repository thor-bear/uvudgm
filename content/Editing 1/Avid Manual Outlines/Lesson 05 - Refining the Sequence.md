---
course: Editing 1
source: Avid Media Composer Fundamentals I (MC101, 2019/2020)
lesson: 5
tags:
  - course/editing-1
  - avid/media-composer
---

# Lesson 5 — Refining the Sequence

> [!abstract] Quick Glance
> Polishing the rough cut. Students reorder and replace shots, divide segments, and — the big new skill — enter **Trim Mode** to adjust edit points frame by frame. The conceptual leap is understanding **Ripple vs. Overwrite trim** (yellow vs. red, again) and the A-side/B-side model of an edit point. This is the "tighten the rhythm" lesson.

## Primary Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **U** | Toggle Trim Mode on/off |
| **Shift+D** | Switch to Overwrite (red) Trim |
| **Shift+F** | Switch to Ripple (yellow) Trim |
| **Y** / **Esc** | Exit Trim Mode |
| **Cmd+Z** | Undo |
| **Cmd+R** | Redo |
| **Cmd-drag** a segment | Snap head frame to the edit point |
| **Cmd+Option-drag** | Snap tail frame to the edit point |
| **Cmd+Shift-drag** | Lock a segment to vertical movement only |
| **Up / Down arrows** | Move a segment to a higher / lower track |

## Moving & Replacing Segments

The **yellow Extract/Splice-In tool** is the go-to for **reordering** shots — it removes the segment (closing the gap) and re-inserts it where you drop it (opening a new gap). Drop a segment:

- in the **middle** of another → splits that segment in two
- exactly on an **edit point** → reorders cleanly between two shots

The **red Lift/Overwrite tool** is for **replacing** — it covers the destination without rippling.

> [!note] Link Selection Toggle
> When active, selecting a video segment also grabs its linked audio (and vice versa), so they move/trim/delete together. Disable it to edit picture or sound independently. This is your main defense against breaking sync while rearranging.

### Dividing Segments — Add Edit

**Add Edit** drops a cut into a segment without changing the picture, letting you treat one shot as two (useful for applying an effect to just part of a shot, or trimming a sub-section).

## Trim Mode

Media Composer enters Trim Mode whenever you activate a **trim roller** at an edit point (or press **U**). The interface changes to show the edit in detail:

- **A-side monitor** — last frame of the *outgoing* shot
- **B-side monitor** — first frame of the *incoming* shot
- **Trim counters** — frames trimmed on each side (negative = left, positive = right)
- **Play Loop** — loops around the cut (spacebar/5 become Play Loop in Trim Mode); default 2.5 s pre/post-roll

### Two Kinds of Trim

| Trim | Color | Key | What it does |
|------|-------|-----|--------------|
| **Ripple Trim** | Yellow | **Shift+F** | Changes a shot's length *and* shifts the rest of the sequence to compensate |
| **Overwrite Trim** | Red | **Shift+D** | Changes the edit point *without* moving the rest — borrows/gives frames between neighbors |

**Trim buttons:** single **<** / **>** move one frame; double **<<** / **>>** move 1/3 second (10 frames at 30 fps, 8 at 24 fps).

### Entering / Exiting

Enter: press **U**, click the Trim Mode Toggle, or **lasso** an edit point (lassoing also auto-selects the tracks). Exit: **U**, **Y**, **Esc**, the toggle button, or click the timecode ruler/track.

## Teaching Notes

> [!tip] Trim Mode is where the color code pays off again
> Students met red/yellow in Lesson 4; Trim Mode is the same logic applied to edit points. **Yellow Ripple = the sequence length changes** (everything downstream shifts). **Red Overwrite = the sequence length stays fixed** (you're trading frames between two shots). Reinforce the through-line — it's the same mental model, not a new one.

> [!tip] The A-side / B-side anchor
> "A-side is the shot you're leaving, B-side is the shot you're entering." Get students fluent in this language immediately — every trim conversation, and most of Lessons 6–8, depends on it. Point at the two monitors while you say it.

> [!note] Trimming is where editing becomes *editing*
> Up to now students have been assembling. Trim Mode is the first taste of *craft* — shaving frames to land a reaction, holding a beat, tightening a pause. Slow down here. Have them trim the same cut three different ways and watch how two frames changes the feel. This is the lesson that turns assemblers into editors.

> [!warning] The Play Loop pre-roll trips people up
> Students often think their edit "isn't playing" when really the loop is just rolling through 2.5 seconds of pre-roll first. Mention it before they ask.

## Quick-Reference Answers (Review Questions)

- **Best tool for reordering shots?** The yellow Extract/Splice-In Segment Mode tool.
- **Ripple vs. Overwrite trim?** Ripple (yellow) changes sequence length; Overwrite (red) keeps length fixed by trading frames between neighbors.
- **A-side vs. B-side?** A-side = outgoing shot's last frame; B-side = incoming shot's first frame.
- **Enter/exit Trim Mode?** Enter with U or by lassoing an edit point; exit with U, Y, or Esc.
- **What does Add Edit do?** Inserts a cut within a segment without altering the picture.
- **What keeps audio and video together while editing?** The Link Selection Toggle.
