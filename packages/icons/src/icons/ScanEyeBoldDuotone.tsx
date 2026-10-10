import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanEyeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanEyeBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanEyeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15c.55 0 1 .45 1 1v2c0 .83.67 1.5 1.5 1.5h2c.55 0 1 .45 1 1s-.45 1-1 1H6c-1.93 0-3.5-1.57-3.5-3.5v-2c0-.55.45-1 1-1M20.5 15c.55 0 1 .45 1 1v2c0 1.93-1.57 3.5-3.5 3.5h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.83 0 1.5-.67 1.5-1.5v-2c0-.55.45-1 1-1M8 2.5c.55 0 1 .45 1 1s-.45 1-1 1H6c-.83 0-1.5.67-1.5 1.5v2c0 .55-.45 1-1 1s-1-.45-1-1V6c0-1.93 1.57-3.5 3.5-3.5zM18 2.5c1.93 0 3.5 1.57 3.5 3.5v2c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.83-.67-1.5-1.5-1.5h-2c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" />
        <path fillRule="evenodd" d="M12 6.5c3.35 0 6.2 2.13 7.42 5.12q.15.38 0 .76C18.2 15.37 15.35 17.5 12 17.5s-6.19-2.13-7.42-5.12q-.15-.38 0-.76C5.8 8.63 8.65 6.5 12 6.5m0 2c-2.32 0-4.38 1.4-5.4 3.5 1.02 2.1 3.08 3.5 5.4 3.5s4.38-1.4 5.4-3.5c-1.02-2.1-3.07-3.5-5.4-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanEyeBoldDuotone.displayName = 'ScanEyeBoldDuotone';

// Triple export pattern
export { ScanEyeBoldDuotone, ScanEyeBoldDuotone as ScanEyeBoldDuotoneIcon, ScanEyeBoldDuotone as SiScanEyeBoldDuotone };
export default ScanEyeBoldDuotone;
export type { ScanEyeBoldDuotoneProps };
