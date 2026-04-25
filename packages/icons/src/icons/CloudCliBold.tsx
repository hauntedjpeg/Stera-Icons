import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudCliBoldProps = Omit<IconBaseProps, 'children'>;

const CloudCliBold = memo(
  forwardRef<SVGSVGElement, CloudCliBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4a7 7 0 0 1 6.33 4A6 6 0 0 1 24 14a1 1 0 1 1-2 0 4 4 0 0 0-4.27-3.99 1 1 0 0 1-1.01-.67A5 5 0 0 0 7 11v.1a1 1 0 0 1-1.25 1A3 3 0 1 0 5 18h3a1 1 0 1 1 0 2H5a5 5 0 0 1 0-10h.07A7 7 0 0 1 12 4" />
        <path d="M12.3 11.3a1 1 0 0 1 1.4 0l3.5 3.5a1 1 0 0 1 0 1.4l-3.5 3.5a1 1 0 1 1-1.4-1.4l2.79-2.8-2.8-2.8a1 1 0 0 1 0-1.4M23 18a1 1 0 1 1 0 2h-4.5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

CloudCliBold.displayName = 'CloudCliBold';

// Triple export pattern (lucide-react style)
export { CloudCliBold, CloudCliBold as CloudCliBoldIcon, CloudCliBold as SiCloudCliBold };
export default CloudCliBold;
export type { CloudCliBoldProps };
