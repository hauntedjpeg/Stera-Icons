import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiAsteriskAlt } from "stera-icons/icons/AsteriskAlt"
import { SearchInput } from "@/components/search-input"
import { getAllIcons } from "@/lib/icons"
import { Suspense } from "react"

export function Navbar() {
  const icons = getAllIcons();

  return (
    <nav className="sticky top-0 z-50">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">

        <div className="flex gap-2">
          <Button nativeButton={false} render={<a href="/" />}>
            <SiAsteriskAlt data-icon="inline-start" />Stera Icons
          </Button>
        </div>

        <Suspense>
          <SearchInput totalIcons={icons.length} />
        </Suspense>

        <div className="flex gap-2">
            <Button nativeButton={false} render={<Link href="/docs" />}>
              Docs
            </Button>

            <Button nativeButton={false} render={<a href="https://github.com/hauntedjpeg/Stera-Icons" />}>
              GitHub
            </Button>

            <Button nativeButton={false} render={<a href="https://www.figma.com/community/file/1548871823641702097/stera-icons-8-1-0" />}>
              Figma
            </Button>
        </div>

      </div>
    </nav>
  );
}
