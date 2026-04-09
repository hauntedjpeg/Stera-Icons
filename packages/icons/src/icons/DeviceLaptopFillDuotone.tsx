import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeviceLaptopFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DeviceLaptopFillDuotone = memo(
  forwardRef<SVGSVGElement, DeviceLaptopFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-laptop-fill-duotone" {...props}>
      <path d="M20.38 14.45q.1.16.18.35l1.2 3a1.87 1.87 0 0 1-1.74 2.57H3.98a1.87 1.87 0 0 1-1.74-2.57l1.2-3q.07-.18.19-.35v.05c0 .48.39.87.87.88h15c.48 0 .88-.4.88-.88z" opacity={.4} />
        <path d="M16.3 3.63q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.56.04 1.38v6.8c0 .48-.4.88-.88.88h-15a.9.9 0 0 1-.87-.88V7.7q0-.82.03-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04z" />
    </IconBase>
  ))
);

DeviceLaptopFillDuotone.displayName = 'DeviceLaptopFillDuotone';

// Triple export pattern (lucide-react style)
export { DeviceLaptopFillDuotone, DeviceLaptopFillDuotone as DeviceLaptopFillDuotoneIcon, DeviceLaptopFillDuotone as SiDeviceLaptopFillDuotone };
export default DeviceLaptopFillDuotone;
export type { DeviceLaptopFillDuotoneProps };
