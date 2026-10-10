import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanDashedBoldProps = Omit<IconBaseProps, 'children'>;

const ScanDashedBold = memo(
  forwardRef<SVGSVGElement, ScanDashedBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 14.5c.55 0 1 .45 1 1v2c0 .83.67 1.5 1.5 1.5h2c.55 0 1 .45 1 1s-.45 1-1 1h-2C4.57 21 3 19.43 3 17.5v-2c0-.55.45-1 1-1M20 14.5c.55 0 1 .45 1 1v2c0 1.93-1.57 3.5-3.5 3.5h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.83 0 1.5-.67 1.5-1.5v-2c0-.55.45-1 1-1M21.5 11c.55 0 1 .45 1 1s-.45 1-1 1h-19c-.55 0-1-.45-1-1s.45-1 1-1zM8.5 3c.55 0 1 .45 1 1s-.45 1-1 1h-2C5.67 5 5 5.67 5 6.5v2c0 .55-.45 1-1 1s-1-.45-1-1v-2C3 4.57 4.57 3 6.5 3zM17.5 3C19.43 3 21 4.57 21 6.5v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.83-.67-1.5-1.5-1.5h-2c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ScanDashedBold.displayName = 'ScanDashedBold';

// Triple export pattern
export { ScanDashedBold, ScanDashedBold as ScanDashedBoldIcon, ScanDashedBold as SiScanDashedBold };
export default ScanDashedBold;
export type { ScanDashedBoldProps };
