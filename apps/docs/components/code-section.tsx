'use client';

import { SiCopy, SiCheckCircleFill } from 'stera-icons';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export interface CodeSectionProps {
  title: string;
  copyText: string;
  copyId: string;
  copied: string | null;
  onCopy: (text: string, id: string) => void;
  children: React.ReactNode;
}

export function CodeSection({ title, copyText, copyId, copied, onCopy, children }: CodeSectionProps) {
  const isCopied = copied === copyId;

  return (
    <div className="flex flex-col overflow-hidden rounded-[20] bg-surface-subtle">
      <div className="flex items-center justify-between border-b border-border py-1.5 pr-2 pl-4">
        <h3 className="font-mono text-xs text-text-subtle">{title}</h3>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={`Copy ${title}`}
                className="text-text-subtle"
                onClick={() => onCopy(copyText, copyId)}
              />
            }
          >
            {isCopied ? <SiCheckCircleFill /> : <SiCopy />}
          </TooltipTrigger>
          <TooltipContent>{isCopied ? 'Copied' : 'Copy'}</TooltipContent>
        </Tooltip>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-xs">{children}</code>
      </pre>
    </div>
  );
}
