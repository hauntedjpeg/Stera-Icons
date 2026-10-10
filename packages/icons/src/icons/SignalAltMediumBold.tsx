import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalAltMediumBoldProps = Omit<IconBaseProps, 'children'>;

const SignalAltMediumBold = memo(
  forwardRef<SVGSVGElement, SignalAltMediumBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 15.13c1.04 0 1.88.83 1.88 1.87v2c0 1.04-.84 1.88-1.88 1.88H4c-1.04 0-1.87-.84-1.87-1.88v-2c0-1.04.83-1.87 1.87-1.87zM12.5 9.13c1.04 0 1.88.83 1.88 1.87v8c0 1.04-.84 1.88-1.88 1.88h-1c-1.04 0-1.87-.84-1.87-1.88v-8c0-1.04.83-1.87 1.87-1.87z" />
    </IconBase>
  ))
);

SignalAltMediumBold.displayName = 'SignalAltMediumBold';

// Triple export pattern
export { SignalAltMediumBold, SignalAltMediumBold as SignalAltMediumBoldIcon, SignalAltMediumBold as SiSignalAltMediumBold };
export default SignalAltMediumBold;
export type { SignalAltMediumBoldProps };
