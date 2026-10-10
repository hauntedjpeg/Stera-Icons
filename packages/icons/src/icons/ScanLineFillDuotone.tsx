import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanLineFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanLineFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanLineFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.88 17c0 2.14-1.74 3.88-3.88 3.88H7c-2.14 0-3.87-1.74-3.87-3.88v-4.12h17.75zM17 3.13c2.14 0 3.88 1.73 3.88 3.87v4.13H3.13V7c0-2.14 1.73-3.87 3.87-3.87z" opacity={0.4} />
        <path d="M21.5 11.13c.48 0 .88.39.88.87s-.4.88-.88.88h-19c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

ScanLineFillDuotone.displayName = 'ScanLineFillDuotone';

// Triple export pattern
export { ScanLineFillDuotone, ScanLineFillDuotone as ScanLineFillDuotoneIcon, ScanLineFillDuotone as SiScanLineFillDuotone };
export default ScanLineFillDuotone;
export type { ScanLineFillDuotoneProps };
