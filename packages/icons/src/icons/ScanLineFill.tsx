import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanLineFillProps = Omit<IconBaseProps, 'children'>;

const ScanLineFill = memo(
  forwardRef<SVGSVGElement, ScanLineFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-line-fill" {...props}>
      <path d="M20 14.63c.48 0 .88.39.88.87V17A3.9 3.9 0 0 1 17 20.88H7A3.9 3.9 0 0 1 3.13 17v-1.5c0-.48.39-.87.87-.87zM21.5 11.13a.88.88 0 0 1 0 1.74h-19a.88.88 0 0 1 0-1.74zM17 3.13A3.9 3.9 0 0 1 20.88 7v1.5c0 .48-.4.88-.88.88H4a.87.87 0 0 1-.87-.88V7A3.9 3.9 0 0 1 7 3.13z" />
    </IconBase>
  ))
);

ScanLineFill.displayName = 'ScanLineFill';

// Triple export pattern (lucide-react style)
export { ScanLineFill, ScanLineFill as ScanLineFillIcon, ScanLineFill as SiScanLineFill };
export default ScanLineFill;
export type { ScanLineFillProps };
