import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalSimpleHighFillProps = Omit<IconBaseProps, 'children'>;

const SignalSimpleHighFill = memo(
  forwardRef<SVGSVGElement, SignalSimpleHighFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 13.75c1.24 0 2.25 1 2.25 2.25v3c0 1.24-1 2.25-2.25 2.25H4c-1.24 0-2.25-1-2.25-2.25v-3c0-1.24 1-2.25 2.25-2.25zM12.5 8.75c1.24 0 2.25 1 2.25 2.25v8c0 1.24-1 2.25-2.25 2.25h-1c-1.24 0-2.25-1-2.25-2.25v-8c0-1.24 1-2.25 2.25-2.25zM20 2.75c1.24 0 2.25 1 2.25 2.25v14c0 1.24-1 2.25-2.25 2.25h-1c-1.24 0-2.25-1-2.25-2.25V5c0-1.24 1-2.25 2.25-2.25z" />
    </IconBase>
  ))
);

SignalSimpleHighFill.displayName = 'SignalSimpleHighFill';

// Triple export pattern
export { SignalSimpleHighFill, SignalSimpleHighFill as SignalSimpleHighFillIcon, SignalSimpleHighFill as SiSignalSimpleHighFill };
export default SignalSimpleHighFill;
export type { SignalSimpleHighFillProps };
