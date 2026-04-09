import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanBarcodeFillProps = Omit<IconBaseProps, 'children'>;

const ScanBarcodeFill = memo(
  forwardRef<SVGSVGElement, ScanBarcodeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-barcode-fill" {...props}>
      <path d="M3 13.75c.69 0 1.25.56 1.25 1.25v1.75c0 .83.67 1.5 1.5 1.5H7.5a1.25 1.25 0 1 1 0 2.5H5.75a4 4 0 0 1-4-4V15c0-.69.56-1.25 1.25-1.25M21 13.75c.69 0 1.25.56 1.25 1.25v1.75a4 4 0 0 1-4 4H16.5a1.25 1.25 0 1 1 0-2.5h1.75c.83 0 1.5-.67 1.5-1.5V15c0-.69.56-1.25 1.25-1.25M7.5 7.75c.69 0 1.25.56 1.25 1.25v6a1.25 1.25 0 1 1-2.5 0V9c0-.69.56-1.25 1.25-1.25M12 7.75c.69 0 1.25.56 1.25 1.25v6a1.25 1.25 0 1 1-2.5 0V9c0-.69.56-1.25 1.25-1.25M16.5 7.75c.69 0 1.25.56 1.25 1.25v6a1.25 1.25 0 1 1-2.5 0V9c0-.69.56-1.25 1.25-1.25M7.5 3.25a1.25 1.25 0 1 1 0 2.5H5.75c-.83 0-1.5.67-1.5 1.5V9a1.25 1.25 0 1 1-2.5 0V7.25a4 4 0 0 1 4-4zM18.25 3.25a4 4 0 0 1 4 4V9a1.25 1.25 0 1 1-2.5 0V7.25c0-.83-.67-1.5-1.5-1.5H16.5a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

ScanBarcodeFill.displayName = 'ScanBarcodeFill';

// Triple export pattern (lucide-react style)
export { ScanBarcodeFill, ScanBarcodeFill as ScanBarcodeFillIcon, ScanBarcodeFill as SiScanBarcodeFill };
export default ScanBarcodeFill;
export type { ScanBarcodeFillProps };
