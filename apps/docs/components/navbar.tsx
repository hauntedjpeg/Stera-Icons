import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HomeLink } from "@/components/home-link"
import { NAV_LINKS } from "@/components/nav-links"
import { NavMenu } from "@/components/nav-menu"
import { SearchInput } from "@/components/search-input"
import { VariantMenu } from "@/components/variant-menu"
import { Suspense } from "react"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50">
      <div className="mx-auto flex items-center justify-between p-4 sm:px-4">

        <div className="flex gap-2">
          <HomeLink />
        </div>

        <div className="flex items-center gap-2">
          <SearchInput />
          <Suspense>
            <VariantMenu />
          </Suspense>
        </div>

        <div className="flex bg-surface-muted rounded-full p-1 max-sm:hidden">
          {NAV_LINKS.map(({ label, href, icon: Icon, internal }) => (
            <Button
              key={href}
              variant="subtle"
              size="icon"
              aria-label={label}
              nativeButton={false}
              render={internal ? <Link href={href} /> : <a href={href} />}
            >
              <Icon />
            </Button>
          ))}
        </div>

        <div className="sm:hidden">
          <NavMenu />
        </div>

      </div>
    </nav>
  );
}
