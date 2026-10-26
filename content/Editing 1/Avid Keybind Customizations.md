---
course: Editing 1
class-code: DCPR 1610
tags:
  - course/editing-1
  - avid/media-composer
  - avid/keybinds
  - reference/settings
type: reference
source: Tenured faculty class settings (Avid_Class_Settings.pdf)
---
# Avid Keybind Customizations - DCPR 1610

## Bin Settings

| Setting | `Value` |
|---------|---------|
| Auto Save Interval | `3 minutes` |
| Inactivity Period | `7 seconds` |
| Force Auto Save | `7 minutes` |
| Default View | `Frame View` |
| Frame Border Color | `Use Border Color Based on Object Type` |
| Icons | `Show Icons` |

---

## Composer Settings

### Window Tab
| Setting | `Value` |
|---------|---------|
| Data Display at Top | `Always Display Two Rows of Data` |
| Button Display at Bottom | `Two Rows` |

### Move Tab
| Setting | `Value` |
|---------|---------|
| Track Selectors | `Ignore Track Selectors` |

---

## Timeline Settings

| Setting | `Value` |
|---------|---------|
| Display during segment drag | `Four-Square` |
| Waveforms | `Display Waveforms — On` |
| Timeline Edit | `Turn Off "Select Filler with Segment Tools"` |

---

## Keyboard Mappings

> [!tip] How to apply
> Open **Tools > Command Palette**, select **'Button to Button' Reassignment**, find the function in its tab, and drag it to the keyboard. For menu-mapped shortcuts, use **'Menu to Button' Reassignment** instead.

---

### Button to Button — Move Tab
*Command Palette: Cmd+3 to open*

| Function | `Shortcut` |
|----------|------------|
| Go to Previous Event | `↑ Up Arrow` *(no modifier)* |
| Go to Next Event | `↓ Down Arrow` *(no modifier)* |
| Go to Previous Marker | `Shift + N` |
| Go to Next Marker | `Shift + ,` |

---

### Button to Button — Edit Tab

| Function | `Shortcut` | Note |
|----------|------------|------|
| Top (head of clip) | `Shift + Q` | ⚠️ Overwrites existing mapping |
| Tail (end of clip) | `Shift + W` | ⚠️ Overwrites existing mapping |
| Add Edit | `Shift + C` | |

---

### Button to Button — Trim Tab

| Function | `Shortcut` |
|----------|------------|
| Extend | `Shift + =` |

---

### Button to Button — Markers Tab

| Function | `Shortcut` |
|----------|------------|
| Add Red Marker | `Shift + M` |

---

### Button to Button — Other Tab

| Function | `Shortcut` |
|----------|------------|
| Match Frame | `Shift + H` |

---

### Button to Button — Workspaces Tab

| Function | `Shortcut` | Note |
|----------|------------|------|
| W1 (Personal Edit Workspace) | `Shift + 1` | Assign your own Edit workspace to W1 first |

---

### Menu to Button Mappings
*Use 'Menu to Button' Reassignment mode in the Command Palette*

| Menu Path | `Shortcut` | Note |
|-----------|------------|------|
| File > Input > Source Browser | `Shift + I` | |
| File > Output > Export to File | `Shift + O` | |
| Tools > Effects Editor | `Shift + 7` | |
| Tools > Markers | `Shift + 8` | |
| Clip > AutoSync | `Shift + G` | ⚠️ Overwrites existing mapping |

---

## Interface Customizations
*Drag from the Command Palette directly onto the interface buttons*

| Function | Palette Tab | `Placed At` |
|----------|-------------|-------------|
| To the Left / To the Right | Edit Tab | Under the Splice-In and Overwrite buttons in the **Source window** |
| Tool Palette | Other Tab | Replacing the Gang button under the **Record window** |
| Toggle Source/Record | Other Tab | Open space under the **Source window** |

---

> [!warning] Overwrites to watch for
> Three mappings will silently cover existing shortcuts: **Shift+Q** (Top), **Shift+W** (Tail), and **Shift+G** (AutoSync). Note what was there before if you need to recover the originals.
