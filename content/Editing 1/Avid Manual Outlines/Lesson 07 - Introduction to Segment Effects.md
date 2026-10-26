---
course: Editing 1
source: Avid Media Composer Fundamentals I (MC101, 2019/2020)
lesson: 7
tags:
  - course/editing-1
  - avid/media-composer
---

# Lesson 7 — Introduction to Segment Effects

> [!abstract] Quick Glance
> Effects applied to *whole shots* rather than cut points. Students learn that segment effects come **only from the Effect Palette** (drag onto a segment), and work through the practical, problem-solving effects an editor actually reaches for: **Flop, Stabilize, automatic Color Correction, FluidMorph** (to hide jump cuts), and **Resize**. First exposure to **keyframes**. This is the "fix and polish individual shots" lesson.

## Primary Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **Cmd+8** | Open the Effect Palette |
| **Cmd+A** | Select all keyframes in the Effect Editor / Effect Preview monitor |

## Applying Segment Effects

Unlike transitions, **segment effects are accessed only through the Effect Palette** (**Cmd+8**). To apply:

- **Drag** the effect icon from the palette onto a segment, *or*
- Enter Effect mode, select the segment(s), and **double-click** the effect.

Use the palette's **search field** — type "Flop" and the list filters as you go. Media Composer ships **200+** customizable effects. Remove one with the **Remove Effect** button (track selection matters).

## The Practical Toolkit

The lesson frames effects as **problem-solvers**, not eye candy:

| Effect | Solves | Notes |
|--------|--------|-------|
| **Flop** | Subject faces the wrong way / eyeline mismatch | Mirrors the image horizontally |
| **Stabilize** | Shaky handheld footage | Analyzes motion and offsets it; "auto-magical" but has limits |
| **Color Correction** (automatic) | Off color/exposure | One-click auto balance as a starting point |
| **FluidMorph** | Jump cuts in an interview | Morphs between two frames to disguise the cut |
| **Resize** | Distractions / reframing | Scale and reposition within the frame; animatable with keyframes |

> [!note] Stabilize has a catch
> Stabilize works by zooming in slightly to hide the edges as it repositions the frame — so you trade a little resolution/framing for steadiness. Fine usually, but worth knowing before applying it to a precious wide shot.

## Keyframes (First Look)

A keyframe marks a parameter value *at a point in time*. Set two different values at two keyframes and the effect animates between them — e.g. a Resize that slowly pushes in. **Cmd+A** selects all keyframes in the Effect Editor. (Deeper keyframe work comes in later courses.)

## Teaching Notes

> [!tip] Reframe "effects" as "fixes"
> Students hear "effects" and think spectacle. The whole point of this lesson is the opposite: these are **invisible repairs** — a flop to fix an eyeline, a stabilize to calm a shot, a FluidMorph to save an interview. The best segment effect is the one the audience never notices. Lead with that reframe and the lesson clicks.

> [!tip] FluidMorph is the "wow" moment — use it
> Hiding a jump cut with FluidMorph is genuinely magic to a beginner and a great hook. Show a visibly broken interview cut, apply it, and watch the room react. It motivates the whole effects unit better than any lecture.

> [!warning] Auto color correction is a *start*, not a finish
> Students will treat one-click auto CC as "done." Frame it as a first guess that gets you 70% there — real color work is a craft (and a later course). Don't let them ship auto-corrected footage thinking it's graded.

> [!note] Connect back to the Effect Palette search
> The palette has 200+ effects — overwhelming if browsed. Drill the **search field** habit (Cmd+8, type the name). It's the difference between students feeling lost and feeling fast.

## Quick-Reference Answers (Review Questions)

- **Where do segment effects come from?** Only the Effect Palette (transitions can come from Quick Transition; segment effects cannot).
- **Two ways to apply a segment effect?** Drag onto the segment, or select it and double-click the effect in the palette.
- **What does Flop do?** Mirrors the image horizontally (fixes eyelines/screen direction).
- **What does FluidMorph solve?** Disguises jump cuts, especially in interviews.
- **The trade-off with Stabilize?** It zooms in slightly, costing a bit of resolution/framing.
- **What is a keyframe?** A parameter value set at a moment in time; two differing keyframes animate the effect between them.
