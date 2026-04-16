import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserLockFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserLockFillDuotone = memo(
  forwardRef<SVGSVGElement, UserLockFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.92 3.13a5.38 5.38 0 0 1 3.28 9.63.87.87 0 0 1-.9 1.38q-1.09-.26-2.38-.27c-3.3 0-5.58 1.31-6.56 3.4-.14.29-.2.41-.22.52a1 1 0 0 0 0 .4l.02.03q0 .04.04.1a2 2 0 0 0 .39.58l.02.02h.01c.25.18.44.2 1.5.2h5.12a.88.88 0 0 1 0 1.75H5.12c-.92 0-1.72.03-2.5-.5a3 3 0 0 1-.76-.85 2.65 2.65 0 0 1-.42-2.14q.14-.48.34-.86a7.4 7.4 0 0 1 4.69-3.9 5.36 5.36 0 0 1 3.45-9.5m0 1.75a3.63 3.63 0 1 0 0 7.25 3.63 3.63 0 0 0 0-7.26" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M18.25 11.13a2.63 2.63 0 0 1 2.63 2.62v1.4c.99.19 1.75 1.05 1.75 2.1v2.5c0 1.17-.96 2.13-2.13 2.13H16a2.13 2.13 0 0 1-2.12-2.13v-2.5c0-1.05.75-1.91 1.74-2.1v-1.4a2.63 2.63 0 0 1 2.63-2.62m0 1.74c-.48 0-.87.4-.87.88v1.38h1.75v-1.38c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

UserLockFillDuotone.displayName = 'UserLockFillDuotone';

// Triple export pattern (lucide-react style)
export { UserLockFillDuotone, UserLockFillDuotone as UserLockFillDuotoneIcon, UserLockFillDuotone as SiUserLockFillDuotone };
export default UserLockFillDuotone;
export type { UserLockFillDuotoneProps };
