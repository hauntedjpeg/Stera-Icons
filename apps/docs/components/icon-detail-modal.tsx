'use client';

import { useState, useEffect } from 'react';
import { SiX, SiCopy, SiDownload, SiCheckCircleFill } from 'stera-icons';
import type { IconData } from '@/lib/types';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { getSVGData, downloadSVG, getSVGFilename } from '@/utils/svgExport';
import { getIconNames, generateCodeSnippets, type IconWeight } from '@/utils/iconCodeSnippets';
import { IconRenderer } from '@/components/icon-renderer';
import { WeightSelector } from '@/components/weight-selector';
import { DuotoneToggle } from '@/components/duotone-toggle';
import { CodeSection } from '@/components/code-section';

interface IconDetailModalProps {
  icon: IconData | null;
  isOpen: boolean;
  onClose: () => void;
  weight?: IconWeight;
  duotone?: boolean;
}

export function IconDetailModal({
  icon,
  isOpen,
  onClose,
  weight: initialWeight = 'regular',
  duotone: initialDuotone = false
}: IconDetailModalProps) {
  const { copied, copyToClipboard } = useCopyToClipboard();
  const [iconSize] = useState(64);
  const [currentWeight, setCurrentWeight] = useState<IconWeight>(initialWeight);
  const [currentDuotone, setCurrentDuotone] = useState<boolean>(initialDuotone);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setCurrentWeight(initialWeight);
    setCurrentDuotone(initialDuotone);
  }, [initialWeight, initialDuotone]);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!icon || !isOpen) return null;

  const names = getIconNames(icon, currentWeight, currentDuotone);
  const snippets = generateCodeSnippets(names, currentWeight, currentDuotone, iconSize);
  const { baseName, fileName, prettyName, displayVariantName, prefixedName, suffixedName } = names;
  const { recommendedCode, aliasesCode, dynamicVariantsCode, subpathImportCode } = snippets;

  const handleGetSVGData = () => getSVGData('#icon-preview svg', prettyName, currentWeight, currentDuotone);
  const handleDownloadSVG = () => {
    const svgData = handleGetSVGData();
    const filename = getSVGFilename(icon.name, currentWeight, currentDuotone);
    downloadSVG(svgData, filename);
  };

  return (
    <div className="fixed flex justify-end p-4 inset-0 z-50">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal */}
      <div className="relative flex flex-col w-md overflow-y-scroll dark:shadow-si-dark shadow-si-light backdrop-blur-sm rounded-3xl bg-black/3 dark:bg-white/4">
        {/* Header */}
        <div className="flex-shrink-0 sticky top-0 left-0 right-0 z-10 rounded-t-3xl">
          <div className="flex items-center pl-6 pr-4 pt-4 pb-8 gap-3">
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-50 flex-1">
              {prettyName}
            </h2>
            <div className="flex items-center p-1 gap-1 -mt-1 rounded-full bg-white dark:bg-black shadow-si-light dark:shadow-si-dark">
              <button
                onClick={() => copyToClipboard(handleGetSVGData(), 'svg')}
                className="p-2 hover:bg-black/6 dark:hover:bg-white/12 rounded-full transition-colors text-zinc-900 dark:text-zinc-50"
                title="Copy SVG"
              >
                {copied === 'svg' ? <SiCheckCircleFill className="w-4 h-4" /> : <SiCopy className="w-4 h-4" />}
              </button>
              <button
                onClick={handleDownloadSVG}
                className="p-2 hover:bg-black/6 dark:hover:bg-white/12 rounded-full transition-colors text-zinc-900 dark:text-zinc-50"
                title="Download SVG"
              >
                <SiDownload className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-black/6 dark:hover:bg-white/12 rounded-full transition-colors text-zinc-900 dark:text-zinc-50"
              >
                <SiX className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 gap-4 pb-6 rounded-b-3xl">
          {/* Icon Preview */}
          <div className="pt-5 pb-12">
            <div
              id="icon-preview"
              className="flex items-center justify-center text-zinc-900 dark:text-zinc-200"
            >
              <IconRenderer
                iconName={icon.kebabName}
                weight={currentWeight}
                duotone={currentDuotone}
                className="h-16 w-16"
              />
            </div>
          </div>

          {/* Weight and Duotone Controls */}
          <div className="flex gap-3 px-4 pb-4">
            <WeightSelector
              selectedWeight={currentWeight}
              onWeightChange={setCurrentWeight}
            />
            <div className="text-zinc-900 dark:text-zinc-950 -mx-8">
              <svg width="56" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56 40C49.5735 40 43.8553 36.9684 40.1963 32.2578C32.7264 22.628 23.2921 22.6207 15.8193 32.2363C12.1611 36.9589 6.43608 39.9999 0 40V0C6.4358 9.66972e-05 12.1611 3.04042 15.8193 7.7627C23.2923 17.3791 32.7262 17.3723 40.1963 7.74219C43.8553 3.03164 49.5735 0 56 0V40Z" fill="currentColor"/>
              </svg>
            </div>
            <DuotoneToggle
              enabled={currentDuotone}
              onToggle={setCurrentDuotone}
            />
          </div>

          {/* Tags */}
          <div>
            <div className="flex items-center justify-between pl-6 pr-4 py-4">
              <h3 className="text-xs font-medium text-zinc-900 dark:text-zinc-400">Tags</h3>
            </div>
            <div className="flex px-4">
              <div className="w-full bg-zinc-900 dark:bg-zinc-950 p-3 overflow-y-scroll rounded-xl">
                <span className="text-zinc-300 text-sm">
                  {icon.tags.map((tag, index) => (
                    <span key={tag}>
                      {tag}
                      {index < icon.tags.length - 1 && (
                        <span className="text-zinc-500">, </span>
                      )}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>

          {/* Recommended Usage */}
          <CodeSection
            title="Recommended Usage"
            copyText={recommendedCode}
            copyId="recommended"
            copied={copied}
            onCopy={copyToClipboard}
          >
            <span className="syntax-keyword">import</span>
            <span className="syntax-punctuation">{' { '}</span>
            <span className="syntax-component">{prefixedName}</span>
            <span className="syntax-punctuation">{' } '}</span>
            <span className="syntax-keyword">from</span>
            <span className="syntax-punctuation">{' '}</span>
            <span className="syntax-string">&apos;stera-icons&apos;</span>
            <span className="syntax-punctuation">;</span>
            {'\n\n'}
            <span className="syntax-punctuation">{'<'}</span>
            <span className="syntax-component">{prefixedName}</span>
            <span className="syntax-punctuation">{' '}</span>
            <span className="syntax-prop">size</span>
            <span className="syntax-punctuation">=</span>
            <span className="syntax-punctuation">{'{'}</span>
            <span className="syntax-value">{iconSize}</span>
            <span className="syntax-punctuation">{'}'}</span>
            <span className="syntax-punctuation">{' />'}</span>
          </CodeSection>

          {/* Aliases */}
          <CodeSection
            title="Aliases"
            copyText={aliasesCode}
            copyId="aliases"
            copied={copied}
            onCopy={copyToClipboard}
          >
            <span className="syntax-comment">{'// Base'}</span>
            {'\n'}
            <span className="syntax-punctuation">{'<'}</span>
            <span className="syntax-component">{displayVariantName}</span>
            <span className="syntax-punctuation">{' />'}</span>
            {'\n\n'}
            <span className="syntax-comment">{'// Prefix (Recommended)'}</span>
            {'\n'}
            <span className="syntax-punctuation">{'<'}</span>
            <span className="syntax-component">{prefixedName}</span>
            <span className="syntax-punctuation">{' />'}</span>
            {'\n\n'}
            <span className="syntax-comment">{'// Suffix'}</span>
            {'\n'}
            <span className="syntax-punctuation">{'<'}</span>
            <span className="syntax-component">{suffixedName}</span>
            <span className="syntax-punctuation">{' />'}</span>
          </CodeSection>

          {/* Dynamic Variants */}
          <CodeSection
            title="Dynamic Variants"
            copyText={dynamicVariantsCode}
            copyId="dynamic"
            copied={copied}
            onCopy={copyToClipboard}
          >
            <span className="syntax-keyword">import</span>
            <span className="syntax-punctuation">{' { '}</span>
            <span className="syntax-component">Si{baseName}</span>
            <span className="syntax-punctuation">{' } '}</span>
            <span className="syntax-keyword">from</span>
            <span className="syntax-punctuation">{' '}</span>
            <span className="syntax-string">&apos;stera-icons/dynamic-variants&apos;</span>
            <span className="syntax-punctuation">;</span>
            {'\n\n'}
            <span className="syntax-punctuation">{'<'}</span>
            <span className="syntax-component">Si{baseName}</span>
            {currentWeight !== 'regular' && (
              <>
                <span className="syntax-punctuation">{' '}</span>
                <span className="syntax-prop">weight</span>
                <span className="syntax-punctuation">=</span>
                <span className="syntax-string">&quot;{currentWeight}&quot;</span>
              </>
            )}
            {currentDuotone && (
              <>
                <span className="syntax-punctuation">{' '}</span>
                <span className="syntax-prop">duotone</span>
              </>
            )}
            <span className="syntax-punctuation">{' '}</span>
            <span className="syntax-prop">size</span>
            <span className="syntax-punctuation">=</span>
            <span className="syntax-punctuation">{'{'}</span>
            <span className="syntax-value">{iconSize}</span>
            <span className="syntax-punctuation">{'}'}</span>
            <span className="syntax-punctuation">{' />'}</span>
          </CodeSection>

          {/* Subpath Import */}
          <CodeSection
            title="Subpath Import"
            copyText={subpathImportCode}
            copyId="subpath"
            copied={copied}
            onCopy={copyToClipboard}
          >
            <span className="syntax-keyword">import</span>
            <span className="syntax-punctuation">{' { '}</span>
            <span className="syntax-component">{prefixedName}</span>
            <span className="syntax-punctuation">{' } '}</span>
            <span className="syntax-keyword">from</span>
            <span className="syntax-punctuation">{' '}</span>
            <span className="syntax-string">&apos;stera-icons/icons/{fileName}&apos;</span>
            <span className="syntax-punctuation">;</span>
            {'\n\n'}
            <span className="syntax-punctuation">{'<'}</span>
            <span className="syntax-component">{prefixedName}</span>
            <span className="syntax-punctuation">{' '}</span>
            <span className="syntax-prop">size</span>
            <span className="syntax-punctuation">=</span>
            <span className="syntax-punctuation">{'{'}</span>
            <span className="syntax-value">{iconSize}</span>
            <span className="syntax-punctuation">{'}'}</span>
            <span className="syntax-punctuation">{' />'}</span>
          </CodeSection>
        </div>
      </div>
    </div>
  );
}
