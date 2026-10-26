---
tags:
  - glossary/editing-1
  - glossary/avid
  - glossary/premiere
---
# Trim Mode

## Definition
A dedicated editing mode for precisely adjusting an existing edit point, rather than building new material into the sequence. Inside Trim Mode, the interface shifts from showing the Source clip to showing the outgoing frame of the A-side and the incoming frame of the B-side of the cut — the conceptual shift Lesson 10 flags as the biggest adjustment for students moving from basic Overwrite/Splice-In editing.

## In Practice
Entered in Avid with **U**, by clicking directly on an edit point, or by marquee-selecting one; move between edit points with **A / S**. Once inside, **Opt/Alt** isolates a single video or audio track, **Spacebar** previews the trim, and the **m / . / /** keys plus **p / [ / ]** operate the Trim Tools and switch sides of the edit. **JKL trimming** — using the same J/K/L keys students already know for playback — is introduced as the payoff moment at the end of Lesson 10, deliberately sequenced after the mechanical basics so it lands as a "mind-blowing" capability rather than just another shortcut. Covers three underlying trim types: Overwrite Trim, Dual Roller Trim, and Ripple Trim. Premiere has its own Trim Mode (Lesson 18) built around many of the same concepts — mouse-free window switching (**Shift 1–4**) and **E** for Extend to Playhead.

## Teaching Analogies & Examples
- **The seam between two pieces of fabric**: once two clips are already sewn together, Trim Mode is where you go to adjust exactly where that seam sits — nudging it a little one way or the other rather than ripping the whole seam out and re-sewing.
- Contrast with basic editing: building a sequence with Overwrite/Splice-In is like laying bricks; Trim Mode is coming back afterward with a chisel to fine-tune exactly where one brick meets the next.
- For the shift from Source-window thinking to edit-point thinking: tell students it's like the difference between packing a suitcase (thinking about each item) and standing at airport security deciding exactly where the zipper closes (thinking only about the boundary).
## Related Terms
[[JKL]], [[Extend]], [[Top and Tail]], [[Match Frame]]

## Further Resources
```mermaid
flowchart LR
    subgraph Before["Before Trim Mode"]
    A[Source Window] -.shows.-> B[Whole clip]
    end
    subgraph During["Inside Trim Mode"]
    C[A-side: outgoing<br/>frame of Shot 1] ---|the cut point| D[B-side: incoming<br/>frame of Shot 2]
    end
    Before -->|enter Trim Mode - U| During
```

#glossary/editing-1
