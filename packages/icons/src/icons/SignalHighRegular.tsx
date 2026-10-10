import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalHighRegularProps = Omit<IconBaseProps, 'children'>;

const SignalHighRegular = memo(
  forwardRef<SVGSVGElement, SignalHighRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 17.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1zM9.5 12.83c.55 0 1 .45 1 1v5.67c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-5.67c0-.55.45-1 1-1zM15.5 8.16c.55 0 1 .45 1 1V19.5c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1V9.16c0-.55.45-1 1-1zM21.5 3.5c.55 0 1 .45 1 1v15c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-15c0-.55.45-1 1-1z" />
    </IconBase>
  ))
);

SignalHighRegular.displayName = 'SignalHighRegular';

// Triple export pattern
export { SignalHighRegular, SignalHighRegular as SignalHighRegularIcon, SignalHighRegular as SiSignalHighRegular };
export default SignalHighRegular;
export type { SignalHighRegularProps };
