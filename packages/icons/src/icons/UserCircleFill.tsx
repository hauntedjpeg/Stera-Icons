import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleFillProps = Omit<IconBaseProps, 'children'>;

const UserCircleFill = memo(
  forwardRef<SVGSVGElement, UserCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 1.75a8.13 8.13 0 0 0-6.17 13.4 7.7 7.7 0 0 1 3.93-2.75 4.1 4.1 0 1 1 4.48 0 7.7 7.7 0 0 1 3.92 2.76A8.13 8.13 0 0 0 12 3.88" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleFill.displayName = 'UserCircleFill';

// Triple export pattern (lucide-react style)
export { UserCircleFill, UserCircleFill as UserCircleFillIcon, UserCircleFill as SiUserCircleFill };
export default UserCircleFill;
export type { UserCircleFillProps };
