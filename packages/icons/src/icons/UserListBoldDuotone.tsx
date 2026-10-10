import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserListBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserListBoldDuotone = memo(
  forwardRef<SVGSVGElement, UserListBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M23 16c.55 0 1 .45 1 1s-.45 1-1 1h-5.5c-.55 0-1-.45-1-1s.45-1 1-1zM23 11c.55 0 1 .45 1 1s-.45 1-1 1h-7.5c-.55 0-1-.45-1-1s.45-1 1-1zM23 6c.55 0 1 .45 1 1s-.45 1-1 1h-7.5c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path fillRule="evenodd" d="M7.13 5c2.62 0 4.75 2.13 4.75 4.75 0 1.4-.6 2.66-1.57 3.53 1.8.9 3.16 2.51 3.66 4.47.14.54-.19 1.08-.72 1.22-.54.13-1.08-.19-1.22-.72C11.5 16.13 9.47 14.5 7 14.5s-4.5 1.63-5.03 3.75c-.14.53-.68.86-1.21.72-.54-.14-.86-.68-.73-1.22.51-2.02 1.95-3.67 3.83-4.56-.9-.86-1.48-2.08-1.48-3.44C2.38 7.13 4.51 5 7.13 5m0 2C5.61 7 4.38 8.23 4.38 9.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75S8.65 7 7.13 7" clipRule="evenodd" />
    </IconBase>
  ))
);

UserListBoldDuotone.displayName = 'UserListBoldDuotone';

// Triple export pattern
export { UserListBoldDuotone, UserListBoldDuotone as UserListBoldDuotoneIcon, UserListBoldDuotone as SiUserListBoldDuotone };
export default UserListBoldDuotone;
export type { UserListBoldDuotoneProps };
