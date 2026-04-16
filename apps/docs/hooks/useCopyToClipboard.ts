'use client';

import { useState, useCallback } from 'react';

export function useCopyToClipboard(resetDelay: number = 2000) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = useCallback(async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), resetDelay);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }, [resetDelay]);

  return { copied, copyToClipboard };
}
