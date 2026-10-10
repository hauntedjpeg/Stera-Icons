import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 14.75c.69 0 1.25.56 1.25 1.25v2c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25.56 1.25 1.25S8.69 21.75 8 21.75H6c-2.07 0-3.75-1.68-3.75-3.75v-2c0-.69.56-1.25 1.25-1.25M20.5 14.75c.69 0 1.25.56 1.25 1.25v2c0 2.07-1.68 3.75-3.75 3.75h-2c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h2c.69 0 1.25-.56 1.25-1.25v-2c0-.69.56-1.25 1.25-1.25M8 2.25c.69 0 1.25.56 1.25 1.25S8.69 4.75 8 4.75H6c-.69 0-1.25.56-1.25 1.25v2c0 .69-.56 1.25-1.25 1.25S2.25 8.69 2.25 8V6c0-2.07 1.68-3.75 3.75-3.75zM18 2.25c2.07 0 3.75 1.68 3.75 3.75v2c0 .69-.56 1.25-1.25 1.25S19.25 8.69 19.25 8V6c0-.69-.56-1.25-1.25-1.25h-2c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" opacity={0.4} />
        <path d="M12 6.75c.7 0 1.25.56 1.25 1.25v2.75h2.76c.69 0 1.25.55 1.25 1.25 0 .69-.56 1.25-1.25 1.25h-2.76V16c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-2.75H8.01c-.7 0-1.25-.56-1.25-1.25 0-.7.56-1.25 1.25-1.25h2.74V8c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

ScanPlusFillDuotone.displayName = 'ScanPlusFillDuotone';

// Triple export pattern
export { ScanPlusFillDuotone, ScanPlusFillDuotone as ScanPlusFillDuotoneIcon, ScanPlusFillDuotone as SiScanPlusFillDuotone };
export default ScanPlusFillDuotone;
export type { ScanPlusFillDuotoneProps };
