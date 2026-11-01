import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserListFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserListFillDuotone = memo(
  forwardRef<SVGSVGElement, UserListFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M23 16.13c.48 0 .88.39.88.87s-.4.88-.88.88h-5.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM23 11.13c.48 0 .88.39.88.87s-.4.88-.88.88h-7.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM23 6.13c.48 0 .88.39.88.87s-.4.87-.88.88h-7.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" opacity={0.4} />
        <path d="M7.13 5.25c2.49 0 4.5 2.01 4.5 4.5 0 1.46-.7 2.76-1.78 3.59 1.69.73 3.02 2.09 3.66 3.78.32.86-.37 1.63-1.15 1.63H1.64c-.78 0-1.47-.77-1.15-1.63.66-1.75 2.06-3.14 3.83-3.86-1.03-.82-1.69-2.09-1.69-3.51 0-2.49 2.02-4.5 4.5-4.5" />
    </IconBase>
  ))
);

UserListFillDuotone.displayName = 'UserListFillDuotone';

// Triple export pattern
export { UserListFillDuotone, UserListFillDuotone as UserListFillDuotoneIcon, UserListFillDuotone as SiUserListFillDuotone };
export default UserListFillDuotone;
export type { UserListFillDuotoneProps };
