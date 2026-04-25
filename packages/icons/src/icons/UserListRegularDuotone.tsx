import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserListRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserListRegularDuotone = memo(
  forwardRef<SVGSVGElement, UserListRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M23 16.25a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5zM23 11.25a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5zM23 6.25a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M7.13 5.25a4.5 4.5 0 0 1 2.72 8.09 6.7 6.7 0 0 1 3.88 4.48.75.75 0 0 1-1.46.36A5.4 5.4 0 0 0 7 14.25c-2.58 0-4.7 1.7-5.27 3.93a.75.75 0 0 1-1.46-.36 6.7 6.7 0 0 1 4.05-4.55 4.5 4.5 0 0 1 2.81-8.02m0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

UserListRegularDuotone.displayName = 'UserListRegularDuotone';

// Triple export pattern (lucide-react style)
export { UserListRegularDuotone, UserListRegularDuotone as UserListRegularDuotoneIcon, UserListRegularDuotone as SiUserListRegularDuotone };
export default UserListRegularDuotone;
export type { UserListRegularDuotoneProps };
