import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.1c5.47 0 9.9 4.43 9.9 9.9 0 2.57-.98 4.91-2.59 6.67-1.16-1.96-3.1-3.42-5.39-3.95 1.3-.69 2.18-2.05 2.18-3.62C16.1 8.84 14.26 7 12 7s-4.1 1.84-4.1 4.1c0 1.57.88 2.93 2.17 3.62-2.29.53-4.22 1.99-5.38 3.95C3.08 16.91 2.1 14.57 2.1 12c0-5.47 4.43-9.9 9.9-9.9" opacity={.4} />
        <path d="M12 7c2.26 0 4.1 1.84 4.1 4.1 0 1.57-.88 2.93-2.18 3.62 2.3.53 4.23 1.99 5.4 3.95C17.5 20.65 14.9 21.9 12 21.9s-5.5-1.25-7.31-3.23c1.16-1.96 3.1-3.42 5.38-3.95-1.29-.69-2.17-2.05-2.17-3.62C7.9 8.84 9.74 7 12 7" />
    </IconBase>
  ))
);

UserCircleFillDuotone.displayName = 'UserCircleFillDuotone';

// Triple export pattern
export { UserCircleFillDuotone, UserCircleFillDuotone as UserCircleFillDuotoneIcon, UserCircleFillDuotone as SiUserCircleFillDuotone };
export default UserCircleFillDuotone;
export type { UserCircleFillDuotoneProps };
