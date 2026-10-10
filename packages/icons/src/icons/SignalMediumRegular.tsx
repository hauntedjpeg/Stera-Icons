import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalMediumRegularProps = Omit<IconBaseProps, 'children'>;

const SignalMediumRegular = memo(
  forwardRef<SVGSVGElement, SignalMediumRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 17.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1zM9.5 12.83c.55 0 1 .45 1 1v5.67c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-5.67c0-.55.45-1 1-1zM15.5 8.16c.55 0 1 .45 1 1V19.5c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1V9.16c0-.55.45-1 1-1z" />
    </IconBase>
  ))
);

SignalMediumRegular.displayName = 'SignalMediumRegular';

// Triple export pattern
export { SignalMediumRegular, SignalMediumRegular as SignalMediumRegularIcon, SignalMediumRegular as SiSignalMediumRegular };
export default SignalMediumRegular;
export type { SignalMediumRegularProps };
