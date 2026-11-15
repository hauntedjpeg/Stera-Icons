import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalSimpleLowFillProps = Omit<IconBaseProps, 'children'>;

const SignalSimpleLowFill = memo(
  forwardRef<SVGSVGElement, SignalSimpleLowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 13.75c1.24 0 2.25 1 2.25 2.25v3c0 1.24-1 2.25-2.25 2.25H4c-1.24 0-2.25-1-2.25-2.25v-3c0-1.24 1-2.25 2.25-2.25z" />
    </IconBase>
  ))
);

SignalSimpleLowFill.displayName = 'SignalSimpleLowFill';

// Triple export pattern
export { SignalSimpleLowFill, SignalSimpleLowFill as SignalSimpleLowFillIcon, SignalSimpleLowFill as SiSignalSimpleLowFill };
export default SignalSimpleLowFill;
export type { SignalSimpleLowFillProps };
