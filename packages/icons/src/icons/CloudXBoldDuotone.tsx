import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudXBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CloudXBoldDuotone = memo(
  forwardRef<SVGSVGElement, CloudXBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4c2.8 0 5.2 1.64 6.33 4 3.16.18 5.67 2.8 5.67 6 0 3.31-2.69 6-6 6H5c-2.76 0-5-2.24-5-5s2.24-5 5-5h.07c.49-3.4 3.4-6 6.93-6m0 2c-2.76 0-5 2.24-5 5v.1c0 .32-.13.62-.38.81-.24.2-.56.26-.87.18Q5.4 12 5 12c-1.66 0-3 1.34-3 3s1.34 3 3 3h13c2.2 0 4-1.8 4-4s-1.8-4-4-4l-.27.01c-.45.03-.86-.24-1.01-.67C16.03 7.4 14.18 6 12 6" clipRule="evenodd" opacity={.4} />
        <path d="M13.3 10.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L13.42 13l1.3 1.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0L12 14.42l-1.3 1.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L10.58 13l-1.3-1.3c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0L12 11.58z" />
    </IconBase>
  ))
);

CloudXBoldDuotone.displayName = 'CloudXBoldDuotone';

// Triple export pattern
export { CloudXBoldDuotone, CloudXBoldDuotone as CloudXBoldDuotoneIcon, CloudXBoldDuotone as SiCloudXBoldDuotone };
export default CloudXBoldDuotone;
export type { CloudXBoldDuotoneProps };
