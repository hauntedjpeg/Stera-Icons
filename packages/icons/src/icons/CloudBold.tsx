import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudBoldProps = Omit<IconBaseProps, 'children'>;

const CloudBold = memo(
  forwardRef<SVGSVGElement, CloudBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4c2.8 0 5.2 1.64 6.33 4 3.16.18 5.67 2.8 5.67 6 0 3.31-2.69 6-6 6H5c-2.76 0-5-2.24-5-5s2.24-5 5-5h.07c.49-3.4 3.4-6 6.93-6m0 2c-2.76 0-5 2.24-5 5v.1c0 .32-.13.62-.38.81-.24.2-.56.26-.87.18Q5.4 12 5 12c-1.66 0-3 1.34-3 3s1.34 3 3 3h13c2.2 0 4-1.8 4-4s-1.8-4-4-4l-.27.01c-.45.03-.86-.24-1.01-.67C16.03 7.4 14.18 6 12 6" clipRule="evenodd" />
    </IconBase>
  ))
);

CloudBold.displayName = 'CloudBold';

// Triple export pattern
export { CloudBold, CloudBold as CloudBoldIcon, CloudBold as SiCloudBold };
export default CloudBold;
export type { CloudBoldProps };
