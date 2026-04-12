"use client";

import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function DocsSheet({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Sheet defaultOpen onOpenChange={(open) => { if (!open) router.back(); }}>
      <SheetContent side="right" className="sm:max-w-2xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Documentation</SheetTitle>
        </SheetHeader>
        <div className="px-4 pb-8">
          {children}
        </div>
      </SheetContent>
    </Sheet>
  );
}
