import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalSimpleMediumBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalSimpleMediumBoldDuotone = memo(
  forwardRef<SVGSVGElement, SignalSimpleMediumBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 3.13c1.04 0 1.88.83 1.88 1.87v14c0 1.04-.84 1.88-1.88 1.88h-1c-1.04 0-1.87-.84-1.87-1.88V5c0-1.04.83-1.87 1.87-1.87z" opacity={.4} />
        <path d="M5 14.13c1.04 0 1.88.83 1.88 1.87v3c0 1.04-.84 1.88-1.88 1.88H4c-1.04 0-1.87-.84-1.87-1.88v-3c0-1.04.83-1.87 1.87-1.87zM12.5 9.13c1.04 0 1.88.83 1.88 1.87v8c0 1.04-.84 1.88-1.88 1.88h-1c-1.04 0-1.87-.84-1.87-1.88v-8c0-1.04.83-1.87 1.87-1.87z" />
    </IconBase>
  ))
);

SignalSimpleMediumBoldDuotone.displayName = 'SignalSimpleMediumBoldDuotone';

// Triple export pattern
export { SignalSimpleMediumBoldDuotone, SignalSimpleMediumBoldDuotone as SignalSimpleMediumBoldDuotoneIcon, SignalSimpleMediumBoldDuotone as SiSignalSimpleMediumBoldDuotone };
export default SignalSimpleMediumBoldDuotone;
export type { SignalSimpleMediumBoldDuotoneProps };
