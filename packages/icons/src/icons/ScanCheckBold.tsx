import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCheckBoldProps = Omit<IconBaseProps, 'children'>;

const ScanCheckBold = memo(
  forwardRef<SVGSVGElement, ScanCheckBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15a1 1 0 0 1 1 1v2c0 .83.67 1.5 1.5 1.5h2a1 1 0 1 1 0 2H6A3.5 3.5 0 0 1 2.5 18v-2a1 1 0 0 1 1-1M20.5 15a1 1 0 0 1 1 1v2a3.5 3.5 0 0 1-3.5 3.5h-2a1 1 0 1 1 0-2h2c.83 0 1.5-.67 1.5-1.5v-2a1 1 0 0 1 1-1M15.26 8.57a1 1 0 0 1 1.48 1.36l-4.88 5.32-.32.33c-.12.1-.3.25-.55.34a1.5 1.5 0 0 1-1.54-.4l-.3-.33-1.92-2.3a1 1 0 0 1 1.54-1.28l1.77 2.12zM8 2.5a1 1 0 0 1 0 2H6c-.83 0-1.5.67-1.5 1.5v2a1 1 0 0 1-2 0V6A3.5 3.5 0 0 1 6 2.5zM18 2.5A3.5 3.5 0 0 1 21.5 6v2a1 1 0 1 1-2 0V6c0-.83-.67-1.5-1.5-1.5h-2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanCheckBold.displayName = 'ScanCheckBold';

// Triple export pattern (lucide-react style)
export { ScanCheckBold, ScanCheckBold as ScanCheckBoldIcon, ScanCheckBold as SiScanCheckBold };
export default ScanCheckBold;
export type { ScanCheckBoldProps };
