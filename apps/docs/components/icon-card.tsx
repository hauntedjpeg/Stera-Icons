import Link from "next/link";
import { IconRenderer } from "@/components/icon-renderer";

interface IconCardProps {
  name: string;
  kebabName: string;
}

export function IconCard({ name, kebabName }: IconCardProps) {
  return (
    <Link
      href={`/icons/${kebabName}`}
      className="group flex flex-col items-center gap-2 border border-border p-4 transition-colors hover:bg-bg-surface-secondary hover:border-border-secondary"
    >
      <IconRenderer
        iconName={kebabName}
        className="h-6 w-6"
      />
      <span className="st-body-sm text-text-secondary text-center truncate w-full">
        {name}
      </span>
    </Link>
  );
}
