import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25 0 2.86-1.17 5.45-3.07 7.3q.21-.21.22-.51v-.02q0-.2-.1-.37c-1.06-1.92-2.87-3.38-5.04-3.99 1.08-.73 1.79-1.96 1.79-3.36C16.05 8.81 14.24 7 12 7s-4.05 1.81-4.05 4.05c0 1.4.7 2.63 1.79 3.36-2.17.6-3.98 2.07-5.05 4q-.09.16-.09.36v.02q0 .3.21.51c-1.89-1.86-3.06-4.44-3.06-7.3C1.75 6.34 6.34 1.75 12 1.75" opacity={.4} />
        <path d="M12 7c2.24 0 4.05 1.81 4.05 4.05 0 1.4-.71 2.63-1.79 3.36 2.17.6 3.98 2.07 5.05 4q.09.16.09.36v.02q0 .31-.23.53c-1.84 1.81-4.38 2.93-7.17 2.93s-5.33-1.12-7.18-2.93q-.21-.22-.22-.53v-.02q0-.2.1-.37c1.06-1.92 2.87-3.38 5.04-3.99-1.08-.73-1.79-1.96-1.79-3.36C7.95 8.81 9.76 7 12 7" />
    </IconBase>
  ))
);

UserCircleFillDuotone.displayName = 'UserCircleFillDuotone';

// Triple export pattern
export { UserCircleFillDuotone, UserCircleFillDuotone as UserCircleFillDuotoneIcon, UserCircleFillDuotone as SiUserCircleFillDuotone };
export default UserCircleFillDuotone;
export type { UserCircleFillDuotoneProps };
