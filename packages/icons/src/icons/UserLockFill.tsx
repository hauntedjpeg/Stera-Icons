import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserLockFillProps = Omit<IconBaseProps, 'children'>;

const UserLockFill = memo(
  forwardRef<SVGSVGElement, UserLockFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.25 11.13c1.45 0 2.62 1.17 2.62 2.62v1.4c1 .19 1.75 1.05 1.75 2.1v2.5c0 1.17-.95 2.13-2.12 2.13H16c-1.17 0-2.13-.96-2.13-2.13v-2.5c0-1.05.76-1.91 1.75-2.1v-1.4c0-1.45 1.18-2.62 2.63-2.62m0 1.74c-.48 0-.88.4-.88.88v1.38h1.75v-1.38c0-.48-.39-.87-.87-.87M9.92 3.13c2.97 0 5.37 2.4 5.37 5.37 0 1.73-.82 3.28-2.1 4.26q.24.31.16.73c-.11.47-.58.76-1.05.65q-1.09-.26-2.38-.27c-3.3 0-5.58 1.31-6.56 3.4-.14.29-.2.41-.22.52-.02.07-.03.17 0 .4h.01v.03l.05.1q.05.12.14.26l.17.24.08.08.02.02h.01c.25.18.44.2 1.5.2h5.12c.49 0 .88.4.88.88s-.4.87-.88.88H5.12c-.92 0-1.72.02-2.5-.51-.3-.22-.57-.56-.76-.85-.19-.3-.38-.68-.44-1.05-.06-.4-.06-.74.02-1.1q.14-.47.34-.85c.9-1.93 2.56-3.24 4.69-3.9-1.18-.99-1.93-2.47-1.93-4.12 0-2.97 2.4-5.37 5.38-5.37m0 1.75c-2 0-3.63 1.62-3.63 3.62s1.63 3.63 3.63 3.63 3.62-1.63 3.62-3.63-1.62-3.62-3.62-3.62" clipRule="evenodd" />
    </IconBase>
  ))
);

UserLockFill.displayName = 'UserLockFill';

// Triple export pattern
export { UserLockFill, UserLockFill as UserLockFillIcon, UserLockFill as SiUserLockFill };
export default UserLockFill;
export type { UserLockFillProps };
