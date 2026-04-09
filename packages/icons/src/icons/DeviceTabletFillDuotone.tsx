import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeviceTabletFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DeviceTabletFillDuotone = memo(
  forwardRef<SVGSVGElement, DeviceTabletFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-tablet-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M15.2 1.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v10.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H8.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V6.8q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zM12 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path d="M10.5,17.5a1.5,1.5,0,1,0,3,0a1.5,1.5,0,1,0,-3,0z" />
    </IconBase>
  ))
);

DeviceTabletFillDuotone.displayName = 'DeviceTabletFillDuotone';

// Triple export pattern (lucide-react style)
export { DeviceTabletFillDuotone, DeviceTabletFillDuotone as DeviceTabletFillDuotoneIcon, DeviceTabletFillDuotone as SiDeviceTabletFillDuotone };
export default DeviceTabletFillDuotone;
export type { DeviceTabletFillDuotoneProps };
