"use client"

import { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import type { IconData } from "@/lib/types"
import { IconCard } from "@/components/icon-card"
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
        <div className="flex w-full flex-col items-center justify-center gap-4 p-6 text-center text-balance">
          <div className="flex max-w-sm flex-col items-center gap-2">
            <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
              <SiSquareDashed className="size-6" />
            </div>
            <div className="text-sm font-medium">No icons found</div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Try adjusting your search term or request an icon by creating an issue on GitHub.</p>
          </div>
          <a
            href="https://github.com/hauntedjpeg/Stera-Icons/issues/new?template=request.md"
            className="inline-flex h-9 items-center rounded-full bg-zinc-900 px-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Request an icon
          </a>
        </div>
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
