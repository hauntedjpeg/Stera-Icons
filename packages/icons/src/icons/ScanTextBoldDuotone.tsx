import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanTextBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanTextBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanTextBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15c.55 0 1 .45 1 1v2c0 .83.67 1.5 1.5 1.5h2c.55 0 1 .45 1 1s-.45 1-1 1H6c-1.93 0-3.5-1.57-3.5-3.5v-2c0-.55.45-1 1-1M20.5 15c.55 0 1 .45 1 1v2c0 1.93-1.57 3.5-3.5 3.5h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.83 0 1.5-.67 1.5-1.5v-2c0-.55.45-1 1-1M8 2.5c.55 0 1 .45 1 1s-.45 1-1 1H6c-.83 0-1.5.67-1.5 1.5v2c0 .55-.45 1-1 1s-1-.45-1-1V6c0-1.93 1.57-3.5 3.5-3.5zM18 2.5c1.93 0 3.5 1.57 3.5 3.5v2c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.83-.67-1.5-1.5-1.5h-2c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M12.5 13c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1zM16 9c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ScanTextBoldDuotone.displayName = 'ScanTextBoldDuotone';

// Triple export pattern
export { ScanTextBoldDuotone, ScanTextBoldDuotone as ScanTextBoldDuotoneIcon, ScanTextBoldDuotone as SiScanTextBoldDuotone };
export default ScanTextBoldDuotone;
export type { ScanTextBoldDuotoneProps };
