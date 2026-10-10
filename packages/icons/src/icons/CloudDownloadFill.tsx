import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudDownloadFillProps = Omit<IconBaseProps, 'children'>;

const CloudDownloadFill = memo(
  forwardRef<SVGSVGElement, CloudDownloadFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.13c2.77 0 5.16 1.64 6.25 4 3.13.13 5.63 2.7 5.63 5.87 0 3.24-2.64 5.88-5.88 5.88H5C2.3 19.88.13 17.68.13 15c0-2.7 2.18-4.87 4.87-4.87h.18c.43-3.39 3.32-6 6.82-6m0 4c-.48 0-.87.39-.87.87v5.89l-2.01-2c-.34-.35-.9-.35-1.24 0-.34.33-.34.89 0 1.23l3.5 3.5c.34.34.9.34 1.24 0l3.5-3.5c.34-.34.34-.9 0-1.24s-.9-.34-1.24 0l-2 2V9c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

CloudDownloadFill.displayName = 'CloudDownloadFill';

// Triple export pattern
export { CloudDownloadFill, CloudDownloadFill as CloudDownloadFillIcon, CloudDownloadFill as SiCloudDownloadFill };
export default CloudDownloadFill;
export type { CloudDownloadFillProps };
