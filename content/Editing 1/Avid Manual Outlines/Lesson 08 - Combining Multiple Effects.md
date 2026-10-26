---
course: Editing 1
source: Avid Media Composer Fundamentals I (MC101, 2019/2020)
lesson: 8
tags:
  - course/editing-1
  - avid/media-composer
---

# Lesson 8 — Combining Multiple Effects

> [!abstract] Quick Glance
> Stacking more than one effect on a single shot, via **nesting**. The two things that must land: nesting is like **matryoshka dolls** (effects inside effects), and **order matters** — effects process **bottom-up**, so rearranging the stack changes the final image. Students **step into and out of** nests to see inside. This is the "layer effects deliberately" lesson.

## Primary Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **Option-drag** an effect onto an existing effect | Auto-nest the new effect on top |
| **Option-click** the Step In button | Open an effect nest in expanded nesting view |
| **Option-click** the Step Out button | Close the expanded nesting view |

## Nesting

You can only place one effect "on the surface" of a segment. To apply **multiple** effects to the same shot, you **nest** them — putting effects inside effects.

> [!tip] The matryoshka analogy (straight from the manual)
> Nesting is like Russian nesting dolls: open one and there's another inside, and another. At its simplest a nest holds several effects on one video segment; at its most complex, whole tracks of video can live inside a single segment. This image makes an abstract idea concrete instantly.

### Auto-Nesting

**Option-drag** a new effect onto an existing one to **auto-nest** it on top — e.g. a Resize on top of a Color Correction. You can stack any number this way.

> [!note] A few effects can't be nested
> Most combine freely, but a handful refuse. If a nest won't form, that's likely why — not a bug.

## Order of Processing — the Critical Concept

Effects in a nest process **from the bottom up**:

- The **bottom** effect in the Effect Editor is **closest to the video** (applied first).
- Each effect above is applied to the result of the one below.
- The **top** effect is applied last and "sees" everything beneath it.

Because each effect operates on the output of the one below, **changing the order changes the final image.** Reordering the stack is how you fix a result that looks wrong.

## Seeing & Navigating Nests

- **Effect Editor** shows the parameters of each nested effect, stacked in processing order.
- **Step In** (Option-click for expanded view) opens the nest in the Timeline so you can see and edit its internal layers.
- **Step Out** (Option-click) collapses back to the normal view.

## Teaching Notes

> [!tip] Demo order-dependence — don't just describe it
> "Order matters" is a shrug until students *see* it. Apply a Resize and a Mask (or a CC and a Blur) in one order, then swap them, and show the visibly different result. The swap is the lesson. Once they watch the image change from reordering alone, bottom-up processing makes permanent sense.

> [!tip] "Bottom is closest to the picture"
> The bottom-up rule inverts how people read a list (top-first). Anchor it physically: **the bottom of the stack sits on the video; you build upward.** Point at the Effect Editor and read it bottom-to-top out loud a couple of times.

> [!note] Keep first nests simple
> Two effects is plenty to teach the concept. Students who immediately stack five get lost and can't tell which effect is doing what. Master a two-effect nest, reorder it, *then* add complexity.

> [!warning] Step In, then remember to Step Out
> Students step into a nest, make a change, and then get confused because they're still "inside" it and the Timeline looks unfamiliar. Teach Step In and Step Out as a *pair*, always — in and back out.

## Quick-Reference Answers (Review Questions)

- **What is nesting?** Placing multiple effects on a single segment, effects inside effects (matryoshka-style).
- **How do you auto-nest?** Option-drag a new effect onto an existing effect in the Timeline.
- **In what order do nested effects process?** Bottom-up — the bottom effect is closest to the video and applied first.
- **Why does order matter?** Each effect processes the output of the one below it, so reordering changes the final image.
- **How do you look inside a nest?** Step In (Option-click for expanded view); Step Out to leave.
- **Do all effects nest?** Most do; a few cannot be nested.
