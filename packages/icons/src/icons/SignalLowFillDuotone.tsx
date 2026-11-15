import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalLowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalLowFillDuotone = memo(
  forwardRef<SVGSVGElement, SignalLowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.5 6.5c.97 0 1.75.78 1.75 1.75V19.5c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75V8.25c0-.97.78-1.75 1.75-1.75zM21.5 2.75c.97 0 1.75.78 1.75 1.75v15c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75v-15c0-.97.78-1.75 1.75-1.75z" opacity={0.4} />
        <path d="M3.5 14.25c.97 0 1.75.78 1.75 1.75v3.5c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75V16c0-.97.78-1.75 1.75-1.75zM9.5 11c.97 0 1.75.78 1.75 1.75v6.75c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75v-6.75c0-.97.78-1.75 1.75-1.75z" />
    </IconBase>
  ))
);

SignalLowFillDuotone.displayName = 'SignalLowFillDuotone';

// Triple export pattern
export { SignalLowFillDuotone, SignalLowFillDuotone as SignalLowFillDuotoneIcon, SignalLowFillDuotone as SiSignalLowFillDuotone };
export default SignalLowFillDuotone;
export type { SignalLowFillDuotoneProps };
