---
"stera-icons": minor
---

Rename the `device-*` icons (old names keep working as deprecated aliases), add 22 new icons and refine 241 existing icons.

**Renamed icons**

The `device-` prefix is dropped from the four device icons. The old names still work as deprecated aliases and will be removed in 9.0.0.

| Old name | New name | Old exports | New exports |
|----------|----------|-------------|-------------|
| `device-desktop` | `monitor` | `DeviceDesktop`, `DeviceDesktopIcon`, `SiDeviceDesktop` | `Monitor`, `MonitorIcon`, `SiMonitor` |
| `device-laptop` | `laptop` | `DeviceLaptop`, `DeviceLaptopIcon`, `SiDeviceLaptop` | `Laptop`, `LaptopIcon`, `SiLaptop` |
| `device-phone` | `smartphone` | `DevicePhone`, `DevicePhoneIcon`, `SiDevicePhone` | `Smartphone`, `SmartphoneIcon`, `SiSmartphone` |
| `device-tablet` | `tablet` | `DeviceTablet`, `DeviceTabletIcon`, `SiDeviceTablet` | `Tablet`, `TabletIcon`, `SiTablet` |

**Migration:** replace each old name with the new one before 9.0.0. This applies to every variant export (for example `DeviceLaptopBoldDuotone` → `LaptopBoldDuotone`), to per-icon import paths (`stera-icons/icons/DeviceLaptop` → `stera-icons/icons/Laptop`) and to `DynamicIcon` names (`name="device-laptop"` → `name="laptop"`). Tags are unchanged.

Two things change right away: `iconNames`, `dynamicIconImports` and `icons.meta.json` list only the new names, and a component's `displayName` is the new name.

**Deprecated aliases for renamed icons**

Renamed icons now keep their old names for a grace period:

- Old exports are re-exported from every entry point and marked `@deprecated` in the types, with the replacement and removal version in the JSDoc.
- `DynamicIcon` accepts the old kebab-case name and logs a one-time warning outside production.

**New icons**

Add 22 new icons (all 6 variants each):

- Food and drink: apple, avocado, cake, carrot, cheese, cherry, citrus, egg, hamburger, martini, pepper, pizza, popcorn, popsicle
- Maps: map-pin-area, map-pin-area-circle, map-pin-x
- Git: git-diff, git-diff-square
- Other: camera-plus, hard-drive, user-square

**Refined icons**

Refine 241 existing icons (801 variants) in a broad consistency pass, including the align-\*, chevron-full-\*, flow-\*, gauge-\*, mail-\*, message-\*, send-\*, sort-\*, speaker-\*, user-\* and scan-\* families. `monitor` also carries refined artwork compared to `device-desktop`.
