import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalSimpleMediumFillProps = Omit<IconBaseProps, 'children'>;

const SignalSimpleMediumFill = memo(
  forwardRef<SVGSVGElement, SignalSimpleMediumFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 13.75c1.24 0 2.25 1 2.25 2.25v3c0 1.24-1 2.25-2.25 2.25H4c-1.24 0-2.25-1-2.25-2.25v-3c0-1.24 1-2.25 2.25-2.25zM12.5 8.75c1.24 0 2.25 1 2.25 2.25v8c0 1.24-1 2.25-2.25 2.25h-1c-1.24 0-2.25-1-2.25-2.25v-8c0-1.24 1-2.25 2.25-2.25z" />
    </IconBase>
  ))
);

SignalSimpleMediumFill.displayName = 'SignalSimpleMediumFill';

// Triple export pattern
export { SignalSimpleMediumFill, SignalSimpleMediumFill as SignalSimpleMediumFillIcon, SignalSimpleMediumFill as SiSignalSimpleMediumFill };
export default SignalSimpleMediumFill;
export type { SignalSimpleMediumFillProps };
