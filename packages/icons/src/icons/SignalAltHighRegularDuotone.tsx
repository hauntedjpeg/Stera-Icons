import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalAltHighRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalAltHighRegularDuotone = memo(
  forwardRef<SVGSVGElement, SignalAltHighRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 15.5c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H4c-.83 0-1.5-.67-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5zM12.5 9.5c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-8c0-.83.67-1.5 1.5-1.5zM20 3.5c.83 0 1.5.67 1.5 1.5v14c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5V5c0-.83.67-1.5 1.5-1.5z" />
    </IconBase>
  ))
);

SignalAltHighRegularDuotone.displayName = 'SignalAltHighRegularDuotone';

// Triple export pattern
export { SignalAltHighRegularDuotone, SignalAltHighRegularDuotone as SignalAltHighRegularDuotoneIcon, SignalAltHighRegularDuotone as SiSignalAltHighRegularDuotone };
export default SignalAltHighRegularDuotone;
export type { SignalAltHighRegularDuotoneProps };
