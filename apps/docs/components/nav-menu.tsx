"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLinkItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NAV_LINKS } from "@/components/nav-links";
import { SiMenuSimple } from "stera-icons";

const itemClassName =
  "items-center rounded-2xl px-3.5 py-2.5 st-body-lg text-text-subtle focus:bg-surface-muted-hover [&_svg:not([class*='size-'])]:size-5";

// Collapses the navbar links into a menu below the sm breakpoint
export function NavMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="ghost" size="icon-lg" aria-label="Menu" />}
      >
        <SiMenuSimple />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="min-w-52 rounded-3xl bg-surface-muted p-1.5 shadow-none ring-0"
      >
        {NAV_LINKS.map(({ label, href, icon: Icon, internal }) => (
          <DropdownMenuLinkItem
            key={href}
            // The navbar stays mounted across client-side navigation
            closeOnClick
            className={itemClassName}
            render={internal ? <Link href={href} /> : <a href={href} />}
          >
            <Icon />
            {label}
          </DropdownMenuLinkItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
