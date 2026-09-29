import { Suspense } from "react";
import { getAllIconEntries } from "@/lib/icons";
import { IconExplorer } from "@/components/icon-explorer";

export default function Home() {
  const icons = getAllIconEntries();

  return (
    <main className="w-full flex-1 px-4 py-4 sm:px-4">
      <Suspense>
        <IconExplorer icons={icons} />
      </Suspense>
    </main>
  );
}
