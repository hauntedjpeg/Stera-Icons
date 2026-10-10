import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserFillProps = Omit<IconBaseProps, 'children'>;

const UserFill = memo(
  forwardRef<SVGSVGElement, UserFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.5c2.76 0 5 2.24 5 5 0 1.81-.96 3.4-2.4 4.28 2.4.54 4.25 1.87 5.2 3.9q.2.38.31.79t.02.94c-.05.3-.22.64-.39.91s-.4.56-.66.74c-.67.46-1.33.44-2.28.44H7.2c-.95 0-1.61.02-2.28-.44-.25-.18-.49-.47-.66-.74s-.34-.61-.39-.91q-.09-.52.02-.94c.06-.28.19-.53.3-.79.96-2.03 2.81-3.36 5.22-3.9C7.96 11.9 7 10.3 7 8.5c0-2.76 2.24-5 5-5" />
    </IconBase>
  ))
);

UserFill.displayName = 'UserFill';

// Triple export pattern
export { UserFill, UserFill as UserFillIcon, UserFill as SiUserFill };
export default UserFill;
export type { UserFillProps };
