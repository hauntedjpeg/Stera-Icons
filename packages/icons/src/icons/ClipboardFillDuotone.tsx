import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClipboardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClipboardFillDuotone = memo(
  forwardRef<SVGSVGElement, ClipboardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.37 4.13q.31 0 .58.03.64.03 1.22.3.9.47 1.36 1.37.28.59.31 1.22.05.63.04 1.55v8.8q.01.93-.04 1.55a3 3 0 0 1-.3 1.22q-.47.9-1.37 1.36-.59.28-1.22.31-.63.05-1.55.04H8.6q-.93.01-1.55-.04a3 3 0 0 1-1.22-.3 3 3 0 0 1-1.36-1.37 3 3 0 0 1-.31-1.22q-.05-.63-.04-1.55V8.6q-.01-.93.04-1.55.03-.64.3-1.22.47-.9 1.37-1.36.59-.28 1.22-.31.27-.02.58-.03v1.62c0 1.17.95 2.13 2.12 2.13h4.5c1.17 0 2.13-.96 2.13-2.13v-1.5z" opacity={.4} />
        <path d="M14.25 2.13c1.17 0 2.13.95 2.13 2.12v1.5c0 1.17-.96 2.13-2.13 2.13h-4.5a2.13 2.13 0 0 1-2.12-2.13v-1.5c0-1.17.95-2.12 2.12-2.12z" />
    </IconBase>
  ))
);

ClipboardFillDuotone.displayName = 'ClipboardFillDuotone';

// Triple export pattern (lucide-react style)
export { ClipboardFillDuotone, ClipboardFillDuotone as ClipboardFillDuotoneIcon, ClipboardFillDuotone as SiClipboardFillDuotone };
export default ClipboardFillDuotone;
export type { ClipboardFillDuotoneProps };
