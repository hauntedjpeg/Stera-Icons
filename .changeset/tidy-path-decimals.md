---
"stera-icons": patch
---

Update build tooling to the latest versions. The newer SVGO rounds stray floating-point values in 12 icon paths (for example `6.099999999999999` becomes `6.1`). Icons render the same.
