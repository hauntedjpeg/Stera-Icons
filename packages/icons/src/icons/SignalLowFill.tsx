import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalLowFillProps = Omit<IconBaseProps, 'children'>;

const SignalLowFill = memo(
  forwardRef<SVGSVGElement, SignalLowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 14.25c.97 0 1.75.78 1.75 1.75v3.5c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75V16c0-.97.78-1.75 1.75-1.75zM9.5 11c.97 0 1.75.78 1.75 1.75v6.75c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75v-6.75c0-.97.78-1.75 1.75-1.75z" />
    </IconBase>
  ))
);

SignalLowFill.displayName = 'SignalLowFill';

// Triple export pattern
export { SignalLowFill, SignalLowFill as SignalLowFillIcon, SignalLowFill as SiSignalLowFill };
export default SignalLowFill;
export type { SignalLowFillProps };
