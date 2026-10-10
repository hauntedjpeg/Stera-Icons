import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DownloadFillProps = Omit<IconBaseProps, 'children'>;

const DownloadFill = memo(
  forwardRef<SVGSVGElement, DownloadFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.5 14.63c.48 0 .88.39.88.87 0 1.32 0 2.2-.25 2.95-.44 1.25-1.43 2.24-2.68 2.68-.74.26-1.63.25-2.95.25h-7c-1.32 0-2.2 0-2.95-.25-1.25-.44-2.24-1.43-2.68-2.68-.26-.74-.24-1.63-.24-2.95 0-.48.39-.87.87-.87s.88.39.88.87c0 1.47 0 1.98.14 2.37.27.75.86 1.34 1.61 1.6.39.14.9.16 2.37.16h7c1.47 0 1.98-.02 2.37-.15.75-.27 1.34-.86 1.6-1.61.14-.39.16-.9.16-2.37 0-.48.39-.87.87-.87" />
        <path d="M12 2.63c.48 0 .88.39.88.87v5.63h4.62c.35 0 .67.2.8.54.14.32.07.7-.18.95l-5.5 5.5q-.26.24-.62.25-.31 0-.55-.2l-.07-.05-5.5-5.5c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54h4.63V3.5c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

DownloadFill.displayName = 'DownloadFill';

// Triple export pattern
export { DownloadFill, DownloadFill as DownloadFillIcon, DownloadFill as SiDownloadFill };
export default DownloadFill;
export type { DownloadFillProps };
