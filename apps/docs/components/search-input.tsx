"use client";

import { useRef } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useSearchQuery, useSetSearchQuery } from "@/components/search-provider";
import { SiSearch, SiX } from "stera-icons";

export function SearchInput() {
  const query = useSearchQuery();
  const setQuery = useSetSearchQuery();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <InputGroup className="w-48 sm:w-64 rounded-full border-none shadow-none bg-surface/60 bg-origin-border bg-linear-to-b from-alpha-1 to-alpha-2 inset-ring inset-ring-alpha-1 inset-shadow-2xs inset-shadow-alpha-3 backdrop-blur-sm text-text transition-colors hover:from-alpha-1 hover:to-alpha-3 has-[[data-slot=input-group-control]:focus-visible]:ring-0 has-[[data-slot=input-group-control]:focus-visible]:from-alpha-1 has-[[data-slot=input-group-control]:focus-visible]:to-alpha-3">
      <InputGroupAddon>
        <SiSearch />
      </InputGroupAddon>
      <InputGroupInput
        ref={inputRef}
        type="text"
        size="lg"
        aria-label="Search icons"
        placeholder="Search icons"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <InputGroupAddon align="inline-end" className="pr-3!">
          <InputGroupButton
            variant="ghost"
            size="icon-sm"
            className="rounded-full hover:bg-surface-muted-hover"
            aria-label="Clear search"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
          >
            <SiX />
          </InputGroupButton>
        </InputGroupAddon>
      )}
    </InputGroup>
  );
}
