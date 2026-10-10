import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalZeroRegularProps = Omit<IconBaseProps, 'children'>;

const SignalZeroRegular = memo(
  forwardRef<SVGSVGElement, SignalZeroRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 17.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1z" />
    </IconBase>
  ))
);

SignalZeroRegular.displayName = 'SignalZeroRegular';

// Triple export pattern
export { SignalZeroRegular, SignalZeroRegular as SignalZeroRegularIcon, SignalZeroRegular as SiSignalZeroRegular };
export default SignalZeroRegular;
export type { SignalZeroRegularProps };
