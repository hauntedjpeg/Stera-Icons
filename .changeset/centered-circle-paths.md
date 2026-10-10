---
"stera-icons": patch
---

Fix circular icons being drawn slightly off-centre. The optimizer was converting curves to arcs and rounding the arc radius, which shifted full circles by about 0.3 units on the 24-unit grid (for example `circle`, `target`, `baseball` and the `arrow-circle-*` icons). Curves are now kept as curves, so icons match the source artwork. Path data is slightly larger as a result.
