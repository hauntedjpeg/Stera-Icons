"use client"

import { useMemo, useCallback } from "react"
import { useSearchParams } from "next/navigation"
import type { IconData } from "@/lib/types"
import { IconGrid } from "@/components/icon-grid"
import { IconDetailDrawer } from "@/components/icon-detail-drawer"

interface IconExplorerProps {
  icons: IconData[];
}

export function IconExplorer({ icons }: IconExplorerProps) {
  const searchParams = useSearchParams();

  // The URL query param is the source of truth for the open drawer
  const iconParam = searchParams.get("icon");
  const selectedIcon = useMemo(
    () => (iconParam ? icons.find((i) => i.kebabName === iconParam) ?? null : null),
    [icons, iconParam]
  );

  // history.replaceState updates useSearchParams without a server round trip,
  // so the drawer opens and closes immediately
  const handleIconClick = useCallback((icon: IconData) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("icon", icon.kebabName);
    window.history.replaceState(null, "", `?${params.toString()}`);
  }, [searchParams]);

  const handleDrawerClose = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("icon");
    const qs = params.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }, [searchParams]);

  return (
    <>
      <IconGrid icons={icons} onIconClick={handleIconClick} />
      <IconDetailDrawer icon={selectedIcon} onClose={handleDrawerClose} />
    </>
  );
}
