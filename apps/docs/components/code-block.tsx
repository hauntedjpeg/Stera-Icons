"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
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
      <pre className="rounded-lg border border-border bg-bg-surface-secondary p-4 overflow-x-auto">
        <code className="st-body-sm font-mono text-text" data-language={language}>
          {code}
        </code>
      </pre>
      <Button size="icon-sm" variant="ghost" onClick={handleCopy} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100">
        {copied ? <SiCheckCircleFill /> : <SiCopy />}
      </Button>
    </div>
  );
}
