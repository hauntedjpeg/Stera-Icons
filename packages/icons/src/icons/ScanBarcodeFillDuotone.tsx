import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanBarcodeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanBarcodeFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanBarcodeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 13.75c.69 0 1.25.56 1.25 1.25v1.75c0 .83.67 1.5 1.5 1.5H7.5c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H5.75c-2.2 0-4-1.8-4-4V15c0-.69.56-1.25 1.25-1.25M21 13.75c.69 0 1.25.56 1.25 1.25v1.75c0 2.2-1.8 4-4 4H16.5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h1.75c.83 0 1.5-.67 1.5-1.5V15c0-.69.56-1.25 1.25-1.25M7.5 3.25c.69 0 1.25.56 1.25 1.25S8.19 5.75 7.5 5.75H5.75c-.83 0-1.5.67-1.5 1.5V9c0 .69-.56 1.25-1.25 1.25S1.75 9.69 1.75 9V7.25c0-2.2 1.8-4 4-4zM18.25 3.25c2.2 0 4 1.8 4 4V9c0 .69-.56 1.25-1.25 1.25S19.75 9.69 19.75 9V7.25c0-.83-.67-1.5-1.5-1.5H16.5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" opacity={0.4} />
        <path d="M7.5 7.75c.69 0 1.25.56 1.25 1.25v6c0 .69-.56 1.25-1.25 1.25S6.25 15.69 6.25 15V9c0-.69.56-1.25 1.25-1.25M12 7.75c.69 0 1.25.56 1.25 1.25v6c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25V9c0-.69.56-1.25 1.25-1.25M16.5 7.75c.69 0 1.25.56 1.25 1.25v6c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25V9c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

ScanBarcodeFillDuotone.displayName = 'ScanBarcodeFillDuotone';

// Triple export pattern
export { ScanBarcodeFillDuotone, ScanBarcodeFillDuotone as ScanBarcodeFillDuotoneIcon, ScanBarcodeFillDuotone as SiScanBarcodeFillDuotone };
export default ScanBarcodeFillDuotone;
export type { ScanBarcodeFillDuotoneProps };
