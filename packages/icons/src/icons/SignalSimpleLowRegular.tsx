import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalSimpleLowRegularProps = Omit<IconBaseProps, 'children'>;

const SignalSimpleLowRegular = memo(
  forwardRef<SVGSVGElement, SignalSimpleLowRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 14.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5H4c-.83 0-1.5-.67-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5z" />
    </IconBase>
  ))
);

SignalSimpleLowRegular.displayName = 'SignalSimpleLowRegular';

// Triple export pattern
export { SignalSimpleLowRegular, SignalSimpleLowRegular as SignalSimpleLowRegularIcon, SignalSimpleLowRegular as SiSignalSimpleLowRegular };
export default SignalSimpleLowRegular;
export type { SignalSimpleLowRegularProps };
