'use client';

import { useState } from 'react';
import type { IconData } from '@/lib/types';
import { IconDetail } from '@/components/icon-detail';
import { useIconVariant } from '@/hooks/useIconVariant';
import { Drawer, DrawerPopup } from '@/components/ui/drawer';

interface IconDetailDrawerProps {
  icon: IconData | null;
  onClose: () => void;
  onTagClick: (tag: string) => void;
}

export function IconDetailDrawer({ icon, onClose, onTagClick }: IconDetailDrawerProps) {
  // Keep showing the last icon while the drawer animates out
  const [lastIcon, setLastIcon] = useState(icon);
  if (icon && icon !== lastIcon) setLastIcon(icon);
  const shown = icon ?? lastIcon;
  const { key: gridVariant } = useIconVariant();

  return (
    <Drawer
      side="right"
      open={icon !== null}
      onOpenChange={(open) => { if (!open) onClose(); }}
    >
      {/* IconDetail renders the DrawerHeader (with the close button) and DrawerContent */}
      <DrawerPopup showCloseButton={false} className="w-[min(90vw,28rem)] bg-surface-subtle rounded-[30px]">
        {/* Keyed by icon so the selected variant resets to the grid's when a different icon is opened */}
        {shown && (
          <IconDetail
            key={shown.kebabName}
            icon={shown}
            variant="drawer"
            initialVariant={gridVariant}
            onTagClick={onTagClick}
          />
        )}
      </DrawerPopup>
    </Drawer>
  );
}
