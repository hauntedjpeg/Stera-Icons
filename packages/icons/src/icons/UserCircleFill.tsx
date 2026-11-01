import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleFillProps = Omit<IconBaseProps, 'children'>;

const UserCircleFill = memo(
  forwardRef<SVGSVGElement, UserCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75 0 2.3.88 4.38 2.33 5.94 1.12-1.6 2.83-2.76 4.81-3.17-1.44-.63-2.44-2.06-2.44-3.72C7.95 8.81 9.76 7 12 7s4.05 1.81 4.05 4.05c0 1.66-1 3.1-2.44 3.72 1.98.4 3.69 1.57 4.81 3.17 1.45-1.56 2.33-3.65 2.33-5.94 0-4.83-3.92-8.75-8.75-8.75" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleFill.displayName = 'UserCircleFill';

// Triple export pattern
export { UserCircleFill, UserCircleFill as UserCircleFillIcon, UserCircleFill as SiUserCircleFill };
export default UserCircleFill;
export type { UserCircleFillProps };
