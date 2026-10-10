import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserPlusFillProps = Omit<IconBaseProps, 'children'>;

const UserPlusFill = memo(
  forwardRef<SVGSVGElement, UserPlusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.5 13c.55 0 1 .45 1 1v2.5H21c.55 0 1 .44 1 1 0 .55-.45 1-1 1h-2.5V21c0 .55-.45 1-1 1-.56 0-1-.45-1-1v-2.5H14c-.55 0-1-.45-1-1 0-.56.45-1 1-1h2.5V14c0-.55.44-1 1-1" />
        <path d="M12 3.5c2.76 0 5 2.24 5 5 0 1.81-.96 3.4-2.4 4.28q.45.09.87.24-.21.45-.22.98v1.25H14c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25h1.25v.75H7.2c-.95 0-1.61.02-2.28-.44-.25-.18-.49-.47-.66-.74s-.34-.61-.39-.91q-.09-.52.02-.94c.06-.28.19-.53.3-.79.96-2.03 2.81-3.36 5.22-3.9C7.96 11.9 7 10.3 7 8.5c0-2.76 2.24-5 5-5" />
    </IconBase>
  ))
);

UserPlusFill.displayName = 'UserPlusFill';

// Triple export pattern
export { UserPlusFill, UserPlusFill as UserPlusFillIcon, UserPlusFill as SiUserPlusFill };
export default UserPlusFill;
export type { UserPlusFillProps };
