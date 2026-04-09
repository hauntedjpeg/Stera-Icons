import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignOutFillProps = Omit<IconBaseProps, 'children'>;

const SignOutFill = memo(
  forwardRef<SVGSVGElement, SignOutFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sign-out-fill" {...props}>
      <path d="M10.2 2.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.04 2.05v3.33H8.5a.88.88 0 0 0 0 1.74h7.38v-1.74h4.5l-2-2.01a.88.88 0 0 1 1.24-1.24l3.5 3.5a.9.9 0 0 1 0 1.24l-3.5 3.5a.88.88 0 0 1-1.24-1.24l2-2h-4.5v3.32q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.82.06-2.05.05H6.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V7.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.82-.06 2.05-.04z" />
    </IconBase>
  ))
);

SignOutFill.displayName = 'SignOutFill';

// Triple export pattern (lucide-react style)
export { SignOutFill, SignOutFill as SignOutFillIcon, SignOutFill as SiSignOutFill };
export default SignOutFill;
export type { SignOutFillProps };
