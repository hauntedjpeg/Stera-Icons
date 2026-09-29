import type { IconData } from "@/lib/types";
import { IconRenderer } from "@/components/icon-renderer";

interface IconCardProps {
  icon: IconData;
  onIconClick: (icon: IconData) => void;
}

export function IconCard({ icon, onIconClick }: IconCardProps) {
  return (
    <button
      onClick={() => onIconClick(icon)}
      className="group flex flex-col justify-center items-center gap-2 p-2 aspect-square rounded-2xl transition-colors hover:bg-surface-subtle cursor-pointer text-text-subtle"
    >
      <IconRenderer
        iconName={icon.kebabName}
        className="h-6 w-6"
      />
    </button>
  );
}
