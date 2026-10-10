import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BluetoothFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BluetoothFillDuotone = memo(
  forwardRef<SVGSVGElement, BluetoothFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.3 7.47c.29-.38.84-.46 1.23-.17l4.6 3.45v3.5l-4.6 3.45c-.4.29-.94.21-1.23-.17-.29-.4-.21-.94.17-1.23l5.07-3.8-5.07-3.8c-.38-.29-.46-.84-.17-1.23" opacity={.4} />
        <path d="M11.6 2.22c.3-.15.66-.12.93.08l6 4.5q.33.27.34.7c0 .28-.12.54-.34.7L13.46 12l5.07 3.8q.33.27.34.7 0 .44-.34.7l-6 4.5c-.27.2-.63.23-.92.08s-.48-.45-.48-.78V3c0-.33.18-.63.48-.78" />
    </IconBase>
  ))
);

BluetoothFillDuotone.displayName = 'BluetoothFillDuotone';

// Triple export pattern
export { BluetoothFillDuotone, BluetoothFillDuotone as BluetoothFillDuotoneIcon, BluetoothFillDuotone as SiBluetoothFillDuotone };
export default BluetoothFillDuotone;
export type { BluetoothFillDuotoneProps };
