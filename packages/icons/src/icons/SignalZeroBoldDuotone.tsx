import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalZeroBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalZeroBoldDuotone = memo(
  forwardRef<SVGSVGElement, SignalZeroBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.5 11.25c.83 0 1.5.67 1.5 1.5v6.75c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-6.75c0-.83.67-1.5 1.5-1.5zM15.5 6.75c.83 0 1.5.67 1.5 1.5V19.5c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5V8.25c0-.83.67-1.5 1.5-1.5zM21.5 3c.83 0 1.5.67 1.5 1.5v15c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-15c0-.83.67-1.5 1.5-1.5z" opacity={0.4} />
        <path d="M3.5 14.5c.83 0 1.5.67 1.5 1.5v3.5c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5V16c0-.83.67-1.5 1.5-1.5z" />
    </IconBase>
  ))
);

SignalZeroBoldDuotone.displayName = 'SignalZeroBoldDuotone';

// Triple export pattern
export { SignalZeroBoldDuotone, SignalZeroBoldDuotone as SignalZeroBoldDuotoneIcon, SignalZeroBoldDuotone as SiSignalZeroBoldDuotone };
export default SignalZeroBoldDuotone;
export type { SignalZeroBoldDuotoneProps };
