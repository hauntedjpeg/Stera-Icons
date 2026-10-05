"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerPopup,
  DrawerTitle,
} from "@/components/ui/drawer";
import { SiX } from "stera-icons";

export function DocsSheet({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  // Mount closed and open on the next frame: a drawer that mounts already open
  // skips its enter animation
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setOpen(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <Drawer
      side="right"
      open={open}
      onOpenChange={setOpen}
      // Leave the route only after the exit animation has finished
      onOpenChangeComplete={(isOpen) => { if (!isOpen) router.back(); }}
    >
      <DrawerPopup showCloseButton={false} className="w-[min(90vw,42rem)] rounded-[30px]">
        <DrawerHeader className="flex-row items-center gap-4 pl-5 pr-2.5 py-2.5">
          <DrawerTitle className="flex-1">Documentation</DrawerTitle>
          <div className="flex items-center text-text-subtle bg-surface-muted rounded-full p-1">
            <DrawerClose render={<Button variant="ghost" size="icon" aria-label="Close" />}>
              <SiX />
            </DrawerClose>
          </div>
        </DrawerHeader>
        <DrawerContent className="px-5 pt-4 pb-5">
          {children}
        </DrawerContent>
      </DrawerPopup>
    </Drawer>
  );
}
