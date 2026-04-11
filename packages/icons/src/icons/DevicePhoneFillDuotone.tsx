import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DevicePhoneFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DevicePhoneFillDuotone = memo(
  forwardRef<SVGSVGElement, DevicePhoneFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.2 1.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v10.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V6.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zM11 5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path d="M13 5a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

DevicePhoneFillDuotone.displayName = 'DevicePhoneFillDuotone';

// Triple export pattern (lucide-react style)
export { DevicePhoneFillDuotone, DevicePhoneFillDuotone as DevicePhoneFillDuotoneIcon, DevicePhoneFillDuotone as SiDevicePhoneFillDuotone };
export default DevicePhoneFillDuotone;
export type { DevicePhoneFillDuotoneProps };
