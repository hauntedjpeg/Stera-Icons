import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClipboardFillProps = Omit<IconBaseProps, 'children'>;

const ClipboardFill = memo(
  forwardRef<SVGSVGElement, ClipboardFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.95 4.16q.64.03 1.22.3.9.47 1.36 1.37.28.59.31 1.22.05.63.04 1.55v8.8q.01.93-.04 1.55-.03.64-.3 1.22-.47.9-1.37 1.36-.59.28-1.22.31-.63.05-1.55.04H8.6q-.93.01-1.55-.04-.64-.03-1.22-.3-.9-.47-1.36-1.37-.28-.59-.31-1.22-.05-.63-.04-1.55V8.6q-.01-.93.04-1.55.03-.64.3-1.22.47-.9 1.37-1.36.59-.28 1.22-.31h.08v.59c0 1.45 1.17 2.63 2.62 2.63h4.5c1.45 0 2.63-1.18 2.63-2.63v-.6z" />
        <path d="M14.25 2.38c.48 0 .88.39.88.87v1.5c0 .48-.4.88-.88.88h-4.5c-.48 0-.87-.4-.87-.88v-1.5c0-.48.39-.87.87-.87z" />
    </IconBase>
  ))
);

ClipboardFill.displayName = 'ClipboardFill';

// Triple export pattern
export { ClipboardFill, ClipboardFill as ClipboardFillIcon, ClipboardFill as SiClipboardFill };
export default ClipboardFill;
export type { ClipboardFillProps };
