---
course: Editing 1
source: Avid Media Composer Fundamentals I (MC101, 2019/2020)
lesson: 6
tags:
  - course/editing-1
  - avid/media-composer
---

# Lesson 6 — Introduction to Transition Effects

> [!abstract] Quick Glance
> The first effects lesson. Students add **dissolves and fades** at cut points using the **Quick Transition** tool, modify them in the Timeline with the **Transition Manipulation tool**, and create **audio crossfades** (which work exactly like picture dissolves). The one concept that must land: a transition needs **extra media beyond the cut** to overlap — no handles, no dissolve. This is the "smooth out the cuts" lesson.

## Primary Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **\\** (backslash) | Open the Quick Transition dialog box |
| **Cmd+8** | Open the Effect Palette |

## Quick Transitions

The **Quick Transition** button is the fastest way to add a dissolve. Park the playhead near the cut, click it (or press **\\**), set duration/alignment, and **Add**. Default is a centered one-second dissolve.

**Alignment options** control where the dissolve sits relative to the cut:

- **Centered** — half before, half after the cut (the default)
- **Ends at Cut** / **Starts at Cut** — the whole dissolve on one side

> [!warning] The handle problem — teach this first
> A dissolve overlaps the **A-side (outgoing)** and **B-side (incoming)** shots, so it needs **media beyond the cut point** on both shots — called *handles*. If a shot was edited in using its very first or last frame, there's nothing to overlap, and Media Composer can't (or won't cleanly) build the transition. This is the #1 source of "why won't my dissolve work?" — get ahead of it.

### Real-Time vs. Rendered

Quick Transitions are **real-time effects** — just click **Add**. **Add and Render** writes new media to disk (slower, rarely needed for a simple dissolve on a modern machine).

### Multiple Transitions at Once

You can apply a dissolve across **several cuts in a row** in one operation — a big time-saver for a montage.

## Modifying Transitions

Once a transition exists, you don't need to reopen the dialog. The **Transition Manipulation tool** (one of the Smart Tools) lets you drag a transition's position and duration right in the Timeline. To redo settings, park on the effect icon and press **\\** again.

**Remove Effect** button removes the transition under the playhead (respecting track selection).

## The Effect Palette

**Cmd+8** opens the **Effect Palette** — categories across the top, effects in the right pane, with a **search field** for filtering by name. (You'll lean on this heavily in Lessons 7–8.)

## Audio Crossfades

Media Composer builds **audio crossfades the same way as picture dissolves** — same Quick Transition tool, same dialog. Crossfades smooth abrupt audio edits (clicks, pops, hard level jumps between clips).

## Teaching Notes

> [!tip] "No handles, no dissolve" — the one thing to drill
> The handle concept is abstract until students hit it. Demo it live: try to dissolve a shot that uses its first frame, watch it fail or look wrong, then trim a few frames off and watch it work. The visceral before/after makes "you need media beyond the cut" permanent.

> [!tip] Less is more with transitions
> Beginners discover the Effect Palette and immediately want star-wipes everywhere. Note the manual's own observation: in real films and shows, **most edits are straight cuts**. A dissolve should *mean* something — passage of time, a softening, a breath. Frame restraint as the professional default.

> [!note] Audio crossfades are the unsung hero
> Students obsess over picture transitions and ignore audio crossfades — yet a tiny crossfade fixing a clicky dialogue edit does more for perceived quality than any visual dissolve. Make them apply crossfades to a few rough audio cuts and *hear* the difference.

> [!note] Centered vs. starts/ends at cut — sketch it
> The alignment options confuse people. A quick three-box sketch on the board (dissolve straddling the cut vs. sitting entirely before/after) clears it up faster than the dialog's own preview.

## Quick-Reference Answers (Review Questions)

- **Fastest way to add a dissolve?** The Quick Transition button (or backslash key).
- **Why might a dissolve fail?** No handles — insufficient media beyond the cut to overlap.
- **Default Quick Transition?** A centered one-second dissolve.
- **Real-time vs. rendered?** Real-time plays without writing media; Add and Render writes new media to disk.
- **How are audio crossfades made?** The same way as picture dissolves — via Quick Transition.
- **Open the Effect Palette?** Cmd+8.
