import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserListBoldProps = Omit<IconBaseProps, 'children'>;

const UserListBold = memo(
  forwardRef<SVGSVGElement, UserListBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M7.13 5a4.75 4.75 0 0 1 3.18 8.28c1.8.9 3.16 2.51 3.66 4.47a1 1 0 0 1-1.94.5A5.1 5.1 0 0 0 7 14.5a5.1 5.1 0 0 0-5.03 3.75 1 1 0 0 1-1.94-.5 7 7 0 0 1 3.83-4.56A4.74 4.74 0 0 1 7.13 5m0 2a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" />
        <path d="M23 16a1 1 0 0 1 0 2h-5.5a1 1 0 0 1 0-2zM23 11a1 1 0 0 1 0 2h-7.5a1 1 0 0 1 0-2zM23 6a1 1 0 0 1 0 2h-7.5a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

UserListBold.displayName = 'UserListBold';

// Triple export pattern (lucide-react style)
export { UserListBold, UserListBold as UserListBoldIcon, UserListBold as SiUserListBold };
export default UserListBold;
export type { UserListBoldProps };
