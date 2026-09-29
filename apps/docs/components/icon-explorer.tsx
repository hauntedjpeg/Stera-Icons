"use client"

import { useMemo, useCallback } from "react"
import { useSearchParams } from "next/navigation"
import type { IconEntry } from "@/lib/types"
import { IconGrid } from "@/components/icon-grid"
import { IconDetailDrawer } from "@/components/icon-detail-drawer"
import { useSetSearchQuery } from "@/components/search-provider"

interface IconExplorerProps {
  icons: IconEntry[];
}

// Reads the URL when called rather than from useSearchParams, so the handlers
// below keep a stable identity and don't re-render the memoized icon cards
function setIconParam(kebabName: string | null) {
  const params = new URLSearchParams(window.location.search);
  if (kebabName) {
    params.set("icon", kebabName);
  } else {
    params.delete("icon");
  }
  const qs = params.toString();
  window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
}

export function IconExplorer({ icons }: IconExplorerProps) {
  const searchParams = useSearchParams();
  const setQuery = useSetSearchQuery();

  // The URL query param is the source of truth for the open drawer
  const iconParam = searchParams.get("icon");
  const selectedIcon = useMemo(
    () => (iconParam ? icons.find((i) => i.kebabName === iconParam) ?? null : null),
    [icons, iconParam]
  );

  // history.replaceState updates useSearchParams without a server round trip,
  // so the drawer opens and closes immediately
  const handleIconClick = useCallback((icon: IconEntry) => {
    setIconParam(icon.kebabName);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setIconParam(null);
  }, []);

  // Closes the drawer and searches for the tag
  const handleTagClick = useCallback((tag: string) => {
    setQuery(tag);
    setIconParam(null);
    window.scrollTo({ top: 0 });
  }, [setQuery]);

  return (
    <>
      <IconGrid icons={icons} onIconClick={handleIconClick} />
      <IconDetailDrawer
        icon={selectedIcon}
        onClose={handleDrawerClose}
        onTagClick={handleTagClick}
      />
    </>
  );
}
