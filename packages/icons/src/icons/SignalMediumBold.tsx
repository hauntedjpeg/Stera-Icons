import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalMediumBoldProps = Omit<IconBaseProps, 'children'>;

const SignalMediumBold = memo(
  forwardRef<SVGSVGElement, SignalMediumBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 14.63c.76 0 1.38.61 1.38 1.37v3.5c0 .76-.62 1.38-1.38 1.38h-1c-.76 0-1.37-.62-1.37-1.38V16c0-.76.61-1.37 1.37-1.37zM9.5 11.38c.76 0 1.38.61 1.38 1.37v6.75c0 .76-.62 1.38-1.38 1.38h-1c-.76 0-1.37-.62-1.37-1.38v-6.75c0-.76.61-1.37 1.37-1.37zM15.5 6.88c.76 0 1.38.61 1.38 1.37V19.5c0 .76-.62 1.38-1.38 1.38h-1c-.76 0-1.37-.62-1.37-1.38V8.25c0-.76.61-1.37 1.37-1.37z" />
    </IconBase>
  ))
);

SignalMediumBold.displayName = 'SignalMediumBold';

// Triple export pattern
export { SignalMediumBold, SignalMediumBold as SignalMediumBoldIcon, SignalMediumBold as SiSignalMediumBold };
export default SignalMediumBold;
export type { SignalMediumBoldProps };
