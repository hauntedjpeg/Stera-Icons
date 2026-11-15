import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalLowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalLowBoldDuotone = memo(
  forwardRef<SVGSVGElement, SignalLowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.5 6.75c.83 0 1.5.67 1.5 1.5V19.5c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5V8.25c0-.83.67-1.5 1.5-1.5zM21.5 3c.83 0 1.5.67 1.5 1.5v15c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-15c0-.83.67-1.5 1.5-1.5z" opacity={0.4} />
        <path d="M3.5 14.5c.83 0 1.5.67 1.5 1.5v3.5c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5V16c0-.83.67-1.5 1.5-1.5zM9.5 11.25c.83 0 1.5.67 1.5 1.5v6.75c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-6.75c0-.83.67-1.5 1.5-1.5z" />
    </IconBase>
  ))
);

SignalLowBoldDuotone.displayName = 'SignalLowBoldDuotone';

// Triple export pattern
export { SignalLowBoldDuotone, SignalLowBoldDuotone as SignalLowBoldDuotoneIcon, SignalLowBoldDuotone as SiSignalLowBoldDuotone };
export default SignalLowBoldDuotone;
export type { SignalLowBoldDuotoneProps };
