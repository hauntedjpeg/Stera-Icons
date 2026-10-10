import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CloudBoldDuotone = memo(
  forwardRef<SVGSVGElement, CloudBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 20H5v-2h13z" opacity={.4} />
        <path d="M12 4c2.8 0 5.2 1.64 6.33 4 3.16.18 5.67 2.8 5.67 6 0 3.31-2.69 6-6 6v-2c2.2 0 4-1.8 4-4s-1.8-4-4-4l-.27.01c-.45.03-.86-.24-1.01-.67C16.03 7.4 14.18 6 12 6c-2.76 0-5 2.24-5 5v.1c0 .32-.13.62-.38.81-.24.2-.56.26-.87.18Q5.4 12 5 12c-1.66 0-3 1.34-3 3s1.34 3 3 3v2c-2.76 0-5-2.24-5-5s2.24-5 5-5h.07c.49-3.4 3.4-6 6.93-6" />
    </IconBase>
  ))
);

CloudBoldDuotone.displayName = 'CloudBoldDuotone';

// Triple export pattern
export { CloudBoldDuotone, CloudBoldDuotone as CloudBoldDuotoneIcon, CloudBoldDuotone as SiCloudBoldDuotone };
export default CloudBoldDuotone;
export type { CloudBoldDuotoneProps };
