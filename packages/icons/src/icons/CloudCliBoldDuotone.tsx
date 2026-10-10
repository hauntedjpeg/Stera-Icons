import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudCliBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CloudCliBoldDuotone = memo(
  forwardRef<SVGSVGElement, CloudCliBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4c2.8 0 5.2 1.64 6.33 4 3.16.18 5.67 2.8 5.67 6 0 .55-.45 1-1 1s-1-.45-1-1c0-2.2-1.8-4-4-4l-.27.01c-.45.03-.86-.24-1.01-.67C16.03 7.4 14.18 6 12 6c-2.76 0-5 2.24-5 5v.1c0 .32-.13.62-.38.81-.24.2-.56.26-.87.18Q5.4 12 5 12c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c.55 0 1 .45 1 1s-.45 1-1 1H5c-2.76 0-5-2.24-5-5s2.24-5 5-5h.07c.49-3.4 3.4-6 6.93-6" opacity={.4} />
        <path d="M12.3 11.3c.38-.4 1.02-.4 1.4 0l3.5 3.5c.4.38.4 1.02 0 1.4l-3.5 3.5c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l2.79-2.8-2.8-2.8c-.39-.38-.39-1.02 0-1.4M23 18c.55 0 1 .45 1 1s-.45 1-1 1h-4.5c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

CloudCliBoldDuotone.displayName = 'CloudCliBoldDuotone';

// Triple export pattern
export { CloudCliBoldDuotone, CloudCliBoldDuotone as CloudCliBoldDuotoneIcon, CloudCliBoldDuotone as SiCloudCliBoldDuotone };
export default CloudCliBoldDuotone;
export type { CloudCliBoldDuotoneProps };
