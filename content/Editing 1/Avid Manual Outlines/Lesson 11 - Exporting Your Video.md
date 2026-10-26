---
course: Editing 1
source: Avid Media Composer Fundamentals I (MC101, 2019/2020)
lesson: 11
tags:
  - course/editing-1
  - avid/media-composer
---

# Lesson 11 — Exporting Your Video

> [!abstract] Quick Glance
> Getting a finished sequence *out* of Media Composer as a deliverable file. Students export using built-in **templates** and learn to **customize settings** for destinations Avid doesn't preset (e.g. YouTube). The concept to anchor: **QuickTime .mov is a container (a wrapper), not a format** — what matters is the codec inside. Students also save their own export template. This is the "deliver the final file" lesson.

> [!note] No dedicated shortcut table
> The manual provides no keyboard-shortcut summary for this lesson — exporting is a dialog-driven workflow (File > Output / Export).

## Exporting with a Template

Media Composer ships **export templates** for common workflows that make the process nearly one-click:

1. Choose the export template.
2. Rename the file in the **Save As** area (don't worry about the extension yet — the format is set separately).
3. Pick the **destination** drive/folder.
4. **Save** to begin.

> [!warning] The app locks up during export
> While exporting, you **cannot use Media Composer.** Tell students up front so they don't think it crashed — and so they don't start an export five minutes before they need to leave the lab.

## Customizing Export Settings

Avid doesn't preset every destination (notably **YouTube**), so you'll often customize. Key controls in the export dialog:

- **Export As menu** — the file type/wrapper to create.
- **Use Marks / Use Enabled Tracks** — limit the export to marked IN/OUT range and/or active tracks. Deselected = whole sequence, all tracks.
- **Same as Source vs. Custom** — keep the current media format, or open **Format Options** to set a custom codec/size.

> [!tip] "QuickTime is a wrapper, not a format" — the core concept
> A **.mov** file is a *container* that can hold many different codecs inside. Telling someone "I'll send a QuickTime" says almost nothing about whether it'll play for them — it's the **codec inside** that matters (e.g. H.264 for web). This is the single most clarifying idea in the lesson; lead with it.

### A Typical Web Export

For YouTube/Vimeo, a common recipe is **QuickTime Movie (.mov) wrapper with H.264** video — widely compatible and well-compressed. Always confirm the target site's current recommended specs rather than guessing.

## Saving an Export Template

Once you've dialed in custom settings, **save them as a template** so the next export is a single click. This is the payoff of doing it carefully once.

## Teaching Notes

> [!tip] Container vs. codec — use the "envelope and letter" image
> The wrapper/codec confusion derails students constantly. **The container (.mov, .mp4) is the envelope; the codec (H.264) is the letter inside.** Two envelopes can look identical but hold totally different letters. Draw it once and "why won't my file play?" stops being mysterious.

> [!note] Have them save a class-standard template
> Don't make students rebuild YouTube settings every time. Walk through the custom export *once*, save it as a template together, and now everyone exports consistent, correct files all semester. It also models good real-world practice (facilities standardize their export presets).

> [!warning] "Use Marks" is a silent footgun
> If a student left IN/OUT marks on their sequence, **Use Marks** will quietly export only that slice — and they'll swear the export is broken. When an export is mysteriously short, check the marks first.

> [!tip] Match the spec to the destination
> Resist teaching one magic setting. The real skill is *reading the target's requirements* (YouTube vs. a broadcaster vs. a client review link) and matching format/size/codec to it. Verifying specs beats trial-and-error re-exports — each of which locks up the machine.

## Quick-Reference Answers (Review Questions)

- **Fastest way to export?** Use a built-in export template.
- **Is QuickTime (.mov) a format?** No — it's a container/wrapper; the codec inside determines compatibility.
- **A common web export?** A QuickTime wrapper with H.264 video.
- **What do "Use Marks" / "Use Enabled Tracks" do?** Limit the export to the marked range and/or active tracks.
- **Can you use Media Composer during an export?** No — the application is locked until it finishes.
- **How do you avoid rebuilding custom settings each time?** Save them as an export template.
