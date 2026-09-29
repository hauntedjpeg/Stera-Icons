"use client";

import { createContext, useContext, useState } from "react";

const SearchQueryContext = createContext("");
const SetSearchQueryContext = createContext<((query: string) => void) | null>(null);

// The search query is React state rather than a URL param, so typing never
// triggers a navigation. The setter has its own context so components that
// only set the query don't re-render on every keystroke
export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("");

  return (
    <SetSearchQueryContext value={setQuery}>
      <SearchQueryContext value={query}>{children}</SearchQueryContext>
    </SetSearchQueryContext>
  );
}

export function useSearchQuery() {
  return useContext(SearchQueryContext);
}

export function useSetSearchQuery() {
  const setQuery = useContext(SetSearchQueryContext);
  if (!setQuery) {
    throw new Error("useSetSearchQuery must be used within a SearchProvider");
  }
  return setQuery;
}
