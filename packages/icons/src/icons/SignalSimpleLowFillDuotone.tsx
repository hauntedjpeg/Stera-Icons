import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalSimpleLowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalSimpleLowFillDuotone = memo(
  forwardRef<SVGSVGElement, SignalSimpleLowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.5 8.75c1.24 0 2.25 1 2.25 2.25v8c0 1.24-1 2.25-2.25 2.25h-1c-1.24 0-2.25-1-2.25-2.25v-8c0-1.24 1-2.25 2.25-2.25zM20 2.75c1.24 0 2.25 1 2.25 2.25v14c0 1.24-1 2.25-2.25 2.25h-1c-1.24 0-2.25-1-2.25-2.25V5c0-1.24 1-2.25 2.25-2.25z" opacity={0.4} />
        <path d="M5 13.75c1.24 0 2.25 1 2.25 2.25v3c0 1.24-1 2.25-2.25 2.25H4c-1.24 0-2.25-1-2.25-2.25v-3c0-1.24 1-2.25 2.25-2.25z" />
    </IconBase>
  ))
);

SignalSimpleLowFillDuotone.displayName = 'SignalSimpleLowFillDuotone';

// Triple export pattern
export { SignalSimpleLowFillDuotone, SignalSimpleLowFillDuotone as SignalSimpleLowFillDuotoneIcon, SignalSimpleLowFillDuotone as SiSignalSimpleLowFillDuotone };
export default SignalSimpleLowFillDuotone;
export type { SignalSimpleLowFillDuotoneProps };
