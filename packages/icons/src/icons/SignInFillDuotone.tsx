import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignInFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignInFillDuotone = memo(
  forwardRef<SVGSVGElement, SignInFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.2 2.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v8.4q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05h-4.4q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05v-3.32h7.76l-2 2c-.35.34-.35.9 0 1.24.33.34.89.34 1.23 0l3.5-3.5q.24-.26.25-.62 0-.36-.25-.62l-3.5-3.5c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l2 2H6.13V7.8q-.01-1.24.05-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04z" opacity={.4} />
        <path d="M11.88 7.88c.34-.34.9-.34 1.24 0l3.5 3.5q.24.26.25.62 0 .36-.25.62l-3.5 3.5c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l2-2H2c-.48 0-.87-.4-.87-.88s.39-.88.87-.88h11.89l-2-2c-.35-.34-.35-.9 0-1.24" />
    </IconBase>
  ))
);

SignInFillDuotone.displayName = 'SignInFillDuotone';

// Triple export pattern
export { SignInFillDuotone, SignInFillDuotone as SignInFillDuotoneIcon, SignInFillDuotone as SiSignInFillDuotone };
export default SignInFillDuotone;
export type { SignInFillDuotoneProps };
