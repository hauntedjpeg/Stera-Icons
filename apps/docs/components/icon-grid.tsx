"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { IconCard } from "@/components/icon-card";

interface IconEntry {
  name: string;
  kebabName: string;
  tags: string[];
}

interface IconGridProps {
  icons: IconEntry[];
}

export function IconGrid({ icons }: IconGridProps) {
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
        <p className="st-body-md text-text-secondary py-12 text-center">
          No icons found for &ldquo;{query}&rdquo;
        </p>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
          {filtered.map((icon) => (
            <IconCard key={icon.kebabName} name={icon.name} kebabName={icon.kebabName} />
          ))}
        </div>
      )}
    </div>
  );
}
