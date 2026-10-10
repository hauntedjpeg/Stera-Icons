import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserListBoldProps = Omit<IconBaseProps, 'children'>;

const UserListBold = memo(
  forwardRef<SVGSVGElement, UserListBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M7.13 5c2.62 0 4.75 2.13 4.75 4.75 0 1.4-.6 2.66-1.57 3.53 1.8.9 3.16 2.51 3.66 4.47.13.54-.19 1.08-.73 1.22-.53.13-1.07-.19-1.21-.72-.54-2.12-2.56-3.75-5.03-3.75s-4.5 1.63-5.03 3.75c-.14.53-.68.86-1.22.72s-.86-.68-.72-1.22c.51-2.02 1.94-3.67 3.83-4.56-.91-.86-1.48-2.08-1.48-3.44C2.38 7.13 4.51 5 7.13 5m0 2C5.61 7 4.38 8.23 4.38 9.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75S8.65 7 7.13 7" clipRule="evenodd" />
        <path d="M23 16c.55 0 1 .45 1 1s-.45 1-1 1h-5.5c-.55 0-1-.45-1-1s.45-1 1-1zM23 11c.55 0 1 .45 1 1s-.45 1-1 1h-7.5c-.55 0-1-.45-1-1s.45-1 1-1zM23 6c.55 0 1 .45 1 1s-.45 1-1 1h-7.5c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

UserListBold.displayName = 'UserListBold';

// Triple export pattern
export { UserListBold, UserListBold as UserListBoldIcon, UserListBold as SiUserListBold };
export default UserListBold;
export type { UserListBoldProps };
