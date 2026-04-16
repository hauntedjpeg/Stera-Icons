'use client';

import { useState } from 'react';
import type { IconData } from '@/lib/types';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { getSVGData, downloadSVG, getSVGFilename } from '@/utils/svgExport';
import { getIconNames, generateCodeSnippets, type IconWeight } from '@/utils/iconCodeSnippets';
import { IconRenderer } from '@/components/icon-renderer';
import { WeightSelector } from '@/components/weight-selector';
import { DuotoneToggle } from '@/components/duotone-toggle';
import { CodeSection } from '@/components/code-section';
import { SiCopy, SiDownload, SiCheckCircleFill } from 'stera-icons';

interface IconDetailPageProps {
  icon: IconData;
}

export function IconDetailPage({ icon }: IconDetailPageProps) {
  const { copied, copyToClipboard } = useCopyToClipboard();
  const [iconSize] = useState(64);
  const [currentWeight, setCurrentWeight] = useState<IconWeight>('regular');
  const [currentDuotone, setCurrentDuotone] = useState(false);

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
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <h1 className="st-display-sm text-text flex-1">{prettyName}</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => copyToClipboard(handleGetSVGData(), 'svg')}
            className="p-2 hover:bg-bg-surface-secondary rounded-lg transition-colors text-text-secondary hover:text-text"
            title="Copy SVG"
          >
            {copied === 'svg' ? <SiCheckCircleFill className="w-5 h-5" /> : <SiCopy className="w-5 h-5" />}
          </button>
          <button
            onClick={handleDownloadSVG}
            className="p-2 hover:bg-bg-surface-secondary rounded-lg transition-colors text-text-secondary hover:text-text"
            title="Download SVG"
          >
            <SiDownload className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Preview */}
      <div
        id="icon-preview"
        className="flex items-center justify-center py-12 rounded-xl border border-border text-text"
      >
        <IconRenderer
          iconName={icon.kebabName}
          weight={currentWeight}
          duotone={currentDuotone}
          className="h-16 w-16"
        />
      </div>

      {/* Controls */}
      <div className="flex gap-3">
        <WeightSelector
          selectedWeight={currentWeight}
          onWeightChange={setCurrentWeight}
        />
        <DuotoneToggle
          enabled={currentDuotone}
          onToggle={setCurrentDuotone}
        />
      </div>

      {/* Tags */}
      {icon.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {icon.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-bg-surface-secondary px-2 py-0.5 st-body-sm text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Code Sections */}
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
  );
}
