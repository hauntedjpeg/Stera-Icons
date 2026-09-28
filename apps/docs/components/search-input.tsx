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
      className="w-48 sm:w-64 rounded-lg border border-zinc-100 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1.5 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none focus:border-zinc-300 dark:focus:border-zinc-600 focus:ring-1 focus:ring-black/15 dark:focus:ring-white/30 transition-colors"
    />
  );
}
