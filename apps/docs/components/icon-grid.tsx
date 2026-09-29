"use client"

import { memo, useDeferredValue, useMemo } from "react"
import type { IconEntry } from "@/lib/types"
import type { IconWeight } from "@/utils/iconCodeSnippets"
import { IconCard } from "@/components/icon-card"
import { useIconVariant } from "@/hooks/useIconVariant"
import { useSearchQuery } from "@/components/search-provider"
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
  icons: IconEntry[];
  onIconClick: (icon: IconEntry) => void;
}

export function IconGrid({ icons, onIconClick }: IconGridProps) {
  // Deferred so rendering the results never blocks typing in the search input
  const query = useDeferredValue(useSearchQuery());
  const { weight, duotone } = useIconVariant();

  // Lowercased once, rather than on every keystroke
  const searchable = useMemo(
    () =>
      icons.map((icon) => ({
        icon,
        text: [icon.kebabName, ...icon.tags].join("\n").toLowerCase(),
      })),
    [icons]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return icons;
    return searchable
      .filter(({ text }) => text.includes(q))
      .map(({ icon }) => icon);
  }, [icons, searchable, query]);

  return (
    <IconGridResults
      icons={filtered}
      weight={weight}
      duotone={duotone}
      onIconClick={onIconClick}
    />
  );
}

interface IconGridResultsProps extends IconGridProps {
  weight: IconWeight;
  duotone: boolean;
}

// Memoized so a keystroke skips the grid until the deferred query catches up
const IconGridResults = memo(function IconGridResults({
  icons,
  weight,
  duotone,
  onIconClick,
}: IconGridResultsProps) {
  return (
    <div className="flex flex-col gap-6">
      {icons.length === 0 ? (
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
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
          {icons.map((icon) => (
            <IconCard
              key={icon.kebabName}
              icon={icon}
              weight={weight}
              duotone={duotone}
              onIconClick={onIconClick}
            />
          ))}
        </div>
      )}
    </div>
  );
});
