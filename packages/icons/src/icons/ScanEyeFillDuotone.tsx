import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanEyeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanEyeFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanEyeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-eye-fill-duotone" {...props}>
      <path d="M3.5 15.13c.48 0 .88.39.88.87v2c0 .9.72 1.63 1.62 1.63h2a.88.88 0 0 1 0 1.75H6A3.37 3.37 0 0 1 2.63 18v-2c0-.48.39-.87.87-.87M20.5 15.13c.48 0 .88.39.88.87v2A3.37 3.37 0 0 1 18 21.38h-2a.88.88 0 0 1 0-1.75h2c.9 0 1.63-.73 1.63-1.63v-2c0-.48.39-.87.87-.87M8 2.63a.87.87 0 1 1 0 1.75H6c-.9 0-1.62.72-1.62 1.62v2a.87.87 0 1 1-1.75 0V6A3.4 3.4 0 0 1 6 2.63zM18 2.63A3.37 3.37 0 0 1 21.38 6v2a.88.88 0 0 1-1.75 0V6c0-.9-.73-1.62-1.63-1.62h-2a.88.88 0 0 1 0-1.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 6.75c3.24 0 6 2.06 7.2 4.96q.1.3 0 .58a7.8 7.8 0 0 1-7.2 4.96c-3.24 0-6-2.06-7.2-4.96a.8.8 0 0 1 0-.58A7.8 7.8 0 0 1 12 6.75M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanEyeFillDuotone.displayName = 'ScanEyeFillDuotone';

// Triple export pattern (lucide-react style)
export { ScanEyeFillDuotone, ScanEyeFillDuotone as ScanEyeFillDuotoneIcon, ScanEyeFillDuotone as SiScanEyeFillDuotone };
export default ScanEyeFillDuotone;
export type { ScanEyeFillDuotoneProps };
