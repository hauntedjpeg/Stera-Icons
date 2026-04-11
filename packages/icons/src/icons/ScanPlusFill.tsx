import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanPlusFillProps = Omit<IconBaseProps, 'children'>;

const ScanPlusFill = memo(
  forwardRef<SVGSVGElement, ScanPlusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 14.75c.69 0 1.25.56 1.25 1.25v2c0 .69.56 1.25 1.25 1.25h2a1.25 1.25 0 1 1 0 2.5H6A3.75 3.75 0 0 1 2.25 18v-2c0-.69.56-1.25 1.25-1.25M20.5 14.75c.69 0 1.25.56 1.25 1.25v2A3.75 3.75 0 0 1 18 21.75h-2a1.25 1.25 0 1 1 0-2.5h2c.69 0 1.25-.56 1.25-1.25v-2c0-.69.56-1.25 1.25-1.25M12 6.75c.7 0 1.25.56 1.25 1.25v2.75h2.76a1.25 1.25 0 0 1 0 2.5h-2.76V16a1.25 1.25 0 0 1-2.5 0v-2.75H8.01a1.25 1.25 0 0 1 0-2.5h2.74V8c0-.69.56-1.25 1.25-1.25M8 2.25a1.25 1.25 0 1 1 0 2.5H6c-.69 0-1.25.56-1.25 1.25v2a1.25 1.25 0 1 1-2.5 0V6A3.75 3.75 0 0 1 6 2.25zM18 2.25A3.75 3.75 0 0 1 21.75 6v2a1.25 1.25 0 1 1-2.5 0V6c0-.69-.56-1.25-1.25-1.25h-2a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

ScanPlusFill.displayName = 'ScanPlusFill';

// Triple export pattern (lucide-react style)
export { ScanPlusFill, ScanPlusFill as ScanPlusFillIcon, ScanPlusFill as SiScanPlusFill };
export default ScanPlusFill;
export type { ScanPlusFillProps };
