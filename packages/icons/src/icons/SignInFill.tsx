import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignInFillProps = Omit<IconBaseProps, 'children'>;

const SignInFill = memo(
  forwardRef<SVGSVGElement, SignInFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.2 2.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v8.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05h-4.4q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05v-3.32h7.76l-2 2a.88.88 0 0 0 1.23 1.24l3.5-3.5a.9.9 0 0 0 0-1.24l-3.5-3.5a.88.88 0 0 0-1.24 1.24l2 2H6.13V7.8q-.01-1.24.05-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04z" />
        <path d="M6.13 11.13v1.74H2a.88.88 0 0 1 0-1.74z" />
    </IconBase>
  ))
);

SignInFill.displayName = 'SignInFill';

// Triple export pattern (lucide-react style)
export { SignInFill, SignInFill as SignInFillIcon, SignInFill as SiSignInFill };
export default SignInFill;
export type { SignInFillProps };
