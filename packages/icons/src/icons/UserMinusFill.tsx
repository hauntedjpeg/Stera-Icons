import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserMinusFillProps = Omit<IconBaseProps, 'children'>;

const UserMinusFill = memo(
  forwardRef<SVGSVGElement, UserMinusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.5c2.76 0 5 2.24 5 5 0 1.81-.96 3.4-2.4 4.28q2.09.46 3.53 1.7.24.19.25.29t-.06.17-.4.06H14c-1.38 0-2.5 1.11-2.5 2.5v1.4c0 .56 0 .84-.1 1.05q-.16.3-.45.44c-.21.11-.49.11-1.05.11H7.2c-.95 0-1.61.02-2.28-.44-.25-.18-.49-.47-.66-.74s-.34-.61-.39-.91q-.09-.52.02-.94c.06-.28.19-.53.3-.79.96-2.03 2.81-3.36 5.22-3.9C7.96 11.9 7 10.3 7 8.5c0-2.76 2.24-5 5-5" />
        <path d="M21 16.5c.55 0 1 .44 1 1 0 .55-.45 1-1 1h-7c-.55 0-1-.45-1-1 0-.56.45-1 1-1z" />
    </IconBase>
  ))
);

UserMinusFill.displayName = 'UserMinusFill';

// Triple export pattern
export { UserMinusFill, UserMinusFill as UserMinusFillIcon, UserMinusFill as SiUserMinusFill };
export default UserMinusFill;
export type { UserMinusFillProps };
