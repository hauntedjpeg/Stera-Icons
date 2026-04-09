import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DownloadFillProps = Omit<IconBaseProps, 'children'>;

const DownloadFill = memo(
  forwardRef<SVGSVGElement, DownloadFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="download-fill" {...props}>
      <path d="M20.5 14.63c.48 0 .87.39.87.87 0 1.32.02 2.2-.24 2.95a4.4 4.4 0 0 1-2.68 2.68c-.74.26-1.63.25-2.95.25h-7c-1.32 0-2.2 0-2.95-.25a4.4 4.4 0 0 1-2.68-2.68c-.26-.74-.25-1.63-.25-2.95a.88.88 0 0 1 1.75 0c0 1.47.02 1.98.15 2.37.27.75.86 1.34 1.61 1.6.39.14.9.16 2.37.16h7c1.47 0 1.98-.02 2.37-.15a2.6 2.6 0 0 0 1.6-1.61c.14-.39.15-.9.15-2.37 0-.48.4-.87.88-.87" />
        <path d="M12 2.63c.48 0 .87.39.87.87v5.63h4.63a.88.88 0 0 1 .62 1.49l-5.5 5.5a.9.9 0 0 1-1.17.06l-.07-.06-5.5-5.5a.88.88 0 0 1 .62-1.5h4.62V3.5c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

DownloadFill.displayName = 'DownloadFill';

// Triple export pattern (lucide-react style)
export { DownloadFill, DownloadFill as DownloadFillIcon, DownloadFill as SiDownloadFill };
export default DownloadFill;
export type { DownloadFillProps };
