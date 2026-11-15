import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalSimpleMediumFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalSimpleMediumFillDuotone = memo(
  forwardRef<SVGSVGElement, SignalSimpleMediumFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 2.75c1.24 0 2.25 1 2.25 2.25v14c0 1.24-1 2.25-2.25 2.25h-1c-1.24 0-2.25-1-2.25-2.25V5c0-1.24 1-2.25 2.25-2.25z" opacity={.4} />
        <path d="M5 13.75c1.24 0 2.25 1 2.25 2.25v3c0 1.24-1 2.25-2.25 2.25H4c-1.24 0-2.25-1-2.25-2.25v-3c0-1.24 1-2.25 2.25-2.25zM12.5 8.75c1.24 0 2.25 1 2.25 2.25v8c0 1.24-1 2.25-2.25 2.25h-1c-1.24 0-2.25-1-2.25-2.25v-8c0-1.24 1-2.25 2.25-2.25z" />
    </IconBase>
  ))
);

SignalSimpleMediumFillDuotone.displayName = 'SignalSimpleMediumFillDuotone';

// Triple export pattern
export { SignalSimpleMediumFillDuotone, SignalSimpleMediumFillDuotone as SignalSimpleMediumFillDuotoneIcon, SignalSimpleMediumFillDuotone as SiSignalSimpleMediumFillDuotone };
export default SignalSimpleMediumFillDuotone;
export type { SignalSimpleMediumFillDuotoneProps };
