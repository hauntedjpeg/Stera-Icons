import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserMinusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserMinusFillDuotone = memo(
  forwardRef<SVGSVGElement, UserMinusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.5c2.76 0 5 2.24 5 5 0 1.81-.96 3.4-2.4 4.28 2.32.52 4.13 1.8 5.1 3.72H14c-.55 0-1 .44-1 1 0 .55.45 1 1 1h6.1c-.06.27-.2.57-.36.82-.17.27-.4.56-.66.74-.67.46-1.33.44-2.28.44H7.2c-.95 0-1.61.02-2.28-.44-.25-.18-.49-.47-.66-.74s-.34-.61-.39-.91q-.09-.52.02-.94c.06-.28.19-.53.3-.79.96-2.03 2.81-3.36 5.22-3.9C7.96 11.9 7 10.3 7 8.5c0-2.76 2.24-5 5-5" opacity={.4} />
        <path d="M21 16.5c.55 0 1 .44 1 1 0 .55-.45 1-1 1h-7c-.55 0-1-.45-1-1 0-.56.45-1 1-1z" />
    </IconBase>
  ))
);

UserMinusFillDuotone.displayName = 'UserMinusFillDuotone';

// Triple export pattern
export { UserMinusFillDuotone, UserMinusFillDuotone as UserMinusFillDuotoneIcon, UserMinusFillDuotone as SiUserMinusFillDuotone };
export default UserMinusFillDuotone;
export type { UserMinusFillDuotoneProps };
