import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleRegularProps = Omit<IconBaseProps, 'children'>;

const UserCircleRegular = memo(
  forwardRef<SVGSVGElement, UserCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 13.85c-2.37 0-4.46 1.2-5.7 3.04 1.54 1.32 3.53 2.11 5.7 2.11s4.16-.8 5.7-2.1c-1.24-1.84-3.33-3.05-5.7-3.05m0-12.35c-4.83 0-8.75 3.92-8.75 8.75 0 2.1.75 4.04 1.99 5.55.97-1.34 2.33-2.38 3.91-2.95-1.03-.84-1.7-2.11-1.7-3.55C7.45 8.54 9.49 6.5 12 6.5s4.55 2.04 4.55 4.55c0 1.44-.67 2.71-1.7 3.55 1.58.57 2.94 1.61 3.91 2.95 1.24-1.5 1.99-3.44 1.99-5.55 0-4.83-3.92-8.75-8.75-8.75M12 8c-1.68 0-3.05 1.37-3.05 3.05S10.32 14.1 12 14.1s3.05-1.37 3.05-3.05S13.68 8 12 8" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleRegular.displayName = 'UserCircleRegular';

// Triple export pattern
export { UserCircleRegular, UserCircleRegular as UserCircleRegularIcon, UserCircleRegular as SiUserCircleRegular };
export default UserCircleRegular;
export type { UserCircleRegularProps };
