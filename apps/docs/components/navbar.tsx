import Link from "next/link"
import { SiAsteriskAlt } from "stera-icons/icons/AsteriskAlt"
import { SearchInput } from "@/components/search-input"
import { getAllIcons } from "@/lib/icons"
import { Suspense } from "react"

const navLinkClass =
  "inline-flex h-9 shrink-0 items-center gap-2 rounded-full border border-zinc-100 bg-white px-3 text-sm font-medium whitespace-nowrap text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"

export function Navbar() {
  const icons = getAllIcons();

  return (
    <nav className="sticky top-0 z-50">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">

        <div className="flex gap-2">
          <Link href="/" className={navLinkClass}>
            <SiAsteriskAlt className="size-4" />Stera Icons
          </Link>
        </div>

        <Suspense>
          <SearchInput totalIcons={icons.length} />
        </Suspense>

        <div className="flex gap-2">
            <Link href="/docs" className={navLinkClass}>
              Docs
            </Link>

            <a href="https://github.com/hauntedjpeg/Stera-Icons" className={navLinkClass}>
              GitHub
            </a>

            <a href="https://www.figma.com/community/file/1548871823641702097/stera-icons-8-1-0" className={navLinkClass}>
              Figma
            </a>
        </div>

      </div>
    </nav>
  );
}
