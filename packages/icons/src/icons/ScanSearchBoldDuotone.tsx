import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanSearchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanSearchBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanSearchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15c.55 0 1 .45 1 1v2c0 .83.67 1.5 1.5 1.5h2c.55 0 1 .45 1 1s-.45 1-1 1H6c-1.93 0-3.5-1.57-3.5-3.5v-2c0-.55.45-1 1-1M20.5 15c.55 0 1 .45 1 1v2c0 1.93-1.57 3.5-3.5 3.5h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.83 0 1.5-.67 1.5-1.5v-2c0-.55.45-1 1-1M8 2.5c.55 0 1 .45 1 1s-.45 1-1 1H6c-.83 0-1.5.67-1.5 1.5v2c0 .55-.45 1-1 1s-1-.45-1-1V6c0-1.93 1.57-3.5 3.5-3.5zM18 2.5c1.93 0 3.5 1.57 3.5 3.5v2c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.83-.67-1.5-1.5-1.5h-2c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.04 6.25c2.64 0 4.79 2.14 4.79 4.79q-.01 1.32-.64 2.38l1.94 1.95c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0l-1.95-1.94q-1.06.62-2.38.64c-2.65 0-4.79-2.15-4.79-4.8s2.14-4.78 4.79-4.78m0 2c-1.54 0-2.79 1.25-2.79 2.79s1.25 2.79 2.79 2.79 2.79-1.25 2.79-2.8c0-1.53-1.25-2.78-2.8-2.78" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanSearchBoldDuotone.displayName = 'ScanSearchBoldDuotone';

// Triple export pattern
export { ScanSearchBoldDuotone, ScanSearchBoldDuotone as ScanSearchBoldDuotoneIcon, ScanSearchBoldDuotone as SiScanSearchBoldDuotone };
export default ScanSearchBoldDuotone;
export type { ScanSearchBoldDuotoneProps };
