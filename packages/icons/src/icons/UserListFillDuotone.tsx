import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserListFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserListFillDuotone = memo(
  forwardRef<SVGSVGElement, UserListFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M23 16.13c.48 0 .88.39.88.87s-.4.88-.88.88h-5.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM23 11.13c.48 0 .88.39.88.87s-.4.88-.88.88h-7.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM23 6.13c.48 0 .88.39.88.87s-.4.87-.88.88h-7.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" opacity={0.4} />
        <path d="M7.13 5.5c2.35 0 4.25 1.9 4.25 4.25 0 1.55-.83 2.9-2.06 3.65 1.6.56 2.92 1.7 3.67 3.17.24.47.17.97-.1 1.34-.26.36-.69.59-1.17.59H2.28c-.48 0-.91-.23-1.17-.59-.27-.37-.34-.87-.1-1.34.78-1.51 2.16-2.69 3.84-3.23-1.18-.76-1.97-2.08-1.97-3.59 0-2.35 1.9-4.25 4.25-4.25" />
    </IconBase>
  ))
);

UserListFillDuotone.displayName = 'UserListFillDuotone';

// Triple export pattern
export { UserListFillDuotone, UserListFillDuotone as UserListFillDuotoneIcon, UserListFillDuotone as SiUserListFillDuotone };
export default UserListFillDuotone;
export type { UserListFillDuotoneProps };
