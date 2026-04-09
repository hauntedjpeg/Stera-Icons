import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignOutFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignOutFillDuotone = memo(
  forwardRef<SVGSVGElement, SignOutFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sign-out-fill-duotone" {...props}>
      <path d="M10.2 2.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.04 2.05v3.33H8.5a.88.88 0 0 0 0 1.74h7.38v3.33q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.82.06-2.05.05H6.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V7.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.82-.06 2.05-.04z" opacity={.4} />
        <path d="M18.38 7.88a.9.9 0 0 1 1.24 0l3.5 3.5a.9.9 0 0 1 0 1.24l-3.5 3.5a.88.88 0 0 1-1.24-1.24l2-2H8.5a.87.87 0 1 1 0-1.76h11.89l-2-2a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

SignOutFillDuotone.displayName = 'SignOutFillDuotone';

// Triple export pattern (lucide-react style)
export { SignOutFillDuotone, SignOutFillDuotone as SignOutFillDuotoneIcon, SignOutFillDuotone as SiSignOutFillDuotone };
export default SignOutFillDuotone;
export type { SignOutFillDuotoneProps };
