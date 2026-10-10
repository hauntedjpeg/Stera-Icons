import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanLineBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanLineBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanLineBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 14.5c.55 0 1 .45 1 1V17c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4v-1.5c0-.55.45-1 1-1s1 .45 1 1V17c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-1.5c0-.55.45-1 1-1M17 3c2.2 0 4 1.8 4 4v1.5c0 .55-.45 1-1 1s-1-.45-1-1V7c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v1.5c0 .55-.45 1-1 1s-1-.45-1-1V7c0-2.2 1.8-4 4-4z" opacity={0.4} />
        <path d="M21.5 11c.55 0 1 .45 1 1s-.45 1-1 1h-19c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ScanLineBoldDuotone.displayName = 'ScanLineBoldDuotone';

// Triple export pattern
export { ScanLineBoldDuotone, ScanLineBoldDuotone as ScanLineBoldDuotoneIcon, ScanLineBoldDuotone as SiScanLineBoldDuotone };
export default ScanLineBoldDuotone;
export type { ScanLineBoldDuotoneProps };
