"use client";

import { useState, useMemo } from "react";
import { IconCard } from "@/components/icon-card";

interface IconEntry {
  name: string;
  tags: string[];
  defaultSvg: string;
}

interface IconGridProps {
  icons: IconEntry[];
}

export function IconGrid({ icons }: IconGridProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return icons;
    const q = query.toLowerCase();
    return icons.filter(
      (icon) =>
        icon.name.includes(q) || icon.tags.some((tag) => tag.includes(q))
    );
  }, [icons, query]);

  return (
    <div className="flex flex-col gap-6">
      <div className="sticky top-14 z-40 bg-bg-surface/80 backdrop-blur-sm py-4 -mx-4 px-4 sm:-mx-6 sm:px-6">
        <input
          type="text"
          placeholder={`Search ${icons.length} icons...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md rounded-lg border border-border bg-bg-surface px-4 py-2 st-body-md text-text placeholder:text-text-tertiary outline-none focus:border-border-secondary focus:ring-1 focus:ring-ring transition-colors"
        />
      </div>
      {filtered.length === 0 ? (
        <p className="st-body-md text-text-secondary py-12 text-center">
          No icons found for &ldquo;{query}&rdquo;
        </p>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
          {filtered.map((icon) => (
            <IconCard key={icon.name} name={icon.name} svg={icon.defaultSvg} />
          ))}
        </div>
      )}
    </div>
  );
}
