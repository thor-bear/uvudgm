---
type: glossary-build-log
---

# DaVinci Resolve Glossary — Build Log

*This tracked Phases 1–3 while the original glossary was being built, then Phases 4 and 5 once those were added to the process (see [[../../../../AI/Skills/course-glossary-builder-core|course-glossary-builder-core]] and [[../../../../AI/Skills/resolve-glossary-builder|resolve-glossary-builder]]). Kept for the full process history — fact-check corrections, judgment calls, category decisions, and ongoing batch progress.*

## Phase 1: Term Extraction (sweep all lessons, build term list)
Status: complete
Lessons swept: 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17a, 17b, 18, 19, 19b, 19c, 23, 24, 25, 26
Lessons skipped (by decision, not oversight): 01 — Day 1 is rapport-building, not technical content, so it's not expected to contain glossary-worthy terms.

## Phase 2: Glossary Note Creation
Status: complete
Terms with notes: 161 / 161 — all glossary notes written and verified against the actual vault directory listing.

**Provenance note**: most of Phase 2 was written across several sessions by this assistant, cross-checking each term against the actual lesson content and cross-linking related terms. A meaningful chunk (VFX & Compositing, most of Noise/Repair/OFX Plugins, and part of Color Theory & Style) was completed by a parallel session running concurrently while the Obsidian connector was down for part of one session — those notes were spot-checked for quality/template consistency and found sound. One duplicate note (High Key/Low Key) from that overlap was resolved by deleting the redundant version.

**What's NOT done**: none of these notes have been checked against the official DaVinci Resolve reference manual for factual accuracy — Phase 2 leaned on the lesson content itself (detailed and reliable) plus general Resolve knowledge, not a manual cross-check, given the manual's size (4,000+ pages) made exhaustive per-term verification impractical. Flag anything that reads as wrong or outdated. Also unresolved: whether any of the "OFX Plugin Tour" bundled items (Dust Buster, Patch Repair, Chromatic Aberration correction) should be split into their own notes.

## Phase 3: Lesson Linking + Appears In
Status: complete. All 25 applicable lessons have inline links at first meaningful mention. All 161 glossary notes have their `Appears In` section populated — via the cross-lesson term→lesson map for terms referenced in multiple lessons, and via the single defining lesson for terms that only ever appeared in their own self-defining section and were never cross-referenced elsewhere.

**Note on heading-title quirks discovered during the Appears In pass**: several glossary notes' actual H1 heading differs slightly from the filename — commas in the filename sometimes render as slashes in the heading (e.g. "Sharpen, Blur (Palette).md" → H1 is "Sharpen / Blur (Palette)"; "Hue-Sat-Lum Curves.md" → H1 is "Hue/Sat/Lum Curves"; "Bypass vs. Disable (Grade, Node Toggles).md" → H1 is "Bypass vs. Disable (Grade/Node Toggles)"; similarly for High Key-Low Key, Online-Offline Workflow, Roll Numbers, Splitter-Combiner Node, Two-Pop, Inside-Outside Softness). Worth knowing if any of these notes are renamed or restructured later — the filename and the H1 aren't always identical.

## Notes / Decisions Made
- Location: `Efforts/Notes/Courses/Advanced Color Correction/Glossary/` — lives inside the course folder itself (corrected from an earlier draft that placed it under `Atlas/Notes/Glossary/`), since it's specifically built from and for this course's lesson outlines.
- The "Color Terms Study Guide" note (`Efforts/Notes/Courses/Advanced Color Correction/Study Guides/Color Terms Study Guide.md`) already covers a first batch of core terms in depth — glossary notes don't duplicate those; they link out to it instead where relevant.
- See the `resolve-glossary-builder` skill (`AI/Skills/resolve-glossary-builder.md`) for the full process.

- **Decision (corrects earlier skill draft):** every qualifying term gets its own glossary note, even if the "Color Terms Study Guide" already covers it. The glossary note is a separate deep-dive space (room for YouTube videos, articles, etc. added later) and the Phase 3 `Appears In` link hub — not a duplicate of the Study Guide. Study Guide overlap gets a cross-reference inside the note, not a skip.

- **Judgment call**: "Gamma" appears twice with related-but-distinct senses — Lesson 2's color-space property (contrast curve/EOTF) vs. Lesson 3's primary-wheel midtone control. Covered both senses in one entry rather than forking a duplicate note.
- **Judgment call**: "Color Correction" / "Color Grading" not broken out as their own terms — mapped directly onto Primary/Secondary Corrections ("correction = primaries, grading = secondaries"), folded in as aliases/related terms.
- **Retroactive catches**: several terms first appeared in passing in one lesson but weren't pulled into the term list until they recurred with real technical weight in a later lesson — Debayer/Debayering (L3→L4), Organic Vignette (L10→L13), Halation (L16→L18). Filed under the later lesson's batch in each case; the term itself is what matters for Phase 2, not which lesson's bucket it's filed under.
- **Judgment call**: "Frame Judder" is editing/workflow-adjacent rather than strictly a color term, but included per the err-toward-inclusion rule.
- **Judgment call**: "Color-contrasted" and "Luma-contrasted" (Lesson 5) folded into the existing Contrast note (Lesson 3) as elaboration, not forked as separate terms.
- **Judgment call for Phase 2**: "Layer Mixer" (Lesson 10) and "Layer Node" (Lesson 3) resolved as the same node type, not two distinct ones — "Layer Mixer" is Resolve's actual name (visible in the Add Node menu / Option+L shortcut); "layer node" is this course's informal shorthand for the same thing. Merged into a single note titled "Layer Mixer" with "Layer Node" as an alias.
- Consistent bundling pattern used for codec/format families: ProRes, Camera RAW Decode Settings, High Compression Codecs each cover their specific named variants within one note rather than forking an entry per variant.
- **Bundling judgment call**: Lesson 19's OFX plugin tour named ~17 individual effects. Rather than one glossary note per plugin, these were bundled into a single "OFX Plugin Tour" entry, consistent with the codec-family bundling pattern above — and because the lesson itself frames this section as "play with whatever looks interesting," not core/required vocabulary. Dust Buster, Patch Repair, and Chromatic Aberration correction are the strongest candidates for splitting out later, since they got real applied use elsewhere in the semester.
- **Judgment call**: "Combinatorial Creativity" (Lesson 16's creative-philosophy framing) was not added as a glossary term — this glossary is scoped to technical/factual DaVinci Resolve vocabulary rather than creative-philosophy framing, even when a concept is explicitly named in a lesson. Same reasoning excluded Lesson 6's stereotypical-color-meanings table.
- **Correction**: "DCTL" (Lesson 25) was originally folded into Lesson 19's bundled "OFX Plugin Tour" entry, but DCTL is a distinct scripting/plugin category (not OFX) with its own install location and behavior — given its own note.
- **Correction**: "ACEScg" was folded into the general ACES note back in Lesson 12, but Lesson 26 draws a real, load-bearing distinction between ACEScg (linear, compositing) and ACEScct (log, grading) — given its own note ("ACEScg vs. ACEScct") rather than a passing mention inside ACES.
- **Merge**: "PQ (Perceptual Quantization)" was first queued in Lesson 2 as part of the Gamma note's EOTF discussion. Lesson 26 covers PQ properly (paired against HLG) — consolidated into one "PQ vs. HLG" note; the Gamma note still cross-references it.
- **Gap-filling discovered mid-Phase-3**: while linking Lesson 04, found two terms flagged during Phase 1 extraction but never actually written as notes in Phase 2 — Frame Judder and Handles. Both were referenced from several other notes' "Related Terms" sections as broken links. Created both, bringing the total from 159 to 161.

## Fact-Check History

**First pass (post-Phase 2)**: ran a focused web-search pass on the highest-risk claims — prices, product names, and version currency, rather than reading the full 4,000+ page manual. Fixes made: DCP.md corrected Studio license price ($299 → $295, verified current mid-2026); Reference Display.md corrected Sony's current model name (BVM-HX310 → BVM-HX3110, the actual successor to the discontinued BVM-X300) and added a pricing-currency disclaimer; Control Surface.md flagged the course's "~$100 used" Tangent Ripple figure as reading low against current ~$300-350 retail, and softened the Advanced Panel figure to an approximate range; ACES.md added a note that ACES 2.0 (released April 2025, merging RRT+ODT into a single DRT) now exists and Resolve 20 has beta support for it — the course and this glossary's IDT/RRT/ODT framing reflects ACES 1.x, still valid and widely used but no longer the newest spec.

**Second pass (remaining hardware + version currency)**: Tangent Element bundle ($2,470) confirmed exactly accurate. DeckLink Mini Monitor 4K ("~$200") confirmed close to current retail ($215–229). Neat Video confirmed still maintained and Resolve 21-compatible as of July 2026; no price stated in that note. Checked DaVinci Resolve 21's full feature changelog for any renamed core color-page terminology (Curves, qualifiers, Power Windows, node types) — found none; Resolve 21's actual additions (Photo page, AI tools, Fusion Krokodove library, MultiMaster trim manager, an optional node-editor "layers view") are new since this course was recorded but don't invalidate any existing notes, since none of them replace or rename what's already documented here.

**Remaining unverified, low-stakes**: exact current pricing for Colorfront and Tangent Wave 2 wasn't individually re-checked — both are name-checked without load-bearing price claims attached, so the risk of a stale figure there is low.

**Overall assessment after two passes**: the glossary's core conceptual/workflow content (the vast majority of the 161 notes) is sound. The handful of genuinely time-sensitive claims (prices, product names, ACES version) have been spot-checked and corrected where needed. Future Resolve version updates may still drift some of this over time — worth a periodic re-check rather than treating this as permanently verified.
## Phase 4 & 5 — Reopened 2026-08-13

This log's title says "Archived" because Phases 1–3 were genuinely complete and the tracker had served its purpose. It's being reopened now that Phase 4 (Teaching Analogies & Examples) and Phase 5 (Graphics & Video Resources) have been added to the process — see the updated `resolve-glossary-builder` skill, which now points to the shared `course-glossary-builder-core` skill for the full process description. Both new phases were first developed on the Editing 1 glossary and are now being ported back here.

### Session 1 — 2026-08-13

**Batch 1 (18 of 161 notes) got Teaching Analogies & Examples**, prioritized as the highest-frequency/most foundational terms across the semester (by Appears In count and conceptual centrality): Layer Mixer, PowerGrade, ACES, LUT, HSL Qualifier, Versions, Power Windows, Serial Node, Parallel Node, Bypass vs. Disable, Primary Corrections, Secondary Corrections, Parade (Scope), Vectorscope, Waveform (Scope), Still (Gallery), Motion Tracking, White Balance.

**Running total: 18 of 161 notes have Teaching Analogies & Examples.** 143 remain — this is a much larger queue than Editing 1's 80-term glossary, so expect this to take proportionally more sessions/batches (roughly 15–20 terms per session per the skill's own guidance suggests ~8-9 more sessions to cover the rest).

**Phase 5 not started yet on this glossary** — no diagrams or video links added. Good candidate categories worth prioritizing when that work starts: node-tree structure (Serial/Parallel/Layer Mixer — a diagram showing all three side by side would likely be more useful than three separate diagrams, since the comparison IS the teaching point), the ACES pipeline (IDT → working space → ODT), and the color-pipeline/color-space-referents relationship. Video candidates: anything involving live grading demonstration (qualifier building, node-tree construction, scope reading) — official Blackmagic training content should be checked first via web_search.

### Related work this session: Primary Keyboard Shortcuts backfill (separate project, tracked in the `lecture-transcript-to-outline` skill, not this one)

While comparing the Editing 1 and Resolve glossary skills, found that the "Primary Keyboard Shortcuts" table convention (added to every Editing 1 lesson) was never part of either glossary skill to begin with — it lives in `lecture-transcript-to-outline.md`, the skill that actually builds this course's lesson outlines. That skill's template has been updated to include the section going forward. Retroactively backfilled this session: Lesson 04, Lesson 05. Lesson 06 confirmed **not** needing one — it's the course's own dedicated shortcuts-review day with a full exhaustive shortcuts section already in its body. Remaining lessons needing backfill are tracked in that skill file's own Notes & Limitations section, not duplicated here — check there for current status.
### Session 2 — 2026-08-13 (continued)

**Batch 2 (18 of 161 notes) got Teaching Analogies & Examples, completing the entire Color Science & Color Space category (16 terms) plus IDT and ODT from Color Management & ACES**: 32-bit Float, Chroma Subsampling, Chrominance, Color Space, DaVinci YRGB, Dynamic Range, EOTF, Gamma, Gamut, Latitude, Log (Footage), Luminance, P3-DCI, RGB Channels, Rec. 2020, Rec. 709, IDT (Input Device Transform), ODT (Output Device Transform).

**Running total: 36 of 161 notes have Teaching Analogies & Examples.** One full category complete (Color Science & Color Space). 125 remain.
### Session 3 — 2026-08-13 (continued)

**Batch 3 (18 of 161 notes) got Teaching Analogies & Examples, completing Color Management & ACES entirely (11 terms total across this and prior sessions) and nearly completing Primaries, Wheels & Curves (11 of 14 — only Shot-Matching, Temperature, and Tint remain in that category)**: ACEScg vs. ACEScct, Color Space Referents, Color Space Transform (CST), Color-Managed Workflow, Gamma Workflow (Non-Color-Managed), OCIO, Resolve Color Management (RCM), Color Boost, Contrast, Curves (Custom, RGB Curves), Editable Splines, HDR Wheels, Hue-Sat-Lum Curves, Log Wheels, Midtone Detail, Pivot, Primary Wheels (Lift, Gamma, Gain, Offset), Saturation.

**Running total: 54 of 161 notes have Teaching Analogies & Examples.** Two full categories complete (Color Science & Color Space; Color Management & ACES), one nearly complete (Primaries, Wheels & Curves). 107 remain.
### Session 4 — 2026-08-13 (continued)

**Batch 4 (18 of 161 notes) got Teaching Analogies & Examples, completing Primaries/Wheels/Curves, Nodes, and Scopes & Diagnostics entirely, plus 6 of 8 in Keying/Windows/Tracking**: Shot-Matching, Temperature, Tint, Compound Node, Key Output Gain (Node Opacity), Node Sizing vs. Input Sizing, Outside Node, Shared Node, Splitter/Combiner Node, Color Chart Matching Tool, Histogram, Look Matching via Scopes, 3D Keyer, Despill, Dodge and Burn, Garbage Matte, Hero Frame, Inside/Outside Softness.

**Running total: 72 of 161 notes have Teaching Analogies & Examples — just past the halfway mark.** Five full categories complete (Color Science & Color Space, Color Management & ACES, Primaries/Wheels/Curves, Nodes, Scopes & Diagnostics). Keying/Windows/Tracking has only Keyframing (Power Window Keyframes) and Organic Vignette left. 89 terms remain overall.
### Session 5 — 2026-08-13 (continued)

**Batch 5 (18 of 161 notes) got Teaching Analogies & Examples, completing Keying/Windows/Tracking and Raw/Codecs/Containers entirely, plus 5 of 8 in Look-Building & Film Emulation**: Keyframing (Power Window Keyframes), Organic Vignette, Bit Depth, Camera RAW Decode Settings, Codec, Container (Wrapper), Debayer/Debayering, EXR, High Compression Codecs, MediaInfo, ProRes, Raw (Footage), Visually Lossless, Additive vs. Subtractive Color, Bleach Bypass, Cineon (Film Log), Film Print Emulation, Grain.

**Running total: 90 of 161 notes have Teaching Analogies & Examples.** Seven full categories complete (Color Science & Color Space, Color Management & ACES, Primaries/Wheels/Curves, Nodes, Scopes & Diagnostics, Keying/Windows/Tracking, Raw/Codecs/Containers). Look-Building & Film Emulation has only Halation, LMT, and Technicolor left. 71 terms remain overall.
### Session 6 — 2026-08-13 (continued)

**Batch 6 (18 of 161 notes) got Teaching Analogies & Examples, completing Look-Building & Film Emulation, Color Theory & Style, and VFX & Compositing entirely**: Halation, LMT, Technicolor, Analogous, Color Bible, Complementary, DI (Digital Intermediate), High Key/Low Key, Hue, Look (Color Grade), Monochromatic, Triadic, Clone Stamp Technique, Color-to-VFX Workflow, Compound Clip, External Matte, Match Move (Planar Tracking), Sky Replacement.

**Running total: 108 of 161 notes have Teaching Analogies & Examples.** Ten full categories complete. Remaining categories, all untouched: Noise/Repair/OFX Plugins (8), Broadcast/Legalization/HDR (4), Resolve UI & Workflow Habits (7), DIT/Data Management/Production Pipeline (13), Conforming/Roundtripping/Interchange (8), Group Grading & Organization (3), Mastering & Delivery (9), Hardware (4). 53 terms remain overall.
### Session 7 — 2026-08-13 (continued)

**Batch 7 (18 of 161 notes) got Teaching Analogies & Examples, completing Noise/Repair/OFX Plugins, Broadcast/Legalization/HDR, and Resolve UI & Workflow Habits entirely, plus 2 of 13 in DIT/Data Management**: DCTL, Dead Pixel Fixer, Highlight Recovery, Noise Reduction, OFX, OFX Plugin Tour, RGB Mixer, Sharpen/Blur, Broadcast Legalization, HDR Delivery Formats, HDR/WCG, PQ vs. HLG, Append Node Graph, Output Blanking, Printer Lights, Reset Grades, 3-2-1 Backup Rule, Audio Sync.

**Running total: 126 of 161 notes have Teaching Analogies & Examples.** Thirteen full categories complete. Remaining: DIT/Data Management (11 of 13 left), Conforming/Roundtripping (8), Group Grading (3), Mastering & Delivery (9), Hardware (4). 35 terms remain overall.
### Session 8 — 2026-08-13 (continued)

**Batch 8 (19 of 161 notes) got Teaching Analogies & Examples, completing DIT/Data Management and Conforming/Roundtripping/Interchange entirely**: Checksum Verification, DIT (Digital Imaging Technician), Data Burn-In, Frame Judder, Handles, Proxy, Remote Versions, Roll Numbers (A/B/C-Cam), Show LUT, Source Timecode vs. Record Timecode, Use Unique Filenames, AAF, Conforming, DRT, EDL, Locked Cut (Picture Lock), Online/Offline Workflow, Roundtripping, XML.

**Running total: 145 of 161 notes have Teaching Analogies & Examples.** Fifteen full categories complete. Only three remain, all untouched: Group Grading & Organization (3 terms), Mastering & Delivery (9 terms), Hardware (4 terms) — 16 terms total, genuinely close to finishing Phase 4 on this entire glossary. Should be achievable in one more batch.
### Session 9 — 2026-08-13 (continued)

Connection had dropped again after Session 8 reported Batch 8 complete but mid-DRT. Reconnected and, per the Step 0 rule (don't trust the tracker without verifying), checked DRT directly rather than assuming where the drop left things — it already had its Teaching Analogies section, meaning Session 8 actually finished before the connection failed.

Ran a full vault-wide check (`search_query` for glossary notes missing "Teaching Analogies") instead of working strictly off the tracker's stated remaining list, since the tracker's own history shows batches sometimes complete more than get logged before a drop. Result: only 3 of the reported 16 "remaining" terms actually lacked the section — Group Grading & Organization (all 3) and 6 of 9 Mastering & Delivery terms had apparently already been completed in a prior session without the tracker being updated.

**Batch 9 (3 notes) got Teaching Analogies & Examples, completing Hardware and the entire glossary**: Reference Display (Calibrated Monitor), Hardware Scopes, DeckLink/UltraStudio.

**Running total: 161 of 161 notes have Teaching Analogies & Examples. Phase 4 is complete for the Advanced Color Correction glossary**, confirmed via a full sweep, not just the running tally. Phase 5 (Graphics & Video Resources) has not been swept at all yet for this course — that remains open work for a future session, per the Step 0 warning against assuming a phase is done without checking.

#### Phase 5 — Started 2026-08-13

##### Batch 1 — Color Science & Color Space (16 terms reviewed)

Read every note in this category and evaluated against the Phase 5 selection bar ("would this genuinely save a step mid-lesson, or is this just because the section exists"). Most are flat definitions or already well-served by the note's own prose/table (32-bit Float, Chroma Subsampling, Chrominance, DaVinci YRGB, Dynamic Range, EOTF, Gamma, Latitude, Log, Luminance, P3-DCI, RGB Channels, Rec. 709, Rec. 2020, Color Space) — left as-is, no padding added.

One genuine candidate: **Gamut** — added an external link (BenQ's Rec.709/DCI-P3/Rec.2020 explainer, with a CIE chromaticity diagram showing the three gamuts nested inside each other) since this is exactly the kind of spatial "which is bigger" concept a real diagram clarifies better than prose, and Mermaid can't draw an accurate chromaticity triangle.

No Mermaid diagrams added this batch — nothing in this category was structural/sequential enough to earn one (that starts showing up in Color Management & ACES with the IDT→working space→ODT pipeline, and in Nodes/Primaries).

15 of 16 notes in this category end Phase 5 with nothing added — expected, correct outcome per the skill's selection bar, not incomplete work.

##### Batch 2 — Color Management & ACES (11 terms reviewed)

This category is where the pipeline-shaped concepts live, per the skill's own candidate list. Added 3 Mermaid diagrams:
- **ACES** — the IDT → ACES working space → ODT hub-and-spoke pipeline.
- **Color Space Referents (Display-, Camera-, Scene-Referred)** — the three-stage referent chain (camera-referred → scene-referred → display-referred), distinct enough from ACES's technical pipeline to earn its own diagram rather than duplicating it.
- **OCIO (OpenColorIO)** — the Resolve↔After Effects round-trip workflow (strip look → export EXR ACEScg → set AE working space → tag footage → reimport), which is a genuine multi-step process, not just a definition.

Deliberately skipped diagrams on Color Space Transform, Color-Managed Workflow, Gamma Workflow, IDT, LUT, ODT, and Resolve Color Management even though several of them describe pipeline-adjacent ideas — each one either already points to the ACES note's diagram for the shared pipeline shape, or is adequately served by its existing prose/analogy. Avoided the trap of drawing the same IDT→working space→ODT pipeline five different times across five different notes.

**Note flagged for a future batch**: LUT's "must sit at the very end of the node chain" rule is a genuinely spatial concept, but it belongs with the Nodes category (a node-tree diagram showing LUT-last placement), not here — will pick it up when that category comes around.

8 of 11 notes end Phase 5 with nothing added.

**Connection dropped mid-batch, then recovered**: the Obsidian connection failed partway through this session, right after the ACES diagram landed but before the Color Space Referents write confirmed. On reconnect, checked the file directly rather than assuming — the write hadn't landed — and redid it before continuing. Worth flagging as a recurring pattern with this plugin/session: verify the actual file state after any connection drop rather than trusting the last tool call's apparent completion.
##### Batch 3 — Primaries, Wheels & Curves (16 terms reviewed)

Added:
- **Primary Wheels (Lift, Gamma, Gain, Offset)** — a Mermaid diagram showing Lift/Gamma/Gain each targeting a tonal-range zone (shadows/midtones/highlights) and Offset shifting all three, directly matching the skill's own named candidate for this note.
- **Curves (Custom, RGB Curves)** — an external link (PremiumBeat's curves walkthrough) since the S-curve move is a "watching beats reading" case — motion on the curve graph conveys it faster than prose.

Skipped a diagram on Log Wheels and HDR Wheels even though they're wheel-shaped concepts too, since both notes already point back to Primary Wheels for the same zone-targeting shape — no reason to redraw it three times. Skipped Contrast/Pivot's rubber-band-and-fulcrum idea and Temperature/Tint's perpendicular-axis idea — both are already vivid in prose and don't clear the "would a diagram add something the text doesn't" bar on their own.

14 of 16 notes end Phase 5 with nothing added.
##### Batch 4 — Nodes (10 terms reviewed), plus flagged LUT diagram

Added:
- **Layer Mixer** — the side-by-side Serial/Parallel/Layer Mixer comparison diagram flagged back in Session 1's planning notes ("a diagram showing all three side by side would likely be more useful than three separate diagrams, since the comparison IS the teaching point"). Placed on Layer Mixer specifically since it's the most-confused, highest-appearance term of the three; Serial Node and Parallel Node each got a one-line cross-reference back to it instead of a duplicate diagram.
- **Splitter/Combiner Node** — a small split→process→combine flowchart, since the node's whole name describes a spatial operation.
- **LUT** (Color Management & ACES category, flagged in Batch 2) — the node-chain diagram showing grading nodes feeding into a LUT placed last, closing out that earlier flag.

Skipped: Bypass vs. Disable, Compound Node, Key Output Gain, Outside Node, Shared Node — all adequately served by existing analogies, none spatial enough to add real value.

**Deferred, not skipped**: Node Sizing vs. Input Sizing is a strong "watch the tool in motion" candidate (clone-stamp mechanics), but it pairs directly with Clone Stamp Technique in the VFX & Compositing category — holding off so the video search happens once, covering both notes together, rather than duplicating research now.

7 of 10 notes in this category end Phase 5 with nothing added; the other 3 got resources as described above (one of which — LUT — lives in an earlier category and was backfilled here).
##### Batch 5 — Scopes & Diagnostics (6 terms reviewed)

Added one external link on **Waveform (Scope)** — the "would this genuinely save a step" bar clears easily here since scope-reading is fundamentally a "seeing beats reading" skill, matching the skill file's own named candidate ("how to read a Waveform or Vectorscope"). Chose an article covering Waveform, Parade, and Vectorscope together with real scope images rather than three separate video searches, then cross-referenced from **Parade (Scope)** and **Vectorscope** with a one-line pointer back — same reasoning as the Layer Mixer node comparison in Batch 4, one shared resource instead of three redundant ones.

Skipped Histogram (the course explicitly deprioritizes it — no point illustrating a tool it's actively steering students away from), Color Chart Matching Tool, and Look Matching via Scopes (already well-served by its recipe analogy and existing cross-links to Parade/Vectorscope).

3 of 6 notes end Phase 5 with nothing added; the other 3 share one resource.
##### Batch 6 — Keying, Windows & Tracking (12 terms reviewed)

Added one external link — **HSL Qualifier** got Blackmagic's own official Color page overview (qualifier-building is explicitly named in the skill file as a video-worthy category, and the eyedropper-and-refine workflow is genuinely clearer in motion).

Evaluated Power Windows and Motion Tracking closely since both are also named video candidates in the skill, but both already carry strong, specific analogies (the spotlight/paper-cutout before-after for Power Windows, the spotlight-operator-following-a-performer for Motion Tracking) that do the job the searched tutorials would have done — skipped rather than padding with a redundant link.

Everything else in this category (3D Keyer, Despill, Dodge and Burn, Garbage Matte, Hero Frame, Inside/Outside Softness, Keyframing, Organic Vignette, Secondary Corrections) is adequately served by existing prose/analogies — no genuinely spatial or motion-dependent gap left unaddressed.

11 of 12 notes end Phase 5 with nothing added.
##### Batch 7 — Raw, Codecs & Containers (11 terms reviewed)

Added one external link — **Debayer, Debayering** got RED's own official Bayer-sensor explainer, since the mosaic-to-photo reconstruction is genuinely visual (a real 400% mosaic image alongside the debayered result) in a way the existing "assembling a mosaic" analogy gestures at but can't show.

Considered Bit Depth's banding concept closely (a real 8-bit-vs-10-bit gradient comparison is easy to find), but the existing staircase analogy already carries the idea clearly in words — a link would have been a near-duplicate rather than a genuine addition, so skipped per the "don't pad because the section exists" rule.

Everything else in this category (Bit Depth, Camera RAW Decode Settings, Codec, Container, EXR, High Compression Codecs, MediaInfo, ProRes, Raw, Visually Lossless) is definitional/comparative rather than spatial or motion-dependent, and already well-served by its own analogies.

10 of 11 notes end Phase 5 with nothing added.
##### Batch 8 — Look-Building & Film Emulation (8 terms reviewed)

Added:
- **Technicolor (2-Strip, 3-Strip Emulation)** — Wikipedia's Technicolor article, since the real 2-strip vs. 3-strip processes are genuinely visual and well-documented with period photos, without pointing to any specific copyrighted film's stills.
- **Halation** — Analog.Cafe's halation explainer, pairing a physics illustration with real example photos of the reddish glow, for a concrete visual reference to point a DP/director toward mid-conversation.
- **LMT (Look Modification Transform)** — a one-line cross-reference back to the ACES pipeline diagram (Batch 2) rather than a new diagram, since an LMT's location is just "inside that same pipeline, in the working-space stage" — no new shape to draw.

Considered but skipped: Film Print Emulation (Kodak 2383/Fuji 3510) — searched for a genuine before/after comparison, but results were dominated by commercial LUT-seller pages rather than a clean neutral resource, so left as-is rather than linking a product page. Also skipped Additive vs. Subtractive Color — a classic, well-known concept the note's existing "dark room vs. white page" analogy already carries clearly; a search would have just duplicated it.

Bleach Bypass, Cineon, Grain are adequately served by existing analogies and cross-links.

5 of 8 notes end Phase 5 with nothing added.
##### Batch 9 — Color Theory & Style (9 terms reviewed)

Added one shared diagram — **Complementary (Color Scheme)** got a Mermaid diagram comparing the wheel patterns for all four schemes side by side (opposite pair, adjacent neighbors, evenly-spaced triangle, single hue at varied brightness), the same "comparison IS the teaching point" approach used for Layer Mixer (Batch 4) and Waveform/Parade/Vectorscope (Batch 5). **Analogous, Triadic, and Monochromatic** each got a one-line cross-reference back rather than a duplicate diagram.

Everything else in this category (Color Bible, DI, High Key/Low Key, Hue, Look) is conceptual/definitional and already well-served by existing analogies — no genuine diagram or external-link gap.

**Aside, not part of Phase 5 scope**: noticed a broken wikilink — `[[Hue/Sat/Lum Curves]]` (with slashes) appears in both Complementary's and Hue's Related Terms, but the actual note is titled `Hue-Sat-Lum Curves` (with hyphens), so the link doesn't resolve. Leaving as a flagged item for a future link-cleanup pass rather than fixing opportunistically mid-Phase-5.

5 of 9 notes end Phase 5 with nothing added.
##### Batch 10 — VFX & Compositing (6 terms reviewed), plus closing out the Batch 4 deferral

Closed the deferral flagged in Batch 4:
- **Clone Stamp Technique** — a YouTube walkthrough of the source-shape-then-Node-Sizing sequence, since the UI mechanics are genuinely a "watch it in motion" case.
- **Node Sizing vs. Input Sizing** — one-line cross-reference back to Clone Stamp Technique's video rather than a duplicate search, closing the loop from Batch 4.

Added:
- **Color-to-VFX Workflow (Pipeline Order)** — a Mermaid diagram of the raw→primaries→VFX→final-look sequence, matching the skill's pipeline-diagram candidates and directly illustrating the note's own "season the ingredients vs. the finished dish" framing.
- **Sky Replacement** — a Mixing Light tutorial covering the full tracked-replacement workflow (Match Move + external matte + Layer Mixer reroute), which the note itself flags as "the trickiest, most fiddly step in the whole technique" — exactly the kind of motion-dependent mechanic that's clearer watched. **Match Move (Planar Tracking)** got a one-line cross-reference back rather than a second search, since the two notes describe the same workflow from different angles.

Skipped Compound Clip and External Matte (Timeline Matte) — both adequately served by existing analogies, neither spatial/motion-dependent enough to add value.

2 of 6 notes end Phase 5 with nothing added; the other 4 (plus the 2 closed-out deferrals from Batch 4) got resources.
##### Batch 11 — Noise, Repair & OFX Plugins (8 terms reviewed)

Nothing added this batch. Every note here is either an existing-analogy-covered technique (Noise Reduction's stacking-photos comparison, Highlight Recovery's four-method breakdown, Dead Pixel Fixer's retouching comparison, RGB Mixer's cross-fader comparison, Sharpen/Blur's focus/defocus framing) or a reference/definitional note (DCTL, OFX, OFX Plugin Tour). Specifically considered OFX Plugin Tour for an official Blackmagic reference link, since it's explicitly framed as a "browse the directory" note — but the official manual isn't a browsing experience and the note's own survey already serves that function better than any external link would.

8 of 8 notes end Phase 5 with nothing added — a clean, correct null batch rather than a search failure.
##### Batch 12 — Broadcast, Legalization & HDR (4 terms reviewed)

Added one external link — **PQ vs. HLG (HDR Transfer Functions)** got a comparison article showing the actual curve shapes (PQ's fixed absolute mapping vs. HLG's gamma-then-log hybrid), making the note's own "fixed thermostat vs. adaptive recipe" analogy literally visible as two graph lines.

Skipped Broadcast Legalization, HDR/WCG, and HDR Delivery Formats — each already carries a strong, clear analogy (safety-inspection, taller-ladder/bigger-crayon-box, shipping-instructions) that a search wouldn't meaningfully improve on.

3 of 4 notes end Phase 5 with nothing added.
##### Batch 13 — Resolve UI & Workflow Habits (7 terms reviewed)

Nothing added this batch. This category is entirely UI-mechanics and workflow-habit notes (Append Node Graph, Output Blanking, PowerGrade, Printer Lights, Reset Grades, Still, Versions) — each already has a strong "same idea, different craft" analogy (save-as-but-built-in, saved recipe vs. photo of the dish, wiping a whiteboard, matting a picture frame, etc.) doing real teaching work. None describe a genuinely spatial structure or a UI sequence complex enough to earn a diagram, and none are the kind of "watch the tool move" mechanic that justifies a video search over the existing prose.

7 of 7 notes end Phase 5 with nothing added — a clean, correct null batch.
##### Batch 14 — DIT, Data Management & Production Pipeline (13 terms reviewed)

Added one Mermaid diagram — **3-2-1 Backup Rule** got a small tree diagram (original → 3 copies, one path labeled offsite), since the rule's whole structure is spatial (3/2/1 counts of distinct things) and the diagram makes the "three separate failure points" logic visible at a glance.

Everything else in this category (Audio Sync, Checksum Verification, DIT, Data Burn-In, Frame Judder, Handles, Proxy, Remote Versions, Roll Numbers, Show LUT, Source/Record Timecode, Use Unique Filenames) is workflow/procedural rather than spatial, and each already has a solid analogy doing the teaching work — no genuine diagram or video gap found.

12 of 13 notes end Phase 5 with nothing added.
##### Batch 15 — Conforming, Roundtripping & Interchange (8 terms reviewed)

Added two Mermaid diagrams:
- **Online/Offline Workflow** — a linear pipeline diagram (capture → ingest → prelim color → offline edit → picture lock → parallel color/sound/VFX → online → master), since the note explicitly frames itself as "the shared mental map underneath" several other terms — a genuine overview diagram earns its place here.
- **Roundtripping** — a small loop diagram (edit → other software → back), distinct enough from the linear Online/Offline pipeline to warrant its own shape, since the round-trip structure (out and back to the same point) is the actual defining feature of the term.

Everything else (AAF, Conforming, DRT, EDL, Locked Cut, XML) is comparative/definitional across interchange formats and already well-served by existing analogies (moving-truck inventory, printer's manuscript, etc.) — no further diagram or link needed.

6 of 8 notes end Phase 5 with nothing added.
##### Batch 16 — Group Grading & Organization (3 terms reviewed)

Added one Mermaid diagram — **Group Grading (Groups)** got a diagram of the Pre-Clip → Clip → Post-Clip → Timeline order of operations, since this specific sequencing (why exposure-matching sits before the shared group grade) is genuinely structural and easy to get backwards without seeing it laid out.

Flags and Timeline Markers are both well-served by existing analogies (sticky flags on paperwork, a sticky note on the timeline itself) — no further addition needed.

2 of 3 notes end Phase 5 with nothing added.
##### Batch 17 — Mastering & Delivery (9 terms reviewed)

Added two Mermaid diagrams:
- **5.1 Surround (Channel Order, Panning)** — a speaker-layout diagram (front L/C/R, subwoofer, rear L/R with channel numbers), since the odd/even panning rule is genuinely spatial and easy to get backwards without seeing the physical seating chart.
- **Slate (Delivery)** — a sequence diagram of Slate → Black → Two-Pop → Black → Content with their exact timecodes, since this ordering is a real, easy-to-flub structural sequence. **Two-Pop** got a one-line cross-reference back rather than a duplicate diagram.

Everything else (Aspect Ratio, Codec vs. Encoder, DCP, Fairlight, IMF, TRT) is comparative/definitional and already well-served by existing analogies.

7 of 9 notes end Phase 5 with nothing added.
##### Batch 18 — Hardware (4 terms reviewed) — Phase 5 complete

Added one external link — **Control Surface (Grading Panel)** got Blackmagic's own official panels comparison page (Micro/Mini/Advanced side by side with photos), since the note already names specific real products and prices — seeing what they actually look like next to each other genuinely helps place the class's own Micro Panel in context.

Skipped DeckLink/UltraStudio, Hardware Scopes, and Reference Display — verified each directly (this category was already fully done for Phase 4's Teaching Analogies in an earlier session, so nothing here was assumed from the index). All three already carry strong, specific analogies (switchboard operator, multimeter, tuned reference speaker / bathroom scale) doing real teaching work, and Reference Display in particular is already dense with concrete named products and prices — a link would be decorative rather than additive.

3 of 4 notes end Phase 5 with nothing added.

---

**Phase 5 is now complete across the entire Advanced Color Correction glossary — all 18 categories, 161 terms, swept.** Final tally: 13 Mermaid diagrams added (several shared across multiple related notes via cross-reference rather than duplicated), 14 external links added (a mix of official Blackmagic/manufacturer pages and independent tutorials/explainers, several also shared via cross-reference), and the rest of the 161 notes correctly ended with nothing added — verified per-note against the skill's selection bar rather than assumed. Two categories (Color Theory & Style, and part of Hardware) turned out to already be complete from earlier, untracked session work, discovered by direct verification rather than trusting the tracker's prior "remaining" counts — consistent with the pattern flagged back in Session 9's Phase 4 wrap-up.

Both phases of the DaVinci Resolve glossary project (Phase 4: Teaching Analogies & Examples, Phase 5: Graphics & Video Resources) are complete.
