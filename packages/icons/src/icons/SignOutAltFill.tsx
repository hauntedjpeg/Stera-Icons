import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignOutAltFillProps = Omit<IconBaseProps, 'children'>;

const SignOutAltFill = memo(
  forwardRef<SVGSVGElement, SignOutAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.2 1.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v4.34l-4.76-4.76a.88.88 0 0 0-1.24 1.24l3.5 3.5H8.5a.88.88 0 0 0 0 1.76h9.89l-3.5 3.5a.88.88 0 0 0 1.23 1.24l4.75-4.76v4.34q.01 1.24-.04 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H8.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V6.8q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04z" />
    </IconBase>
  ))
);

SignOutAltFill.displayName = 'SignOutAltFill';

// Triple export pattern (lucide-react style)
export { SignOutAltFill, SignOutAltFill as SignOutAltFillIcon, SignOutAltFill as SiSignOutAltFill };
export default SignOutAltFill;
export type { SignOutAltFillProps };
