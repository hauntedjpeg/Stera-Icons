import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalAltHighRegularProps = Omit<IconBaseProps, 'children'>;

const SignalAltHighRegular = memo(
  forwardRef<SVGSVGElement, SignalAltHighRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 15.5c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H4c-.83 0-1.5-.67-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5zM12.5 9.5c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-8c0-.83.67-1.5 1.5-1.5zM20 3.5c.83 0 1.5.67 1.5 1.5v14c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5V5c0-.83.67-1.5 1.5-1.5z" />
    </IconBase>
  ))
);

SignalAltHighRegular.displayName = 'SignalAltHighRegular';

// Triple export pattern
export { SignalAltHighRegular, SignalAltHighRegular as SignalAltHighRegularIcon, SignalAltHighRegular as SiSignalAltHighRegular };
export default SignalAltHighRegular;
export type { SignalAltHighRegularProps };
