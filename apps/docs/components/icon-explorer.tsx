"use client"

import { useState, useEffect, useCallback } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import type { IconData } from "@/lib/types"
import { IconGrid } from "@/components/icon-grid"
import { IconDetailModal } from "@/components/icon-detail-modal"

interface IconExplorerProps {
  icons: IconData[];
}

export function IconExplorer({ icons }: IconExplorerProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedIcon, setSelectedIcon] = useState<IconData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Restore modal from URL query param on mount
  useEffect(() => {
    const iconParam = searchParams.get("icon");
    if (iconParam) {
      const icon = icons.find((i) => i.kebabName === iconParam);
      if (icon) {
        setSelectedIcon(icon);
        setIsModalOpen(true);
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleIconClick = useCallback((icon: IconData) => {
    setSelectedIcon(icon);
    setIsModalOpen(true);
    const params = new URLSearchParams(searchParams.toString());
    params.set("icon", icon.kebabName);
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [searchParams, router]);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setSelectedIcon(null);
    const params = new URLSearchParams(searchParams.toString());
    params.delete("icon");
    const qs = params.toString();
    router.replace(qs ? `?${qs}` : "/", { scroll: false });
  }, [searchParams, router]);

  return (
    <>
      <IconGrid icons={icons} onIconClick={handleIconClick} />
      <IconDetailModal
        icon={selectedIcon}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
}
