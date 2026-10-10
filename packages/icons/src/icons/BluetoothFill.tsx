import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BluetoothFillProps = Omit<IconBaseProps, 'children'>;

const BluetoothFill = memo(
  forwardRef<SVGSVGElement, BluetoothFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.6 2.22c.3-.15.66-.12.93.08l6 4.5q.34.27.35.7-.01.44-.35.7L13.46 12l5.07 3.8q.34.27.35.7-.01.44-.35.7l-6 4.5c-.27.2-.63.23-.92.08s-.48-.45-.48-.78v-7.25l-4.6 3.45c-.4.29-.94.21-1.23-.17-.29-.4-.21-.94.17-1.23l5.07-3.8-5.07-3.8c-.38-.29-.46-.84-.17-1.23.29-.38.84-.46 1.23-.17l4.6 3.45V3c0-.33.18-.63.48-.78" />
    </IconBase>
  ))
);

BluetoothFill.displayName = 'BluetoothFill';

// Triple export pattern
export { BluetoothFill, BluetoothFill as BluetoothFillIcon, BluetoothFill as SiBluetoothFill };
export default BluetoothFill;
export type { BluetoothFillProps };
