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
    <InputGroup className="w-48 sm:w-64 bg-surface-muted hover:bg-surface-muted-hover border-none rounded-full shadow-none has-[[data-slot=input-group-control]:focus-visible]:ring-0 has-[[data-slot=input-group-control]:focus-visible]:bg-surface-muted-hover">
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
