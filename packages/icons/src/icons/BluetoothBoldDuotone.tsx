import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BluetoothBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BluetoothBoldDuotone = memo(
  forwardRef<SVGSVGElement, BluetoothBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.17 7.45c.3-.46.93-.59 1.38-.28L11 10.13v3.74l-4.45 2.96c-.45.3-1.08.18-1.38-.28-.3-.45-.18-1.08.28-1.38L10.2 12 5.45 8.83c-.46-.3-.59-.93-.28-1.38" opacity={.4} />
        <path fillRule="evenodd" d="M11.55 2.1c.34-.16.75-.13 1.05.1l6 4.5c.25.19.4.49.4.8s-.15.61-.4.8L13.67 12l4.93 3.7c.25.19.4.49.4.8s-.15.61-.4.8l-6 4.5c-.3.23-.7.26-1.05.1-.34-.17-.55-.52-.55-.9V3c0-.38.21-.73.55-.9M13 19l3.33-2.5L13 14zm0-9 3.33-2.5L13 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

BluetoothBoldDuotone.displayName = 'BluetoothBoldDuotone';

// Triple export pattern
export { BluetoothBoldDuotone, BluetoothBoldDuotone as BluetoothBoldDuotoneIcon, BluetoothBoldDuotone as SiBluetoothBoldDuotone };
export default BluetoothBoldDuotone;
export type { BluetoothBoldDuotoneProps };
