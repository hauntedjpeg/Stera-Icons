"use client";

import { useIconVariant } from "@/hooks/useIconVariant";
import type { IconWeight } from "@/utils/iconCodeSnippets";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SiLayoutGridCircle } from "stera-icons/icons/LayoutGridCircle";

const WEIGHTS: { value: IconWeight; label: string }[] = [
  { value: "regular", label: "Regular" },
  { value: "bold", label: "Bold" },
  { value: "fill", label: "Fill" },
];

const itemClassName =
  "items-center rounded-2xl py-2.5 pr-10 pl-3.5 st-body-lg text-text-subtle focus:bg-surface-muted-hover [&_[data-slot$='-indicator']]:right-3.5 [&_svg:not([class*='size-'])]:size-5";

export function VariantMenu() {
  const { weight, duotone, setVariant } = useIconVariant();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="subtle" size="icon-lg" aria-label="Icon variant" />}
      >
        <SiLayoutGridCircle weight={weight} duotone={duotone} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="min-w-52 rounded-3xl bg-surface-muted p-1.5 shadow-none ring-0"
      >
        <DropdownMenuRadioGroup
          value={weight}
          onValueChange={(value) => setVariant(value as IconWeight, duotone)}
        >
          {WEIGHTS.map(({ value, label }) => (
            <DropdownMenuRadioItem key={value} value={value} className={itemClassName}>
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator className="-mx-1.5 my-1.5 bg-border-strong" />
        <DropdownMenuCheckboxItem
          checked={duotone}
          onCheckedChange={(checked) => setVariant(weight, checked)}
          className={itemClassName}
        >
          Duotone
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
