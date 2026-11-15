import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalZeroRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalZeroRegularDuotone = memo(
  forwardRef<SVGSVGElement, SignalZeroRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.5 11.75c.55 0 1 .45 1 1v6.75c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-6.75c0-.55.45-1 1-1zM15.5 7.25c.55 0 1 .45 1 1V19.5c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1V8.25c0-.55.45-1 1-1zM21.5 3.5c.55 0 1 .45 1 1v15c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-15c0-.55.45-1 1-1z" opacity={0.4} />
        <path d="M3.5 15c.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1V16c0-.55.45-1 1-1z" />
    </IconBase>
  ))
);

SignalZeroRegularDuotone.displayName = 'SignalZeroRegularDuotone';

// Triple export pattern
export { SignalZeroRegularDuotone, SignalZeroRegularDuotone as SignalZeroRegularDuotoneIcon, SignalZeroRegularDuotone as SiSignalZeroRegularDuotone };
export default SignalZeroRegularDuotone;
export type { SignalZeroRegularDuotoneProps };
