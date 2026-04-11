import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BluetoothFillProps = Omit<IconBaseProps, 'children'>;

const BluetoothFill = memo(
  forwardRef<SVGSVGElement, BluetoothFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.6 2.22c.3-.15.66-.12.93.08l6 4.5a.88.88 0 0 1 0 1.4L13.46 12l5.07 3.8a.88.88 0 0 1 0 1.4l-6 4.5a.88.88 0 0 1-1.4-.7v-7.25l-4.6 3.45a.88.88 0 0 1-1.06-1.4l5.07-3.8-5.07-3.8a.88.88 0 0 1 1.06-1.4l4.6 3.45V3c0-.33.18-.63.48-.78" />
    </IconBase>
  ))
);

BluetoothFill.displayName = 'BluetoothFill';

// Triple export pattern (lucide-react style)
export { BluetoothFill, BluetoothFill as BluetoothFillIcon, BluetoothFill as SiBluetoothFill };
export default BluetoothFill;
export type { BluetoothFillProps };
