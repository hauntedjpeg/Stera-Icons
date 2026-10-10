import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignInAltFillProps = Omit<IconBaseProps, 'children'>;

const SignInAltFill = memo(
  forwardRef<SVGSVGElement, SignInAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.2 1.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v10.4q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05H8.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05v-4.32h10.26l-3.5 3.5c-.35.34-.35.9 0 1.24.33.34.89.34 1.23 0l5-5c.34-.34.34-.9 0-1.24l-5-5c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l3.5 3.5H3.14V6.8q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04z" />
    </IconBase>
  ))
);

SignInAltFill.displayName = 'SignInAltFill';

// Triple export pattern
export { SignInAltFill, SignInAltFill as SignInAltFillIcon, SignInAltFill as SiSignInAltFill };
export default SignInAltFill;
export type { SignInAltFillProps };
