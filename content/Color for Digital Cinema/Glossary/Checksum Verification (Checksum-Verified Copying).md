---
aliases:
  - ShotPut Pro
  - Hedge
  - Silverstack
  - Clone Tool
tags:
  - glossary/davinci-resolve
---
# Checksum Verification (Checksum-Verified Copying)

## Definition
Verifying copied media byte-for-byte, not just by filename/size — mandatory, not just recommended, in this course's data-management workflow. Finder/Explorer drag-and-drop does not verify integrity the way dedicated tools do.

## How It Actually Works
*(AI-added technical context, not from the instructor — flagging per note-taking convention)*
A checksum is the output of a **hash function**: an algorithm that reads a file's raw bytes and deterministically produces a short, fixed-length string (the "hash" or "digest"). Change even a single bit of the file and the output hash changes completely — so comparing the hash before and after a copy is a much stronger guarantee than comparing filename or file size, both of which could match on a corrupted file.

Common algorithms you'll see in these tools:
- **MD5** (128-bit) — the default in ShotPut Pro, Hedge, and Resolve's Clone Tool. It's no longer trusted for security (its collisions can be deliberately engineered), but for catching *accidental* corruption during a copy — the actual use case here — it's effectively airtight: the odds of random corruption producing a matching MD5 are vanishingly small.
- **xxHash** — much faster than MD5, offered by some fast-copy tools as a speed optimization; not cryptographic, but that's fine since it only needs to catch accidental changes, not resist a deliberate attacker.
- **SHA-1 / SHA-256** — cryptographic hashes, slower to compute; occasionally offered as a "high assurance" option but overkill for routine DIT work.

The practical upshot for on-set workflow: the hash is computed once from the source file, then recomputed from the destination copy. If the two hashes match, every bit made the trip intact — not just "a file of the right name and size showed up."

## In Practice
Named tools: **ShotPut Pro**, **Hedge**, **Silverstack** (third-party), or Resolve's built-in **Clone Tool** (free, found on the Media page) as a no-cost fallback — select source, destination, and checksum type (MD5 is default and generally sufficient). Works alongside the [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/3-2-1 Backup Rule]] as the other half of trustworthy on-set data management.

## Teaching Analogies & Examples
- **A digital fingerprint compared before and after a move**: a checksum is a unique code calculated from a file's exact contents — copy the file, recalculate the checksum, and if it matches the original, you know every single bit transferred correctly, not just that a file of the right size showed up. A silent, invisible corruption during a transfer would produce a mismatched fingerprint even though the file looks fine at a glance.
## Related Terms
[[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/3-2-1 Backup Rule]], [[Atlas/Notes/Student Notes/Color for Digital Cinema/Glossary/DIT (Digital Imaging Technician)]]

## Further Resources


## Appears In


[[Lesson 07 - Pre-Production and DIT Workflow]]
