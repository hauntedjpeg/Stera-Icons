"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerPopup,
  DrawerTitle,
} from "@/components/ui/drawer";

export function DocsSheet({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  return (
    <Drawer
      side="right"
      open={open}
      onOpenChange={setOpen}
      // Leave the route only after the exit animation has finished
      onOpenChangeComplete={(isOpen) => { if (!isOpen) router.back(); }}
    >
      <DrawerPopup className="w-[min(90vw,42rem)]">
        <DrawerHeader>
          <DrawerTitle>Documentation</DrawerTitle>
        </DrawerHeader>
        <DrawerContent className="px-4 pb-8">
          {children}
        </DrawerContent>
      </DrawerPopup>
    </Drawer>
  );
}
