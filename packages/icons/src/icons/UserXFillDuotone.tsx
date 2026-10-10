import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserXFillDuotone = memo(
  forwardRef<SVGSVGElement, UserXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.8 15.3c.39-.4 1.02-.4 1.4 0 .4.39.4 1.02 0 1.4L18.92 18l1.3 1.3c.39.39.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-1.29-1.29-1.3 1.3c-.38.39-1.01.39-1.4 0-.4-.4-.4-1.02 0-1.42l1.29-1.3-1.3-1.28c-.39-.4-.39-1.02 0-1.42.4-.39 1.03-.39 1.42 0l1.29 1.3z" />
        <path d="M12 3.5c2.76 0 5 2.24 5 5 0 1.81-.96 3.4-2.4 4.28 1.76.4 3.23 1.23 4.27 2.45l-.08.06-1.29 1.3-1.3-1.3c-.38-.39-1.02-.39-1.4 0-.4.4-.4 1.03 0 1.42L16.08 18l-1.3 1.3c-.32.32-.38.82-.15 1.2H7.2c-.95 0-1.61.02-2.28-.44-.25-.18-.49-.47-.66-.74s-.34-.61-.39-.91q-.09-.52.02-.94c.06-.28.19-.53.3-.79.96-2.03 2.81-3.36 5.22-3.9C7.96 11.9 7 10.3 7 8.5c0-2.76 2.24-5 5-5" opacity={.4} />
    </IconBase>
  ))
);

UserXFillDuotone.displayName = 'UserXFillDuotone';

// Triple export pattern
export { UserXFillDuotone, UserXFillDuotone as UserXFillDuotoneIcon, UserXFillDuotone as SiUserXFillDuotone };
export default UserXFillDuotone;
export type { UserXFillDuotoneProps };
