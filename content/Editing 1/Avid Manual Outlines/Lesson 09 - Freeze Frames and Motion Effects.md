---
course: Editing 1
source: Avid Media Composer Fundamentals I (MC101, 2019/2020)
lesson: 9
tags:
  - course/editing-1
  - avid/media-composer
---

# Lesson 9 — Freeze Frames and Motion Effects

> [!abstract] Quick Glance
> Manipulating *time* within a shot. Students create **freeze frames** (hold a single frame) and **motion effects** (constant speed up/down), and meet **Timewarp** (variable speed via keyframes) conceptually. The key distinction: freeze frames and motion effects are made **from the Source monitor** (a master clip/subclip); Timewarps are made **from footage already in the Timeline**. This is the "play with speed and time" lesson.

> [!note] No dedicated shortcut table
> The manual provides no keyboard-shortcut summary for this lesson — these features are menu-driven (Composer > Freeze Frame; the Motion Effect Editor button).

## Three Types of Motion Effect

| Type | What it does | Created from |
|------|--------------|--------------|
| **Freeze Frame** | Holds one frame on screen for a chosen duration | A clip in the **Source monitor** |
| **Motion Effect** | Plays a clip at a **constant** altered speed (slow/fast) | A clip in the **Source monitor** |
| **Timewarp** | **Varies** speed over time via keyframes (e.g. ease from normal into slow-mo) | Footage **already in the Timeline** |

*Lesson 9 focuses on the first two; Timewarp is covered in later courses.*

## Creating a Freeze Frame

A freeze frame turns a single frame into a new clip you can edit into the sequence:

1. Load the clip into the **Source monitor**.
2. Park the playhead on the frame to freeze.
3. **Composer > Freeze Frame > [duration]** (e.g. 30 seconds).
4. Choose the **drive** and destination **bin** for the new freeze-frame clip.

> [!tip] Make freeze frames longer than you think you need
> The manual's own advice: generate a freeze a bit longer than required. You can always trim it down in the sequence; you can't easily extend one that's too short without regenerating it.

> [!note] Interlaced footage flutters
> Freeze frames from interlaced media can show a visible flutter (a blink, say, captured across two fields). The interpolated-field rendering option smooths this. Mostly relevant if your source is interlaced — view freezes on a proper monitor to judge.

## Creating a Motion Effect

A motion effect plays a Source-monitor clip at a steady altered speed. You define the speed (as a percentage or by target duration), and Media Composer renders the slowed/sped result. Like freeze frames, these are generated as new clips before editing in.

## Teaching Notes

> [!tip] The clean dividing line: Source vs. Timeline
> The one thing students must walk away with is *where* each effect is born. **Freeze frames and motion effects = Source monitor** (you're making a new clip from raw footage). **Timewarp = Timeline** (you're warping a shot already cut in). Put it on the board as two columns. Everything else is detail.

> [!note] Constant vs. variable speed
> "Motion effect" (constant) vs. "Timewarp" (variable) is the conceptual pair. A constant 50% is a steady slow-mo throughout; a Timewarp can *ramp* — normal speed, then ease into slow-mo on the peak moment. Even though Timewarp is a later course, naming the distinction now helps students understand what motion effects *can't* do.

> [!tip] Generous freeze duration = fewer redos
> Reinforce the "make it longer" tip with a quick story: nothing's more annoying than a freeze that ends one frame before the moment you wanted to hold. Trim down, don't regenerate up.

> [!warning] Speed changes can stutter without the right field handling
> Slow motion on interlaced or low-frame-rate source can look juddery. If a student's slow-mo looks rough, the source frame rate and field rendering are the usual suspects — not a mistake in their technique.

## Quick-Reference Answers (Review Questions)

- **Three types of motion effect?** Freeze frame, motion effect (constant speed), Timewarp (variable speed).
- **Where are freeze frames and motion effects made?** From a clip in the Source monitor.
- **Where are Timewarps made?** From footage already in the Timeline.
- **How do you set a freeze frame's length?** Composer > Freeze Frame > choose a duration.
- **Why make a freeze frame longer than needed?** You can trim it down in the sequence but can't easily extend it.
- **What can cause a freeze frame to flutter?** Interlaced source media; use interpolated-field rendering to smooth it.
