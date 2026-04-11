import { notFound } from "next/navigation";
import { getIconByName } from "@/lib/icons";
import { IconDetailContent } from "@/components/icon-detail";
import { IconModal } from "@/components/icon-modal";

export default async function InterceptedIconPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const icon = getIconByName(name);
  if (!icon) notFound();

  return (
    <IconModal>
      <IconDetailContent icon={icon} />
    </IconModal>
  );
}
