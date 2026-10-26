---
course: Advanced Color Correction
type: study-guide
source: Compiled from student research (worksheet originally distributed as a gift, credited to "Torben Claus")
tags:
  - course/advanced-color-correction
  - study-guide
  - color-terms
---

# Color Terms — Study Guide

> Reorganized from the original student-researched worksheet into logical groupings for review. Same definitions, restructured for studying rather than alphabetical lookup.

## 1. Color Space Fundamentals

- **[[Color Space]]** — A digital representation/organization of colors.
- **[[Gamut]]** — The spectrum of colors available within a color space. The "width" of a color space.
- **[[Gamma]]** — Defines the luminance (brightness) and contrast curve of a color space. The "height" of a color space.

> **Study tip:** Gamut = width (how many colors). Gamma = height (how bright/contrasty). Two different axes of the same color space.

## 2. Color Space Standards

- **[[Rec. 709]]** — The standard television color space (and the one used in this class).
- **[[P3-DCI]]** — Theatrical color space. SDR (Standard Dynamic Range). Wider color range (gamut) than Rec.709. Used on iMac 5K displays.
- **[[Rec. 2020]]** — Paired with Gamma ST.2084 (aka PQ). HDR (High Dynamic Range). A newer color space, used by Netflix, Amazon, 4K Ultra HD Blu-ray, and rare high-end theaters.

## 3. Color Management

- **[[RGB Channels]]** — Red + Green + Blue can form all colors. Most color spaces use RGB.
- **[[DaVinci YRGB|YRGB (DaVinci YRGB)]]** — DaVinci Resolve's working color space. (A working color space is the color space in which you actually grade.)
- **[[32-bit Float|DaVinci 32-bit Float]]** — DaVinci's internal color math. Lets you push/pull an image without losing detail — non-destructive grading.
- **[[LUT|Lookup Table (LUT)]]** — A mathematical table telling software how to convert input color values into output color values.
- **[[ACES]] (Academy Color Encoding System)** — The Academy's "standardized" color management workflow. Includes specifications for color management across the entire post-production pipeline.
- **[[Resolve Color Management (RCM)]]** — Resolve's built-in system for converting footage from its source color space into a unified working color space, then into a chosen output color space, in a controlled and consistent way.

## 4. Image Data Fundamentals

- **[[Luminance]]** — The "light" information.
- **[[Chrominance]]** — The "color" information.
- **[[Chroma Subsampling]]**
  - **[[Chroma Subsampling|4:4:4:4]]** — Every pixel has its own unique chrominance information (no sharing). The final "4" represents transparency/alpha.
  - **[[Chroma Subsampling|4:2:2]]** — Every two pixels share chrominance information.
  - **[[Chroma Subsampling|4:2:0]]** — Chrominance is 1/4 the luminance. (4K video at 4:2:0 effectively has HD-level chrominance.)
- **[[Bit Depth]]** — The levels/shades available from light to dark in each channel. ("Bigger number better.")
- **[[Dynamic Range]]** — The total range from the darkest shadow to the brightest highlight a camera can capture in a single shot.
- **[[Latitude]]** — How flexible you can be with exposure without significantly compromising the finished picture. The "malleability" of an image. Related to dynamic range but not the same thing — often confused with it. Varies depending on codec, bitrate, and chroma subsampling.

## 5. Grading Fundamentals

- **[[Primary Corrections]]** — Broad, image-wide adjustments to exposure, contrast, color balance, and saturation that establish a neutral, balanced baseline for a shot.
- **[[Secondary Corrections]]** — Selective color adjustments that isolate particular colors, luminance ranges, or areas of the frame to refine or stylize them independently from the rest of the image.
- **[[Raw (Footage)|RAW Footage]] vs. [[Log (Footage)|Log Footage]]** — RAW lets you manually change some camera settings (white balance, ISO) *after* shooting. Log footage does not. However, Log footage takes up less space and has fantastic latitude.

### Primary Controls in DaVinci Resolve
| Control | Affects |
|---|---|
| [[Primary Wheels (Lift, Gamma, Gain, Offset)\|Lift]] | Shadows |
| [[Primary Wheels (Lift, Gamma, Gain, Offset)\|Gamma]] | Midtones |
| [[Primary Wheels (Lift, Gamma, Gain, Offset)\|Gain]] | Highlights |
| [[Primary Wheels (Lift, Gamma, Gain, Offset)\|Offset]] | Overall |

## 6. Curves

- **[[Curves (Custom, RGB Curves)|YRGB (Custom) Curves]]**
  - **Ganged** — RGB curves adjusted together.
  - **Unganged** — RGB curves adjusted individually.
- **[[Hue-Sat-Lum Curves|Hue vs. Hue]]** — Shift the hue of specific colors while leaving other colors unchanged.
- **[[Hue-Sat-Lum Curves|Hue vs. Sat]]** — Selectively control the saturation of specific colors.
- **[[Hue-Sat-Lum Curves|Hue vs. Lum]]** — Adjust the brightness of specific colors without affecting others.
- **[[Hue-Sat-Lum Curves|Lum vs. Sat]]** — Adjust saturation based on brightness levels.
- **[[Hue-Sat-Lum Curves|Sat vs. Sat]]** — Adjust saturation based on (existing) saturation levels.
- **[[Hue]]** — A specific chrominance value.

## 7. Other Grading Tools

- **Contrast & Pivot**
  - **[[Contrast]]** — How far apart the shadows and highlights are on the brightness scale.
  - **[[Pivot]]** — The midpoint around which contrast adjustments are applied.
- **[[Saturation]]** — The intensity of a hue.
- **[[Temperature|Color Temperature]]** — Adjusts white balance from cold to warm.
- **[[Tint]]** — Adjusts the overall tint between green and magenta.
- **[[Midtone Detail]]** — Increases contrast in midtone regions; increases perceived sharpness.
- **[[Color Boost]]** — Increases saturation in low-saturation regions specifically.

## 8. Scopes

- **[[Parade (Scope)|Parade]]** — The luminance & balance of the R, G, and B channels, left to right.
- **[[Vectorscope]]** — Measures hue and saturation.
- **[[Waveform (Scope)|Waveform]]** — Measures both luminance and RGB of an image, left to right.
- **[[Histogram]]** — Displays the relative number of pixels at each level of brightness (luminance) or color channel — used to analyze exposure, contrast, and color balance.

## 9. Node Types

- **[[Serial Node]]** — Basic node for regular adjustments.
- **[[Layer Mixer|Layer Mixer Node]]** — Bypasses the node(s) above.
- **[[Parallel Node]]** — Blends adjustments made in this node with the node(s) above.
- **[[Outside Node]]** — Reverses the selection of a mask or qualifier, so corrections affect everything *outside* the isolated area instead of inside it (great for selecting everything outside a power window).
- **[[Splitter-Combiner Node|Splitter/Combiner Nodes]]** — Separates the RGB channels into their own nodes for independent adjustment.
- **[[Shared Node]]** — A node usable across multiple clips in a project — changes reflect everywhere it's used.
- **[[Compound Node]]** — A single node containing multiple nodes inside it, treating a group of corrections as one unit. Great for cleaning up node trees.

## 10. Keying & Selection

- **[[HSL Qualifier|HSL Key]]** — Selects a specific range of hue, saturation, and/or luminance values (a range of colors).
- **[[Luma Key]]** — Isolates parts of an image according to luminance (brightness) level.
- **[[Power Windows]]** — Adjustable masks that isolate specific regions of the frame, allowing localized color corrections independent of the rest of the image.
- **[[Motion Tracking]]** — Automatically analyzes movement in a shot so masks/corrections stay aligned with a moving subject over time. Can be used with:
  - Power Windows (faces, hands, objects)
  - Magic Mask subjects (people, faces, features)
  - Effects (blurs, beauty, relighting)
  - Surface motion (planar movement in the frame)

## 11. Workflow & Assets

- **[[Handles]]** — Frames that extend beyond an edit point.
- **Stills & PowerGrades**
  - **[[Still (Gallery)|Stills]]** — A reference still image compared against your grade.
  - **[[PowerGrade|PowerGrades]]** — A Still that also contains your node information. File format: `.drx`.
- **Stills Gallery vs. PowerGrade Gallery**
  - **[[Still (Gallery)|Stills Gallery]]** — Stores still frames/grades saved locally within a specific project.
  - **[[PowerGrade|PowerGrade Gallery]]** — Stores reusable grades available across all projects and databases on that system (referencing `.drx` files).

## Quick Self-Check

Try answering before checking the definitions above.

1. What's the difference between gamut and gamma?
2. Why might 4K footage shot in 4:2:0 chroma subsampling actually only have HD-level color detail?
3. What's the difference between dynamic range and latitude?
4. A Layer Mixer node and a Parallel node both combine with the node above — what's the key difference in how they do it?
5. What's the actual difference between a Still and a PowerGrade?
6. Why does Log footage have better latitude than a directly Rec.709-baked export, even though it takes up less space than RAW?
7. Name the four Primary Controls in Resolve and what tonal range each one affects.
8. What does an Outside node actually do, and when would you reach for one?
9. Hue vs. Sat and Sat vs. Sat sound similar — what's the actual distinction?
10. What's stored in the PowerGrade Gallery vs. the Stills Gallery, and why does that distinction matter for reusing a grade across projects?
