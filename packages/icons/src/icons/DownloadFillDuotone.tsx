import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DownloadFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DownloadFillDuotone = memo(
  forwardRef<SVGSVGElement, DownloadFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.5 14.63c.48 0 .88.39.88.87 0 1.32 0 2.2-.25 2.95-.44 1.25-1.43 2.24-2.68 2.68-.74.26-1.63.25-2.95.25h-7c-1.32 0-2.2 0-2.95-.25-1.25-.44-2.24-1.43-2.68-2.68-.26-.74-.24-1.63-.24-2.95 0-.48.39-.87.87-.87s.88.39.88.87c0 1.47 0 1.98.14 2.37.27.75.86 1.34 1.61 1.6.39.14.9.16 2.37.16h7c1.47 0 1.98-.02 2.37-.15.75-.27 1.34-.86 1.6-1.61.14-.39.16-.9.16-2.37 0-.48.39-.87.87-.87" opacity={.4} />
        <path d="M12 2.63c.48 0 .87.39.87.87v5.63h4.63c.35 0 .67.2.8.54.14.32.07.7-.18.95l-5.5 5.5q-.27.24-.62.25-.31 0-.56-.2l-.06-.05-5.5-5.5c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.8-.54h4.63V3.5c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

DownloadFillDuotone.displayName = 'DownloadFillDuotone';

// Triple export pattern
export { DownloadFillDuotone, DownloadFillDuotone as DownloadFillDuotoneIcon, DownloadFillDuotone as SiDownloadFillDuotone };
export default DownloadFillDuotone;
export type { DownloadFillDuotoneProps };
