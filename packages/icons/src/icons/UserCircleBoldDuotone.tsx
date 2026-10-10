import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 6.5c2.54 0 4.6 2.06 4.6 4.6 0 1.28-.52 2.43-1.36 3.26 1.25.54 2.33 1.38 3.17 2.43q-.61.82-1.4 1.45C15.86 16.7 14.04 15.7 12 15.7s-3.87 1-5 2.54q-.8-.64-1.41-1.45c.83-1.05 1.92-1.89 3.17-2.42-.84-.84-1.36-2-1.36-3.27 0-2.54 2.06-4.6 4.6-4.6m0 2c-1.44 0-2.6 1.16-2.6 2.6s1.16 2.6 2.6 2.6 2.6-1.16 2.6-2.6-1.16-2.6-2.6-2.6" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleBoldDuotone.displayName = 'UserCircleBoldDuotone';

// Triple export pattern
export { UserCircleBoldDuotone, UserCircleBoldDuotone as UserCircleBoldDuotoneIcon, UserCircleBoldDuotone as SiUserCircleBoldDuotone };
export default UserCircleBoldDuotone;
export type { UserCircleBoldDuotoneProps };
