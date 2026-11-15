import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalSimpleHighRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalSimpleHighRegularDuotone = memo(
  forwardRef<SVGSVGElement, SignalSimpleHighRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 14.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5H4c-.83 0-1.5-.67-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5zM12.5 9.5c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-8c0-.83.67-1.5 1.5-1.5zM20 3.5c.83 0 1.5.67 1.5 1.5v14c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5V5c0-.83.67-1.5 1.5-1.5z" />
    </IconBase>
  ))
);

SignalSimpleHighRegularDuotone.displayName = 'SignalSimpleHighRegularDuotone';

// Triple export pattern
export { SignalSimpleHighRegularDuotone, SignalSimpleHighRegularDuotone as SignalSimpleHighRegularDuotoneIcon, SignalSimpleHighRegularDuotone as SiSignalSimpleHighRegularDuotone };
export default SignalSimpleHighRegularDuotone;
export type { SignalSimpleHighRegularDuotoneProps };
