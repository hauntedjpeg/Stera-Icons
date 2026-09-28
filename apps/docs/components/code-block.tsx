"use client"

import { useState } from "react"
import { SiCheckCircleFill, SiCopy } from "stera-icons"

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
      <pre className="rounded-lg border border-zinc-100 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-4 overflow-x-auto">
        <code className="text-xs font-mono text-zinc-900 dark:text-zinc-100" data-language={language}>
          {code}
        </code>
      </pre>
      <button
        type="button"
        aria-label="Copy code"
        onClick={handleCopy}
        className="absolute top-2 right-2 inline-flex size-8 items-center justify-center rounded-full opacity-0 transition-all group-hover:opacity-100 focus-visible:opacity-100 hover:bg-white dark:hover:bg-zinc-900"
      >
        {copied ? <SiCheckCircleFill className="size-4" /> : <SiCopy className="size-4" />}
      </button>
    </div>
  );
}
