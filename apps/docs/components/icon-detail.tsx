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
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DrawerTitle } from '@/components/ui/drawer';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { SiCopy, SiDownload, SiCheckCircleFill } from 'stera-icons';

interface IconDetailProps {
  icon: IconData;
  // "drawer" must be rendered inside a Drawer; it titles the dialog
  variant: 'page' | 'drawer';
}

export function IconDetail({ icon, variant }: IconDetailProps) {
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
    <div className={variant === 'page' ? 'flex flex-col gap-8' : 'flex flex-col gap-6'}>
      {/* Header */}
      <div className={variant === 'page' ? 'flex items-center gap-4' : 'flex items-center gap-4 pr-10'}>
        {variant === 'page' ? (
          <h1 className="st-display-sm text-text flex-1">{prettyName}</h1>
        ) : (
          <DrawerTitle className="flex-1">{prettyName}</DrawerTitle>
        )}
        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Copy SVG"
                  onClick={() => copyToClipboard(handleGetSVGData(), 'svg')}
                />
              }
            >
              {copied === 'svg' ? <SiCheckCircleFill /> : <SiCopy />}
            </TooltipTrigger>
            <TooltipContent>{copied === 'svg' ? 'Copied' : 'Copy SVG'}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Download SVG"
                  onClick={handleDownloadSVG}
                />
              }
            >
              <SiDownload />
            </TooltipTrigger>
            <TooltipContent>Download SVG</TooltipContent>
          </Tooltip>
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
            <Badge key={tag}>{tag}</Badge>
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
