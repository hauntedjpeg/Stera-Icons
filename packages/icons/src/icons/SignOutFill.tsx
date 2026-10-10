import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignOutFillProps = Omit<IconBaseProps, 'children'>;

const SignOutFill = memo(
  forwardRef<SVGSVGElement, SignOutFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.2 2.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.04 2.05v3.33H8.5c-.48 0-.87.39-.87.87s.39.88.87.88h7.38v-1.76h4.5l-2-2c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0l3.5 3.5q.24.26.25.62 0 .36-.25.62l-3.5 3.5c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l2-2h-4.5v3.32q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.82.06-2.05.05H6.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05V7.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.82-.06 2.05-.04z" />
    </IconBase>
  ))
);

SignOutFill.displayName = 'SignOutFill';

// Triple export pattern
export { SignOutFill, SignOutFill as SignOutFillIcon, SignOutFill as SiSignOutFill };
export default SignOutFill;
export type { SignOutFillProps };
