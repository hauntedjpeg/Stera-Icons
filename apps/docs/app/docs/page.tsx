import type { Metadata } from "next";
import { DocsContent } from "@/components/docs-content";

export const metadata: Metadata = {
  title: "Documentation - Stera Icons",
  description: "Installation, usage, and API reference for Stera Icons.",
};

export default function DocsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
      <h1 className="st-display-sm text-text mb-8">Documentation</h1>
      <DocsContent />
    </main>
  );
}
