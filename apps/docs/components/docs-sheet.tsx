"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SiX } from "stera-icons";

export function DocsSheet({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") router.back();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [router]);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/10 backdrop-blur-xs" onClick={() => router.back()} />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="docs-sheet-title"
        className="relative flex h-full w-3/4 flex-col gap-4 overflow-y-auto border-l border-zinc-100 bg-white text-sm shadow-lg sm:max-w-2xl dark:border-zinc-700 dark:bg-zinc-900"
      >
        <div className="flex flex-col gap-1.5 p-4">
          <h2 id="docs-sheet-title" className="font-medium text-zinc-900 dark:text-zinc-100">Documentation</h2>
        </div>
        <div className="px-4 pb-8">
          {children}
        </div>
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute top-4 right-4 inline-flex size-8 items-center justify-center rounded-full transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          <SiX className="size-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
}
