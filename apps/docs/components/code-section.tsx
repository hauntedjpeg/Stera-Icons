'use client';

import { SiCopy, SiCheckCircleFill } from 'stera-icons';

export interface CodeSectionProps {
  title: string;
  copyText: string;
  copyId: string;
  copied: string | null;
  onCopy: (text: string, id: string) => void;
  children: React.ReactNode;
}

export function CodeSection({ title, copyText, copyId, copied, onCopy, children }: CodeSectionProps) {
  return (
    <div>
      <div className="flex items-center justify-between pl-6 pr-4 py-2">
        <h3 className="text-xs font-medium text-zinc-900 dark:text-zinc-400">{title}</h3>
        <button
          onClick={() => onCopy(copyText, copyId)}
          className="flex items-center gap-1 px-2 py-2 text-xs text-zinc-900 dark:text-zinc-50 hover:bg-black/4 dark:hover:bg-black/32 rounded-lg transition-colors"
        >
          {copied === copyId ? <SiCheckCircleFill className="w-4 h-4" /> : <SiCopy className="w-4 h-4" />}
        </button>
      </div>
      <pre className="flex px-4">
        <code className="w-full text-sm bg-zinc-900 dark:bg-zinc-950 p-3 overflow-y-scroll rounded-xl">{children}</code>
      </pre>
    </div>
  );
}
