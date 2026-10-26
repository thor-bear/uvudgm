---
course: Advanced Color Correction
tags:
  - course/advanced-color-correction
  - resolve/color
  - resolve/keybinds
  - reference/shortcuts
  - student-handout
type: review-sheet
---
# DaVinci Resolve — Color Shortcuts
## Quiz Review Sheet

> Mac shortcuts are listed first. On Windows: Command → Control, Option → Alt.

---

## Node Tree

*Building and managing the node structure is the backbone of every grade.*

| Key | Function |
|-----|----------|
| `Option + S` | Add Serial Node |
| `Shift + S` | Add Serial Node Before Current |
| `Option + L` | Add Layer Node |
| `Option + P` | Add Parallel Node |
| `Command + C` | Copy Node |
| `Command + V` | Paste Node |
| `Delete` / `Backspace` | Delete Selected Node(s) |
| *Click + Drag* | Marquee Select (select multiple nodes at once) |

---

## Grade Toggles

*Ways to compare your grade against the source, or isolate what you're working on.*

| Key | Function |
|-----|----------|
| `Shift + D` | Bypass Grade (preview toggle, non-destructive) |
| `Command + D` | Disable Selected Node |
| `Option + D` | Disable All Nodes |
| `Shift + H` | Highlight (Solo) Node On/Off |

---

## Versions

*Non-destructive alternates of a grade, stacked on the same clip.*

| Key | Function |
|-----|----------|
| `Command + Y` | New Version |
| `Command + B` | Previous Version |
| `Command + N` | Next Version |
| *Double-click under thumbnail* | Show Version Number (in timeline) |

---

## Playback & Navigation

*Moving through the timeline and reviewing stills.*

| Key | Function |
|-----|----------|
| `Command + W` | Play/Disable Selected Still |
| `↓` | Next Clip |
| `↑` | Previous Clip |
| `→` | Move Forward One Frame |
| `←` | Move Backward One Frame |
| `Home` | Timeline Start |
| `End` | Timeline End |
| `I` | Set Inpoint |
| `O` | Set Outpoint |
| `Option + X` | Clear In/Out |

---

## Tracking & Applying Grades

*Carrying a window or a look from one place to another.*

| Key | Function |
|-----|----------|
| `Command + T` | Track Forward |
| `Option + T` | Track Reverse |
| *Middle-click on a still* | Apply grade from still to current clip |
| *Middle-click on a timeline thumbnail* | Apply grade from one clip to another |

---

## Mouse Techniques

*Not keyboard shortcuts, but grouped in with them.*

| Action | Function |
|--------|----------|
| Middle-click + drag on video | Drag video window around |
| Scroll wheel | Zoom in/out of video |

---

## System

| Key | Function |
|-----|----------|
| `Command + Z` | Undo |
| `Command + Shift + Z` | Redo |
| `Command + S` | Save |
| `Command + F` | Fullscreen |

---

## Bonus (Not Quiz Material): Printer Lights

*A numeric-keypad alternative to the panel/wheels for global offset adjustments — named after old-school photochemical film-printing terminology.*

**Enable:** `Option + Command + \`` (tilde key)

| Adjustment | Increase | Decrease |
|-----|-----|-----|
| Exposure | `+` (number pad) | `Enter` (number pad) |
| Red | `7` | `4` |
| Green | `8` | `5` |
| Blue | `9` | `6` |
| Cyan | `1` | `-` |
| Magenta | `2` | `0` |
| Yellow | `3` | `.` |

---

## Tips for the Quiz

> [!tip] Serial vs. Parallel vs. Layer
> **Serial** nodes run one after another — each sees the result of the one before it. **Parallel** nodes all grade the same original image independently, then combine. **Layer** nodes composite like layers in Photoshop. If a question asks "which node type lets you grade two effects independently before combining them," that's Parallel or Layer, not Serial.

> [!tip] Disable vs. Bypass — know the difference
> **Bypass Grade** (`Shift+D`) is a quick global on/off for the whole grade on a clip. **Disable** (`Command+D` for one node, `Option+D` for all) turns off specific nodes in the tree while leaving the rest active. Bypass is coarse; Disable is surgical.

> [!tip] Versions stack, they don't overwrite
> `Command+Y` always creates a new version rather than replacing the current one — you can cycle back through every version you've made on a clip with `Command+B` / `Command+N`. Nothing is lost by trying an alternate look.

## PDF for student use here:
![[DaVinci_Resolve_Color_Shortcuts_Review_Sheet.pdf]]
