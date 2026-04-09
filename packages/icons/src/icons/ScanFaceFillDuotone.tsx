import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanFaceFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanFaceFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanFaceFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-face-fill-duotone" {...props}>
      <path d="M3.5 15.13c.48 0 .88.39.88.87v2c0 .9.72 1.63 1.62 1.63h2a.88.88 0 0 1 0 1.75H6A3.37 3.37 0 0 1 2.63 18v-2c0-.48.39-.87.87-.87M20.5 15.13c.48 0 .88.39.88.87v2A3.37 3.37 0 0 1 18 21.38h-2a.88.88 0 0 1 0-1.75h2c.9 0 1.63-.73 1.63-1.63v-2c0-.48.39-.87.87-.87M8 2.63a.87.87 0 1 1 0 1.75H6c-.9 0-1.62.72-1.62 1.62v2a.87.87 0 1 1-1.75 0V6A3.4 3.4 0 0 1 6 2.63zM18 2.63A3.37 3.37 0 0 1 21.38 6v2a.88.88 0 0 1-1.75 0V6c0-.9-.73-1.62-1.63-1.62h-2a.88.88 0 0 1 0-1.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 5.75a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5m2.68 7.4a.63.63 0 0 0-.88.12 2.25 2.25 0 0 1-3.6 0 .63.63 0 0 0-1 .75 3.5 3.5 0 0 0 5.6 0 .63.63 0 0 0-.12-.88m-4.7-3.6a1 1 0 1 0 0 2.02 1 1 0 0 0 0-2.01m4.04 0a1 1 0 1 0 0 2.02 1 1 0 0 0 0-2.01" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanFaceFillDuotone.displayName = 'ScanFaceFillDuotone';

// Triple export pattern (lucide-react style)
export { ScanFaceFillDuotone, ScanFaceFillDuotone as ScanFaceFillDuotoneIcon, ScanFaceFillDuotone as SiScanFaceFillDuotone };
export default ScanFaceFillDuotone;
export type { ScanFaceFillDuotoneProps };
