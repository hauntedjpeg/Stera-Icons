import { Suspense } from "react";
import { getAllIconData } from "@/lib/icons";
import { IconExplorer } from "@/components/icon-explorer";

export default function Home() {
  const icons = getAllIconData();

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h1 className="st-display-md text-text">Stera Icons</h1>
        <p className="st-body-lg text-text-secondary mt-2">
          {icons.length} hand-crafted icons in 6 variants. Click any icon for
          details and usage.
        </p>
      </div>
      <Suspense>
        <IconExplorer icons={icons} />
      </Suspense>
    </main>
  );
}
