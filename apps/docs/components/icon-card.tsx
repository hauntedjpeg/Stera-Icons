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
      className="group flex flex-col items-center gap-2 border border-zinc-100 dark:border-zinc-700 p-4 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 cursor-pointer"
    >
      <IconRenderer
        iconName={icon.kebabName}
        className="h-6 w-6"
      />
      <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center truncate w-full">
        {icon.name}
      </span>
    </button>
  );
}
