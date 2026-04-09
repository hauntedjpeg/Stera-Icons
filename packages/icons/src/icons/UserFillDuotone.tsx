import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserFillDuotone = memo(
  forwardRef<SVGSVGElement, UserFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-fill-duotone" {...props}>
      <path d="M15.45 12.62a7.4 7.4 0 0 1 4.69 3.9q.2.38.34.86a2.7 2.7 0 0 1-.42 2.14 3 3 0 0 1-.77.85c-.78.53-1.57.5-2.5.5H7.2c-.92 0-1.71.03-2.5-.5a3 3 0 0 1-.76-.85 2.65 2.65 0 0 1-.42-2.14c.08-.32.22-.61.34-.86a7.4 7.4 0 0 1 4.69-3.9 5.35 5.35 0 0 0 6.9 0" opacity={.4} />
        <path d="M12 3.13a5.38 5.38 0 1 1 0 10.75 5.38 5.38 0 0 1 0-10.75" />
    </IconBase>
  ))
);

UserFillDuotone.displayName = 'UserFillDuotone';

// Triple export pattern (lucide-react style)
export { UserFillDuotone, UserFillDuotone as UserFillDuotoneIcon, UserFillDuotone as SiUserFillDuotone };
export default UserFillDuotone;
export type { UserFillDuotoneProps };
