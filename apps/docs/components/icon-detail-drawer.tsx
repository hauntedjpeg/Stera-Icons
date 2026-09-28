'use client';

import { useState } from 'react';
import type { IconData } from '@/lib/types';
import { IconDetail } from '@/components/icon-detail';
import { Drawer, DrawerContent, DrawerPopup } from '@/components/ui/drawer';

interface IconDetailDrawerProps {
  icon: IconData | null;
  onClose: () => void;
}

export function IconDetailDrawer({ icon, onClose }: IconDetailDrawerProps) {
  // Keep showing the last icon while the drawer animates out
  const [lastIcon, setLastIcon] = useState(icon);
  if (icon && icon !== lastIcon) setLastIcon(icon);
  const shown = icon ?? lastIcon;

  return (
    <Drawer
      side="right"
      open={icon !== null}
      onOpenChange={(open) => { if (!open) onClose(); }}
    >
      <DrawerPopup className="w-[min(90vw,28rem)]">
        <DrawerContent className="p-4">
          {/* Keyed by icon so weight/duotone reset when a different icon is opened */}
          {shown && <IconDetail key={shown.kebabName} icon={shown} variant="drawer" />}
        </DrawerContent>
      </DrawerPopup>
    </Drawer>
  );
}
