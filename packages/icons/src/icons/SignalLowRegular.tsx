import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalLowRegularProps = Omit<IconBaseProps, 'children'>;

const SignalLowRegular = memo(
  forwardRef<SVGSVGElement, SignalLowRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 17.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1zM9.5 12.83c.55 0 1 .45 1 1v5.67c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-5.67c0-.55.45-1 1-1z" />
    </IconBase>
  ))
);

SignalLowRegular.displayName = 'SignalLowRegular';

// Triple export pattern
export { SignalLowRegular, SignalLowRegular as SignalLowRegularIcon, SignalLowRegular as SiSignalLowRegular };
export default SignalLowRegular;
export type { SignalLowRegularProps };
