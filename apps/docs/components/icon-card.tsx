import Link from "next/link";

interface IconCardProps {
  name: string;
  svg: string;
}

export function IconCard({ name, svg }: IconCardProps) {
  return (
    <Link
      href={`/icons/${name}`}
      className="group flex flex-col items-center gap-2 rounded-lg border border-border p-4 transition-colors hover:bg-bg-surface-secondary hover:border-border-secondary"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 120px" }}
    >
      <div
        className="flex h-10 w-10 items-center justify-center text-text [&>svg]:h-6 [&>svg]:w-6"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <span className="st-body-sm text-text-secondary text-center truncate w-full">
        {name}
      </span>
    </Link>
  );
}
