import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudDownloadFillProps = Omit<IconBaseProps, 'children'>;

const CloudDownloadFill = memo(
  forwardRef<SVGSVGElement, CloudDownloadFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.13a6.9 6.9 0 0 1 6.25 4A5.87 5.87 0 0 1 18 19.88H5a4.87 4.87 0 1 1 0-9.75h.18c.43-3.39 3.32-6 6.82-6m0 4c-.48 0-.87.39-.87.87v5.89l-2.01-2a.88.88 0 0 0-1.24 1.23l3.5 3.5c.34.34.9.34 1.24 0l3.5-3.5a.88.88 0 0 0-1.24-1.24l-2 2V9c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

CloudDownloadFill.displayName = 'CloudDownloadFill';

// Triple export pattern (lucide-react style)
export { CloudDownloadFill, CloudDownloadFill as CloudDownloadFillIcon, CloudDownloadFill as SiCloudDownloadFill };
export default CloudDownloadFill;
export type { CloudDownloadFillProps };
