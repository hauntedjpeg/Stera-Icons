import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalMediumFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalMediumFillDuotone = memo(
  forwardRef<SVGSVGElement, SignalMediumFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.5 2.75c.97 0 1.75.78 1.75 1.75v15c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75v-15c0-.97.78-1.75 1.75-1.75z" opacity={.4} />
        <path d="M3.5 14.25c.97 0 1.75.78 1.75 1.75v3.5c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75V16c0-.97.78-1.75 1.75-1.75zM9.5 11c.97 0 1.75.78 1.75 1.75v6.75c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75v-6.75c0-.97.78-1.75 1.75-1.75zM15.5 6.5c.97 0 1.75.78 1.75 1.75V19.5c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75V8.25c0-.97.78-1.75 1.75-1.75z" />
    </IconBase>
  ))
);

SignalMediumFillDuotone.displayName = 'SignalMediumFillDuotone';

// Triple export pattern
export { SignalMediumFillDuotone, SignalMediumFillDuotone as SignalMediumFillDuotoneIcon, SignalMediumFillDuotone as SiSignalMediumFillDuotone };
export default SignalMediumFillDuotone;
export type { SignalMediumFillDuotoneProps };
