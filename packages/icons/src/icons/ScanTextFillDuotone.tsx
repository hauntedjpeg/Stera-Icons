import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanTextFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-text-fill-duotone" {...props}>
      <path d="M3.5 15.13c.48 0 .88.39.88.87v2c0 .9.72 1.63 1.62 1.63h2a.88.88 0 0 1 0 1.75H6A3.37 3.37 0 0 1 2.63 18v-2c0-.48.39-.87.87-.87M20.5 15.13c.48 0 .88.39.88.87v2A3.37 3.37 0 0 1 18 21.38h-2a.88.88 0 0 1 0-1.75h2c.9 0 1.63-.73 1.63-1.63v-2c0-.48.39-.87.87-.87M8 2.63a.87.87 0 1 1 0 1.75H6c-.9 0-1.62.72-1.62 1.62v2a.87.87 0 1 1-1.75 0V6A3.4 3.4 0 0 1 6 2.63zM18 2.63A3.37 3.37 0 0 1 21.38 6v2a.88.88 0 0 1-1.75 0V6c0-.9-.73-1.62-1.63-1.62h-2a.88.88 0 0 1 0-1.75z" opacity={0.4} />
        <path d="M12.5 12.75a1.25 1.25 0 1 1 0 2.5H8a1.25 1.25 0 1 1 0-2.5zM16 8.75a1.25 1.25 0 1 1 0 2.5H8a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

ScanTextFillDuotone.displayName = 'ScanTextFillDuotone';

// Triple export pattern (lucide-react style)
export { ScanTextFillDuotone, ScanTextFillDuotone as ScanTextFillDuotoneIcon, ScanTextFillDuotone as SiScanTextFillDuotone };
export default ScanTextFillDuotone;
export type { ScanTextFillDuotoneProps };
