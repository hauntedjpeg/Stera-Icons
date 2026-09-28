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
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <h3 className="st-body-sm-strong text-text-subtle">{title}</h3>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={`Copy ${title}`}
                onClick={() => onCopy(copyText, copyId)}
              />
            }
          >
            {isCopied ? <SiCheckCircleFill /> : <SiCopy />}
          </TooltipTrigger>
          <TooltipContent>{isCopied ? 'Copied' : 'Copy'}</TooltipContent>
        </Tooltip>
      </div>
      <pre className="overflow-x-auto rounded-xl border border-border bg-surface-subtle p-3">
        <code className="font-mono text-xs">{children}</code>
      </pre>
    </div>
  );
}
