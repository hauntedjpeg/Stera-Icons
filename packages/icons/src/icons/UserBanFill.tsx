import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserBanFillProps = Omit<IconBaseProps, 'children'>;

const UserBanFill = memo(
  forwardRef<SVGSVGElement, UserBanFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.5 14.25c2.35 0 4.25 1.9 4.25 4.25s-1.9 4.25-4.25 4.25-4.25-1.9-4.25-4.25c0-1.15.46-2.2 1.2-2.96l.05-.05.05-.05c.77-.74 1.8-1.19 2.95-1.19m-2.4 2.9q-.34.6-.35 1.35c0 1.52 1.23 2.75 2.75 2.75q.74-.01 1.34-.35zm2.4-1.4q-.74.01-1.34.35l3.74 3.74q.34-.6.35-1.34c0-1.52-1.23-2.75-2.75-2.75" clipRule="evenodd" />
        <path d="M12 3.5c2.76 0 5 2.24 5 5 0 1.81-.96 3.4-2.4 4.28l.33.08c.27.07.4.1.46.18q.07.1.04.21c-.02.09-.15.18-.4.36-1.53 1.09-2.53 2.87-2.53 4.89q0 1.05.34 2H7.2c-.95 0-1.61.02-2.28-.44-.25-.18-.49-.47-.66-.74s-.34-.61-.39-.91q-.09-.52.02-.94c.06-.28.19-.53.3-.79.96-2.03 2.81-3.36 5.22-3.9C7.96 11.9 7 10.3 7 8.5c0-2.76 2.24-5 5-5" />
    </IconBase>
  ))
);

UserBanFill.displayName = 'UserBanFill';

// Triple export pattern
export { UserBanFill, UserBanFill as UserBanFillIcon, UserBanFill as SiUserBanFill };
export default UserBanFill;
export type { UserBanFillProps };
