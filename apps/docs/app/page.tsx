import { Suspense } from "react";
import { getAllIcons } from "@/lib/icons";
import { IconGrid } from "@/components/icon-grid";

export default function Home() {
  const icons = getAllIcons();

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
        <IconGrid icons={icons} />
      </Suspense>
    </main>
  );
}
