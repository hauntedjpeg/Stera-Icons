import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalSimpleMediumBoldProps = Omit<IconBaseProps, 'children'>;

const SignalSimpleMediumBold = memo(
  forwardRef<SVGSVGElement, SignalSimpleMediumBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 14.13c1.04 0 1.88.83 1.88 1.87v3c0 1.04-.84 1.88-1.88 1.88H4c-1.04 0-1.87-.84-1.87-1.88v-3c0-1.04.83-1.87 1.87-1.87zM12.5 9.13c1.04 0 1.88.83 1.88 1.87v8c0 1.04-.84 1.88-1.88 1.88h-1c-1.04 0-1.87-.84-1.87-1.88v-8c0-1.04.83-1.87 1.87-1.87z" />
    </IconBase>
  ))
);

SignalSimpleMediumBold.displayName = 'SignalSimpleMediumBold';

// Triple export pattern
export { SignalSimpleMediumBold, SignalSimpleMediumBold as SignalSimpleMediumBoldIcon, SignalSimpleMediumBold as SiSignalSimpleMediumBold };
export default SignalSimpleMediumBold;
export type { SignalSimpleMediumBoldProps };
