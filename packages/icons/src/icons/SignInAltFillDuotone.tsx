import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignInAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignInAltFillDuotone = memo(
  forwardRef<SVGSVGElement, SignInAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sign-in-alt-fill-duotone" {...props}>
      <path d="M15.2 1.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v10.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H8.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05v-4.32h10.26l-3.5 3.5a.88.88 0 0 0 1.23 1.24l5-5a.9.9 0 0 0 0-1.24l-5-5a.88.88 0 1 0-1.24 1.24l3.5 3.5H3.14V6.8q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04z" opacity={.4} />
        <path d="M9.88 6.38a.9.9 0 0 1 1.24 0l5 5c.34.34.34.9 0 1.24l-5 5a.88.88 0 0 1-1.24-1.24l3.5-3.5H3v-1.75h10.39l-3.5-3.51a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

SignInAltFillDuotone.displayName = 'SignInAltFillDuotone';

// Triple export pattern (lucide-react style)
export { SignInAltFillDuotone, SignInAltFillDuotone as SignInAltFillDuotoneIcon, SignInAltFillDuotone as SiSignInAltFillDuotone };
export default SignInAltFillDuotone;
export type { SignInAltFillDuotoneProps };
