import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCheckBoldProps = Omit<IconBaseProps, 'children'>;

const ScanCheckBold = memo(
  forwardRef<SVGSVGElement, ScanCheckBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15c.55 0 1 .45 1 1v2c0 .83.67 1.5 1.5 1.5h2c.55 0 1 .45 1 1s-.45 1-1 1H6c-1.93 0-3.5-1.57-3.5-3.5v-2c0-.55.45-1 1-1M20.5 15c.55 0 1 .45 1 1v2c0 1.93-1.57 3.5-3.5 3.5h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.83 0 1.5-.67 1.5-1.5v-2c0-.55.45-1 1-1M15.26 8.57c.38-.4 1-.43 1.42-.06.4.38.43 1 .06 1.42l-4.88 5.32-.32.33c-.12.1-.3.25-.55.34q-.52.16-1-.03c-.26-.1-.43-.25-.54-.36l-.3-.34-1.92-2.3c-.35-.42-.3-1.05.13-1.4.42-.36 1.05-.3 1.4.12l1.78 2.12zM8 2.5c.55 0 1 .45 1 1s-.45 1-1 1H6c-.83 0-1.5.67-1.5 1.5v2c0 .55-.45 1-1 1s-1-.45-1-1V6c0-1.93 1.57-3.5 3.5-3.5zM18 2.5c1.93 0 3.5 1.57 3.5 3.5v2c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.83-.67-1.5-1.5-1.5h-2c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ScanCheckBold.displayName = 'ScanCheckBold';

// Triple export pattern
export { ScanCheckBold, ScanCheckBold as ScanCheckBoldIcon, ScanCheckBold as SiScanCheckBold };
export default ScanCheckBold;
export type { ScanCheckBoldProps };
