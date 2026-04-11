"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative group">
      <pre className="rounded-lg border border-border bg-bg-surface-secondary p-4 overflow-x-auto">
        <code className="st-body-sm font-mono text-text" data-language={language}>
          {code}
        </code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 rounded-md border border-border bg-bg-surface px-2 py-1 st-body-sm text-text-secondary opacity-0 group-hover:opacity-100 hover:bg-bg-surface-secondary transition-all"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
