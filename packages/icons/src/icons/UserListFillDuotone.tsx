import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserListFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserListFillDuotone = memo(
  forwardRef<SVGSVGElement, UserListFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M23 16.13a.88.88 0 0 1 0 1.75h-5.5a.88.88 0 0 1 0-1.75zM23 11.13a.88.88 0 0 1 0 1.74h-7.5a.88.88 0 0 1 0-1.74zM23 6.13a.88.88 0 0 1 0 1.75h-7.5a.88.88 0 0 1 0-1.75z" opacity={0.4} />
        <path d="M7.13 5.5a4.25 4.25 0 0 1 2.19 7.9 6.6 6.6 0 0 1 3.67 3.17c.24.47.17.97-.1 1.34-.26.36-.69.59-1.17.59H2.28c-.48 0-.91-.23-1.17-.59a1.3 1.3 0 0 1-.1-1.34 6.6 6.6 0 0 1 3.84-3.23A4.25 4.25 0 0 1 7.13 5.5" />
    </IconBase>
  ))
);

UserListFillDuotone.displayName = 'UserListFillDuotone';

// Triple export pattern (lucide-react style)
export { UserListFillDuotone, UserListFillDuotone as UserListFillDuotoneIcon, UserListFillDuotone as SiUserListFillDuotone };
export default UserListFillDuotone;
export type { UserListFillDuotoneProps };
