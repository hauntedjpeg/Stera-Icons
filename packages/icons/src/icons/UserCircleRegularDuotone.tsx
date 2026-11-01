import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 6.5c2.51 0 4.55 2.04 4.55 4.55 0 1.44-.67 2.71-1.7 3.55 1.58.57 2.94 1.61 3.91 2.95q-.48.6-1.07 1.1C16.46 16.8 14.37 15.6 12 15.6s-4.46 1.2-5.7 3.04q-.57-.5-1.06-1.09c.97-1.34 2.33-2.38 3.91-2.95-1.03-.84-1.7-2.11-1.7-3.55C7.45 8.54 9.49 6.5 12 6.5M12 8c-1.68 0-3.05 1.37-3.05 3.05S10.32 14.1 12 14.1s3.05-1.37 3.05-3.05S13.68 8 12 8" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleRegularDuotone.displayName = 'UserCircleRegularDuotone';

// Triple export pattern
export { UserCircleRegularDuotone, UserCircleRegularDuotone as UserCircleRegularDuotoneIcon, UserCircleRegularDuotone as SiUserCircleRegularDuotone };
export default UserCircleRegularDuotone;
export type { UserCircleRegularDuotoneProps };
