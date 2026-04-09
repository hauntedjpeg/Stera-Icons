import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeviceDesktopFillProps = Omit<IconBaseProps, 'children'>;

const DeviceDesktopFill = memo(
  forwardRef<SVGSVGElement, DeviceDesktopFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-desktop-fill" {...props}>
      <path fillRule="evenodd" d="M15.7 3.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v2.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.73.05-1.8.04c.11 1.01.42 2.08.65 2.78a1.4 1.4 0 0 1-1.32 1.84H8.74a1.4 1.4 0 0 1-1.32-1.84l.11-.35c.22-.68.45-1.58.55-2.43H7.5q-1.03.01-1.7-.04a3 3 0 0 1-1.28-.31c-.6-.32-1.1-.81-1.42-1.42q-.28-.59-.31-1.28-.05-.67-.04-1.7V8.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zM9.83 16.88c-.11 1-.38 2.01-.6 2.75h5.54c-.22-.74-.49-1.75-.6-2.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

DeviceDesktopFill.displayName = 'DeviceDesktopFill';

// Triple export pattern (lucide-react style)
export { DeviceDesktopFill, DeviceDesktopFill as DeviceDesktopFillIcon, DeviceDesktopFill as SiDeviceDesktopFill };
export default DeviceDesktopFill;
export type { DeviceDesktopFillProps };
