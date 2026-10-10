import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanLineFillProps = Omit<IconBaseProps, 'children'>;

const ScanLineFill = memo(
  forwardRef<SVGSVGElement, ScanLineFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 14.63c.48 0 .88.39.88.87V17c0 2.14-1.74 3.88-3.88 3.88H7c-2.14 0-3.87-1.74-3.87-3.88v-1.5c0-.48.39-.87.87-.87zM21.5 11.13c.48 0 .88.39.88.87s-.4.88-.88.88h-19c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM17 3.13c2.14 0 3.88 1.73 3.88 3.87v1.5c0 .48-.4.88-.88.88H4c-.48 0-.87-.4-.87-.88V7c0-2.14 1.73-3.87 3.87-3.87z" />
    </IconBase>
  ))
);

ScanLineFill.displayName = 'ScanLineFill';

// Triple export pattern
export { ScanLineFill, ScanLineFill as ScanLineFillIcon, ScanLineFill as SiScanLineFill };
export default ScanLineFill;
export type { ScanLineFillProps };
