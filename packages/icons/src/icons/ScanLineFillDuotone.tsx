import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanLineFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanLineFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanLineFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-line-fill-duotone" {...props}>
      <path d="M20.88 17A3.9 3.9 0 0 1 17 20.88H7A3.9 3.9 0 0 1 3.13 17v-4.12h17.75zM17 3.13A3.9 3.9 0 0 1 20.88 7v4.13H3.13V7A3.9 3.9 0 0 1 7 3.13z" opacity={0.4} />
        <path d="M21.5 11.13a.88.88 0 0 1 0 1.74h-19a.88.88 0 0 1 0-1.74z" />
    </IconBase>
  ))
);

ScanLineFillDuotone.displayName = 'ScanLineFillDuotone';

// Triple export pattern (lucide-react style)
export { ScanLineFillDuotone, ScanLineFillDuotone as ScanLineFillDuotoneIcon, ScanLineFillDuotone as SiScanLineFillDuotone };
export default ScanLineFillDuotone;
export type { ScanLineFillDuotoneProps };
