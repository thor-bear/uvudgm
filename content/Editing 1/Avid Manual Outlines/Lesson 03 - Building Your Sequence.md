---
course: Editing 1
source: Avid Media Composer Fundamentals I (MC101, 2019/2020)
lesson: 3
tags:
  - course/editing-1
  - avid/media-composer
---

# Lesson 3 — Building Your Sequence

> [!abstract] Quick Glance
> The core editing lesson. Students build a rough cut using the **four foundational edit functions — Splice-In, Overwrite, Extract, Lift** — deliberately via buttons and keys rather than drag-and-drop. The philosophy is explicit: learn these like *musical scales* to build muscle memory. Also covers tracks, patching, and reading audio waveforms to find cut points. This is the "actually start cutting" lesson.

## Primary Keyboard Shortcuts

| Shortcut                         | Action                                            |
| -------------------------------- | ------------------------------------------------- |
| **V**                            | Splice-In (yellow — ripples, opens a gap)         |
| **B**                            | Overwrite (red — covers, no ripple)               |
| **X**                            | Extract (yellow — removes and closes the gap)     |
| **Z**                            | Lift (red — removes and leaves filler)            |
| **Cmd+U**                        | Add a new mono audio track                        |
| **Cmd+Shift+U**                  | Add a new stereo audio track                      |
| **Cmd+Option+L**                 | Enlarge waveform display (without resizing track) |
| **Cmd+Option+K**                 | Reduce waveform display                           |
| **Option-click** waveform button | Toggle waveforms on *all* tracks                  |
| **Home**                         | Jump to start of clip / sequence / Timeline       |

## The Four Foundational Edits

This is the heart of the whole course. Two pairs, distinguished by whether they ripple the sequence:

| Edit | Key | Effect | Ripples? |
|------|-----|--------|----------|
| **Splice-In** | **V** | Inserts source between existing material | Yes — pushes everything downstream later |
| **Overwrite** | **B** | Drops source on top of existing material | No — replaces in place |
| **Extract** | **X** | Removes a section and closes the gap | Yes — pulls everything up |
| **Lift** | **Z** | Removes a section, leaves **filler** (black) | No — gap remains |

> [!tip] The deliberate-practice framing
> The manual deliberately teaches these with buttons/keys *before* drag-and-drop (Lesson 4). Sell this to students: it's slower at first, like practicing scales, but it builds the muscle memory that makes fast, accurate editing possible. Editors who skip straight to dragging plateau early.

### Three-Point Editing

Mark an IN and OUT on the source plus an IN on the record (or any three of the four marks) and Media Composer calculates the fourth. This is how Splice and Overwrite know exactly what to place and where.

## Working with Tracks

Media Composer is **track-based**: up to 24 video and 64 audio tracks. New sequences start with V1, A1, A2. Track *activation* (the selector buttons) controls where edits, effects, and markers land — **tracks matter.**

A suggested rough-cut track layout:

- **V1** — picture
- **A1 / A2** — dialogue
- **A3** — atmosphere / sound effects
- **A4** — music (stereo)

> [!note] Rename tracks to stay sane
> Right-click a track number > **Rename Track**. Include the number in the name (e.g. "A1 - Dialogue") so it's unambiguous.

### Patching

Because you're *not* dragging, you **patch** a source track to the record track you want (e.g. source A1 → record A5 for music). Drag the source selector's arrow to the target, or click-and-hold for a pop-up menu. **Auto-Patching** lets track *activation* drive patching so you can stay on the keyboard.

> [!warning] Rules of patching
> Video patches only to video; audio only to audio; mono only to mono; stereo only to stereo. Mismatches simply won't connect.

## Reading Audio Waveforms

Many cuts are motivated by sound — a word, a breath, a beat. Display **waveforms** (Track Control panel > Waveform button; **Option-click** for all tracks) to *see* those cues. Resize the waveform display independently of volume with **Cmd+Option+L / K**. Use **Toggle Source/Record in Timeline** to see *source* waveforms before editing them in.

## A Staged Rough-Cut Approach

1. Create the sequence and add tracks.
2. Cut dialogue first to structure the story (the **radio edit**) — don't fuss over track layout yet.
3. Add reaction shots to support the story visually.
4. Refine and tighten for rhythm and pacing.
5. Clean up and organize audio on its proper tracks.
6. Add sound effects and video effects.

## Teaching Notes

> [!tip] Mnemonic: which edits ripple?
> **Splice and Extract are the "ripple twins"** — both shift the rest of the sequence (V inserts and pushes; X removes and pulls). **Overwrite and Lift leave everything in place** (B covers; Z leaves a hole). Pair them this way and students stop confusing the four.

> [!tip] "Lift leaves a hole, Extract erases the gap"
> The Lift/Extract distinction is the one students forget. **Lift** = lift a shot off a shelf, the empty space stays (filler). **Extract** = pull a card out of a deck, the cards close ranks. Say it once with the gesture and it lands.

> [!note] Teach the radio edit explicitly
> New editors want to cut picture immediately. The single most valuable habit you can instill is structuring on *dialogue first* — get the story working in sound, then layer picture. It mirrors how professional scenes are actually built.

> [!warning] Sync-breaking lives here
> The moment students start extracting and splicing on some tracks but not others, they'll break sync. Flag it now and preview the safety nets (Link Selection, Sync Lock) that Lessons 4–5 cover in depth.

## Quick-Reference Answers (Review Questions)

- **The four basic edit functions?** Splice-In (V), Overwrite (B), Extract (X), Lift (Z).
- **Which ones ripple the sequence?** Splice-In and Extract.
- **Lift vs. Extract?** Lift leaves filler in the gap; Extract closes the gap.
- **What is three-point editing?** Setting three of four marks (source IN/OUT, record IN/OUT); the system computes the fourth.
- **Max tracks?** 24 video, 64 audio.
- **What is patching?** Routing a source track to a chosen record track for the edit.
