import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalSimpleLowBoldProps = Omit<IconBaseProps, 'children'>;

const SignalSimpleLowBold = memo(
  forwardRef<SVGSVGElement, SignalSimpleLowBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 14.13c1.04 0 1.88.83 1.88 1.87v3c0 1.04-.84 1.88-1.88 1.88H4c-1.04 0-1.87-.84-1.87-1.88v-3c0-1.04.83-1.87 1.87-1.87z" />
    </IconBase>
  ))
);

SignalSimpleLowBold.displayName = 'SignalSimpleLowBold';

// Triple export pattern
export { SignalSimpleLowBold, SignalSimpleLowBold as SignalSimpleLowBoldIcon, SignalSimpleLowBold as SiSignalSimpleLowBold };
export default SignalSimpleLowBold;
export type { SignalSimpleLowBoldProps };
