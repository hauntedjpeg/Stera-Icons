"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

export function SearchInput({ totalIcons }: { totalIcons?: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams.toString());
      if (e.target.value) {
        params.set("q", e.target.value);
      } else {
        params.delete("q");
      }
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  return (
    <input
      type="text"
      placeholder={totalIcons ? `Search ${totalIcons} icons...` : "Search icons..."}
      value={query}
      onChange={handleChange}
      className="w-48 sm:w-64 rounded-lg border border-border bg-bg-surface px-3 py-1.5 st-body-sm text-text placeholder:text-text-tertiary outline-none focus:border-border-secondary focus:ring-1 focus:ring-ring transition-colors"
    />
  );
}
