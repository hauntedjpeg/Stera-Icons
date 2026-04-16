import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCheckBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanCheckBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanCheckBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15a1 1 0 0 1 1 1v2c0 .83.67 1.5 1.5 1.5h2a1 1 0 1 1 0 2H6A3.5 3.5 0 0 1 2.5 18v-2a1 1 0 0 1 1-1M20.5 15a1 1 0 0 1 1 1v2a3.5 3.5 0 0 1-3.5 3.5h-2a1 1 0 1 1 0-2h2c.83 0 1.5-.67 1.5-1.5v-2a1 1 0 0 1 1-1M8 2.5a1 1 0 0 1 0 2H6c-.83 0-1.5.67-1.5 1.5v2a1 1 0 0 1-2 0V6A3.5 3.5 0 0 1 6 2.5zM18 2.5A3.5 3.5 0 0 1 21.5 6v2a1 1 0 1 1-2 0V6c0-.83-.67-1.5-1.5-1.5h-2a1 1 0 1 1 0-2z" opacity={0.4} />
        <path d="M15.26 8.57a1 1 0 0 1 1.48 1.36l-4.88 5.32-.32.33c-.12.1-.3.25-.55.34a1.5 1.5 0 0 1-1.54-.4l-.3-.33-1.92-2.3a1 1 0 0 1 1.54-1.28l1.76 2.12z" />
    </IconBase>
  ))
);

ScanCheckBoldDuotone.displayName = 'ScanCheckBoldDuotone';

// Triple export pattern (lucide-react style)
export { ScanCheckBoldDuotone, ScanCheckBoldDuotone as ScanCheckBoldDuotoneIcon, ScanCheckBoldDuotone as SiScanCheckBoldDuotone };
export default ScanCheckBoldDuotone;
export type { ScanCheckBoldDuotoneProps };
