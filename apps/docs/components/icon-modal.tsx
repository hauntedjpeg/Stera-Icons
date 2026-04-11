"use client";

import { useRouter } from "next/navigation";
import { useEffect, useCallback, useRef } from "react";

export function IconModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [close]);

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) close();
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl mx-4 my-8 sm:my-16 rounded-xl border border-border bg-bg-surface shadow-2xl">
        <button
          onClick={close}
          className="sticky top-4 float-right mr-4 mt-4 z-10 flex h-8 w-8 items-center justify-center rounded-md border border-border bg-bg-surface hover:bg-bg-surface-secondary transition-colors text-text-secondary hover:text-text"
          aria-label="Close"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>
        <div className="p-6 sm:p-8">{children}</div>
      </div>
    </div>
  );
}
