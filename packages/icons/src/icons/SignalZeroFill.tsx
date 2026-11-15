import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalZeroFillProps = Omit<IconBaseProps, 'children'>;

const SignalZeroFill = memo(
  forwardRef<SVGSVGElement, SignalZeroFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 14.25c.97 0 1.75.78 1.75 1.75v3.5c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75V16c0-.97.78-1.75 1.75-1.75z" />
    </IconBase>
  ))
);

SignalZeroFill.displayName = 'SignalZeroFill';

// Triple export pattern
export { SignalZeroFill, SignalZeroFill as SignalZeroFillIcon, SignalZeroFill as SiSignalZeroFill };
export default SignalZeroFill;
export type { SignalZeroFillProps };
