import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserXFillProps = Omit<IconBaseProps, 'children'>;

const UserXFill = memo(
  forwardRef<SVGSVGElement, UserXFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.8 15.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L18.92 18l1.3 1.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-1.29-1.29-1.3 1.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l1.29-1.3-1.3-1.28c-.39-.4-.39-1.03 0-1.42.4-.39 1.03-.39 1.42 0l1.29 1.3zM12 3.5c2.76 0 5 2.24 5 5 0 1.73-.88 3.25-2.22 4.15-1.94 1-3.28 3.01-3.28 5.35q.01 1.35.55 2.5H7.2c-.95 0-1.61.02-2.28-.44-.25-.18-.49-.47-.66-.74s-.34-.61-.39-.91q-.09-.52.02-.94c.06-.28.19-.53.3-.79.96-2.03 2.81-3.36 5.22-3.9C7.96 11.9 7 10.3 7 8.5c0-2.76 2.24-5 5-5" />
    </IconBase>
  ))
);

UserXFill.displayName = 'UserXFill';

// Triple export pattern
export { UserXFill, UserXFill as UserXFillIcon, UserXFill as SiUserXFill };
export default UserXFill;
export type { UserXFillProps };
