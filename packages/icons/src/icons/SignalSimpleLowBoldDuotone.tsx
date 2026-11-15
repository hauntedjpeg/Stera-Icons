import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalSimpleLowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalSimpleLowBoldDuotone = memo(
  forwardRef<SVGSVGElement, SignalSimpleLowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.5 9.13c1.04 0 1.88.83 1.88 1.87v8c0 1.04-.84 1.88-1.88 1.88h-1c-1.04 0-1.87-.84-1.87-1.88v-8c0-1.04.83-1.87 1.87-1.87zM20 3.13c1.04 0 1.88.83 1.88 1.87v14c0 1.04-.84 1.88-1.88 1.88h-1c-1.04 0-1.87-.84-1.87-1.88V5c0-1.04.83-1.87 1.87-1.87z" opacity={0.4} />
        <path d="M5 14.13c1.04 0 1.88.83 1.88 1.87v3c0 1.04-.84 1.88-1.88 1.88H4c-1.04 0-1.87-.84-1.87-1.88v-3c0-1.04.83-1.87 1.87-1.87z" />
    </IconBase>
  ))
);

SignalSimpleLowBoldDuotone.displayName = 'SignalSimpleLowBoldDuotone';

// Triple export pattern
export { SignalSimpleLowBoldDuotone, SignalSimpleLowBoldDuotone as SignalSimpleLowBoldDuotoneIcon, SignalSimpleLowBoldDuotone as SiSignalSimpleLowBoldDuotone };
export default SignalSimpleLowBoldDuotone;
export type { SignalSimpleLowBoldDuotoneProps };
