"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSetSearchQuery } from "@/components/search-provider";
import { SiAsteriskAlt } from "stera-icons";

// Returns to the full icon grid, so it also clears the search
export function HomeLink() {
  const setQuery = useSetSearchQuery();

  return (
    <Button
      variant="subtle"
      size="lg"
      nativeButton={false}
      render={<Link href="/" onClick={() => setQuery("")} />}
    >
      <SiAsteriskAlt data-icon="inline-start" />Stera Icons
    </Button>
  );
}
