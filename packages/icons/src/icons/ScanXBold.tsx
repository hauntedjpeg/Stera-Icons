import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanXBoldProps = Omit<IconBaseProps, 'children'>;

const ScanXBold = memo(
  forwardRef<SVGSVGElement, ScanXBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15c.55 0 1 .45 1 1v2.5c0 .83.67 1.5 1.5 1.5H8c.55 0 1 .45 1 1s-.45 1-1 1H5.5C3.57 22 2 20.43 2 18.5V16c0-.55.45-1 1-1M21 15c.55 0 1 .45 1 1v2.5c0 1.93-1.57 3.5-3.5 3.5H16c-.55 0-1-.45-1-1s.45-1 1-1h2.5c.83 0 1.5-.67 1.5-1.5V16c0-.55.45-1 1-1M8.3 8.3c.38-.4 1.02-.4 1.4 0l2.3 2.29 2.3-2.3c.38-.38 1.02-.38 1.4.01.4.39.4 1.02 0 1.41L13.43 12l2.29 2.29c.39.39.39 1.02 0 1.41-.4.4-1.03.4-1.42 0L12 13.41l-2.3 2.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L10.58 12l-2.3-2.3c-.39-.38-.39-1.02 0-1.4M8 2c.55 0 1 .45 1 1s-.45 1-1 1H5.5C4.67 4 4 4.67 4 5.5V8c0 .55-.45 1-1 1s-1-.45-1-1V5.5C2 3.57 3.57 2 5.5 2zM18.5 2C20.43 2 22 3.57 22 5.5V8c0 .55-.45 1-1 1s-1-.45-1-1V5.5c0-.83-.67-1.5-1.5-1.5H16c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ScanXBold.displayName = 'ScanXBold';

// Triple export pattern
export { ScanXBold, ScanXBold as ScanXBoldIcon, ScanXBold as SiScanXBold };
export default ScanXBold;
export type { ScanXBoldProps };
