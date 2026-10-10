import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserFillDuotone = memo(
  forwardRef<SVGSVGElement, UserFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.45 12.62c2.12.66 3.78 1.97 4.69 3.9q.2.38.34.86.11.52.02 1.09c-.07.37-.26.76-.44 1.05-.19.3-.46.63-.77.85-.78.53-1.57.5-2.5.5H7.2c-.92 0-1.71.03-2.5-.5-.3-.22-.57-.56-.76-.85-.18-.3-.37-.68-.44-1.05-.06-.4-.06-.74.02-1.1.08-.3.22-.6.34-.85.9-1.93 2.57-3.24 4.69-3.9.93.78 2.13 1.25 3.45 1.26 1.31 0 2.52-.48 3.45-1.26" opacity={.4} />
        <path d="M12 3.13c2.97 0 5.38 2.4 5.38 5.37s-2.41 5.38-5.38 5.38-5.37-2.41-5.37-5.38S9.03 3.13 12 3.13" />
    </IconBase>
  ))
);

UserFillDuotone.displayName = 'UserFillDuotone';

// Triple export pattern
export { UserFillDuotone, UserFillDuotone as UserFillDuotoneIcon, UserFillDuotone as SiUserFillDuotone };
export default UserFillDuotone;
export type { UserFillDuotoneProps };
