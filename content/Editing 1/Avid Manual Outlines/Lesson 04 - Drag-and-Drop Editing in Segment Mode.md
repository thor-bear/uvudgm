---
course: Editing 1
source: Avid Media Composer Fundamentals I (MC101, 2019/2020)
lesson: 4
tags:
  - course/editing-1
  - avid/media-composer
---

# Lesson 4 — Drag-and-Drop Editing in Segment Mode

> [!abstract] Quick Glance
> Now the mouse-driven counterpart to Lesson 3. Students build a montage by **dragging clips directly into the Timeline** using the two **Segment Mode tools**, governed by the **Smart Tool**. The crucial mental model is the **red/yellow color code**: red tools affect only what you touch; yellow tools ripple the neighbors. This is the "edit by feel with the mouse" lesson.

## Primary Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **Shift+Tab** | Toggle the Smart Tool on/off |
| **Shift+A** | Enable Lift/Overwrite (red) Segment tool |
| **Shift+S** | Enable Extract/Splice-In (yellow) Segment tool |
| **Cmd+Z** | Undo |
| **Cmd+Shift+N** | New sequence |
| **Cmd+1** | Open the Audio Tool |
| **Option-click** waveform button | Toggle waveforms on all tracks |
| **Option-click** fader icon | Reset clip gain to 0 dB |

## The Two Segment Mode Tools

Both let you drag clips around the Timeline; they differ in what happens to the *neighbors*:

| Tool | Color | Key | Behavior |
|------|-------|-----|----------|
| **Lift/Overwrite** | Red | **Shift+A** | Moves a segment in place; leaves filler behind, overwrites at the destination |
| **Extract/Splice-In** | Yellow | **Shift+S** | Moves a segment *and* ripples — closes the gap behind, opens space ahead |

## The Smart Tool

The Smart Tool is "smart" because it **switches the active tool automatically based on where your mouse is**:

- Middle of a clip → **Segment mode arrow** (move segments)
- Near an edit point → **Trim roller** (change lengths / edit point)
- Top half of track → **red** function; bottom half → **yellow** function
- Over a transition effect → **Transition Manipulation tool**

Toggle the whole thing with **Shift+Tab**. When it's on, you can only move the playhead by clicking the **timecode ruler/track** — many pros leave it off to avoid accidental edits.

> [!tip] The Red/Yellow color code (the most important idea in this lesson)
> Avid color-codes every Segment and Trim tool the same way:
> - **Red = Stop.** Affects *only* the segment/track you touch. Everything else stays locked, like a four-way stop.
> - **Yellow = Caution, Moving Objects.** Affects your segment *plus* its downstream neighbors (gaps open and close). More things moving = more risk of breaking sync = pay attention.
>
> Once students internalize this, every red/yellow tool in the app becomes self-explanatory.

## Smart Tool Settings

In **Timeline Settings > Edit tab**, four toggles shape behavior. The two worth knowing:

- **Clicking the TC Track or Ruler Disables Smart Tools** — lets cautious editors click anywhere to move the playhead.
- **Only One Segment Tool Can Be Enabled at a Time** — eliminates ambiguity about which edit you're making; pairs well with the Shift+A / Shift+S shortcuts on small screens.

## Editing Audio in the Sequence

Montage work means riding levels. Open the **Audio Tool** (**Cmd+1**) for accurate metering. Adjust **clip gain** via the fader icon (type a value, or arrow up/down in 0.1 dB steps); **Option-click** the fader to reset to 0 dB. **Shift-drag** through the Timeline for digital audio scrub.

## Teaching Notes

> [!tip] Lead the whole lesson with Red vs. Yellow
> Don't bury the color code — open with it. If students grasp "red affects only this, yellow ripples the neighbors" up front, the two Segment tools, the Trim tools, and most sync issues all make immediate sense. Everything else in the lesson hangs off this one idea.

> [!tip] Smart Tool = "jiggle on, jiggle off"
> Some students love the auto-switching Smart Tool; others find it changes tools unpredictably and panic. Teach **Shift+Tab** early so they can flip it off the instant it feels chaotic. Knowing they can disable it removes the fear.

> [!note] Contrast with Lesson 3 deliberately
> This lesson and the last are two routes to the same edits. Make the through-line explicit: Lesson 3 was keyboard/scales; Lesson 4 is mouse/feel. Pros fluidly switch between them. Students should try both and notice which suits which task — dragging for montage and rearrangement, keys for precise three-point edits.

> [!warning] Yellow tools break sync
> The yellow Extract/Splice-In tool is the usual culprit when audio drifts out of sync. When a montage suddenly sounds wrong, the first question is "did you move something with the yellow tool across tracks?" Pre-teaching this saves a lot of mystified debugging.

## Quick-Reference Answers (Review Questions)

- **The two Segment Mode tools?** Lift/Overwrite (red) and Extract/Splice-In (yellow).
- **What does red mean? Yellow?** Red affects only the touched segment; yellow also ripples downstream neighbors.
- **Why is the Smart Tool "smart"?** It auto-switches tools based on mouse position within the track.
- **Toggle the Smart Tool?** Shift+Tab.
- **When the Smart Tool is on, how do you move the playhead?** Click the timecode ruler or timecode track.
- **Reset clip gain to 0 dB?** Option-click the fader icon.
