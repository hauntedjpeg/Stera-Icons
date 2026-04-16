import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllIconNames, getIconData, toPascalCase } from "@/lib/icons";
import { IconDetailPage } from "@/components/icon-detail-page";

export function generateStaticParams() {
  return getAllIconNames().map((name) => ({ name }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  const pascal = toPascalCase(name);
  return {
    title: `${pascal} - Stera Icons`,
    description: `${pascal} icon in 6 variants — Regular, Bold, Fill, and Duotone.`,
  };
}

export default async function IconPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const icon = getIconData(name);
  if (!icon) notFound();

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6">
      <Link
        href="/"
        className="st-body-md text-text-secondary hover:text-text transition-colors"
      >
        &larr; All icons
      </Link>
      <div className="mt-6">
        <IconDetailPage icon={icon} />
      </div>
    </main>
  );
}
