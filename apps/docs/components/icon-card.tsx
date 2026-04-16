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
      className="group flex flex-col items-center gap-2 border border-border p-4 transition-colors hover:bg-bg-surface-secondary hover:border-border-secondary cursor-pointer"
    >
      <IconRenderer
        iconName={icon.kebabName}
        className="h-6 w-6"
      />
      <span className="st-body-sm text-text-secondary text-center truncate w-full">
        {icon.name}
      </span>
    </button>
  );
}
