import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BluetoothFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BluetoothFillDuotone = memo(
  forwardRef<SVGSVGElement, BluetoothFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.3 7.47a.9.9 0 0 1 1.23-.17l4.6 3.45v3.5l-4.6 3.45a.88.88 0 0 1-1.06-1.4l5.07-3.8-5.07-3.8a.9.9 0 0 1-.17-1.23" opacity={.4} />
        <path d="M11.6 2.22c.3-.15.66-.12.93.08l6 4.5a.88.88 0 0 1 0 1.4L13.46 12l5.07 3.8a.88.88 0 0 1 0 1.4l-6 4.5a.88.88 0 0 1-1.4-.7V3c0-.33.18-.63.48-.78" />
    </IconBase>
  ))
);

BluetoothFillDuotone.displayName = 'BluetoothFillDuotone';

// Triple export pattern (lucide-react style)
export { BluetoothFillDuotone, BluetoothFillDuotone as BluetoothFillDuotoneIcon, BluetoothFillDuotone as SiBluetoothFillDuotone };
export default BluetoothFillDuotone;
export type { BluetoothFillDuotoneProps };
