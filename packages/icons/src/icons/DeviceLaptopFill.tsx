import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeviceLaptopFillProps = Omit<IconBaseProps, 'children'>;

const DeviceLaptopFill = memo(
  forwardRef<SVGSVGElement, DeviceLaptopFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.3 3.63q.81 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.56.03 1.38v6.75q.11.16.2.35l1.2 3a1.87 1.87 0 0 1-1.75 2.57H3.98a1.87 1.87 0 0 1-1.74-2.57l1.2-3q.07-.18.18-.35V7.7q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.55-.05 1.38-.04zM5.18 15.38q-.08 0-.12.07l-1.2 3q-.03.15.12.18h16.04c.1 0 .15-.1.12-.18l-1.2-3a.1.1 0 0 0-.12-.07z" clipRule="evenodd" />
    </IconBase>
  ))
);

DeviceLaptopFill.displayName = 'DeviceLaptopFill';

// Triple export pattern (lucide-react style)
export { DeviceLaptopFill, DeviceLaptopFill as DeviceLaptopFillIcon, DeviceLaptopFill as SiDeviceLaptopFill };
export default DeviceLaptopFill;
export type { DeviceLaptopFillProps };
