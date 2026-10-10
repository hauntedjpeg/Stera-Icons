import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserListRegularProps = Omit<IconBaseProps, 'children'>;

const UserListRegular = memo(
  forwardRef<SVGSVGElement, UserListRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M7.13 5.25c2.49 0 4.5 2.01 4.5 4.5 0 1.46-.7 2.76-1.78 3.59 1.91.82 3.37 2.46 3.88 4.48.1.4-.15.8-.55.9s-.8-.14-.9-.54c-.57-2.23-2.7-3.93-5.28-3.93s-4.7 1.7-5.27 3.93c-.1.4-.51.65-.91.55s-.65-.51-.55-.91c.53-2.08 2.06-3.75 4.05-4.55-1.03-.83-1.69-2.1-1.69-3.52 0-2.49 2.02-4.5 4.5-4.5m0 1.5c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" clipRule="evenodd" />
        <path d="M23 16.25c.41 0 .75.34.75.75s-.34.75-.75.75h-5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM23 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-7.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM23 6.25c.41 0 .75.34.75.75s-.34.75-.75.75h-7.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

UserListRegular.displayName = 'UserListRegular';

// Triple export pattern
export { UserListRegular, UserListRegular as UserListRegularIcon, UserListRegular as SiUserListRegular };
export default UserListRegular;
export type { UserListRegularProps };
