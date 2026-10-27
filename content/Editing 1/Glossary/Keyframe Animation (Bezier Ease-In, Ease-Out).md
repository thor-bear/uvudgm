---
aliases:
  - Bezier Ease-In/Ease-Out
tags:
  - glossary/editing-1
  - glossary/premiere
---
# Keyframe Animation (Bezier Ease-In, Ease-Out)

## Definition
Animating a property (position, scale, opacity, etc.) by setting different values at different points in time — Premiere interpolates between them automatically. A Bezier curve applied to a keyframe softens the transition into and out of motion, so a move accelerates smoothly rather than starting and stopping abruptly.

## Teaching Analogies & Examples
- **A car pulling away from a stoplight vs. a train hitting top speed instantly**: linear keyframes are the train — constant speed the whole way, which reads as robotic. Bezier ease-in/ease-out is the car — it accelerates gradually, cruises, then eases to a stop, which reads as natural.
## Related Terms
[[Essential Graphics (Graphics Properties)]], [[Track and Blur]]

## Further Resources
```mermaid
flowchart LR
    subgraph Linear["Linear keyframe (constant speed)"]
    A1((Start)) -->|steady speed| B1((End))
    end
    subgraph Bezier["Bezier ease-in/ease-out"]
    A2((Start)) -.slow start.-> C2((Ramp up)) -->|cruise speed| D2((Slow down)) -.slow end.-> B2((End))
    end
```

#glossary/editing-1
