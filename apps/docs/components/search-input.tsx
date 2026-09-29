"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SiSearch } from "stera-icons";

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
    <InputGroup className="w-48 sm:w-64 bg-surface-muted hover:bg-surface-muted-hover border-none rounded-full">
      <InputGroupAddon>
        <SiSearch />
      </InputGroupAddon>
      <InputGroupInput
        type="text"
        size="lg"
        aria-label="Search icons"
        placeholder={totalIcons ? `Search ${totalIcons} icons...` : "Search icons..."}
        value={query}
        onChange={handleChange}
      />
    </InputGroup>
  );
}
