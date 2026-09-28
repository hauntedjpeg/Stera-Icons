"use client"

import { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import type { IconData } from "@/lib/types"
import { IconCard } from "@/components/icon-card"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent
} from "@/components/ui/empty"
import { SiSquareDashed } from "stera-icons"

interface IconGridProps {
  icons: IconData[];
  onIconClick: (icon: IconData) => void;
}

export function IconGrid({ icons, onIconClick }: IconGridProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const filtered = useMemo(() => {
    if (!query) return icons;
    const q = query.toLowerCase();
    return icons.filter(
      (icon) =>
        icon.kebabName.includes(q) || icon.tags.some((tag) => tag.includes(q))
    );
  }, [icons, query]);

  return (
    <div className="flex flex-col gap-6">
      {filtered.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <SiSquareDashed />
            </EmptyMedia>
            <EmptyTitle>No icons found</EmptyTitle>
            <EmptyDescription>Try adjusting your search term or request an icon by creating an issue on GitHub.</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="brand" nativeButton={false} render={<a href="https://github.com/hauntedjpeg/Stera-Icons/issues/new?template=request.md" />}>Request an icon</Button>
          </EmptyContent>
        </Empty>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
          {filtered.map((icon) => (
            <IconCard key={icon.kebabName} icon={icon} onIconClick={onIconClick} />
          ))}
        </div>
      )}
    </div>
  );
}
