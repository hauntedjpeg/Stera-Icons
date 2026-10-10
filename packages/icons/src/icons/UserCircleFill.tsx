import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleFillProps = Omit<IconBaseProps, 'children'>;

const UserCircleFill = memo(
  forwardRef<SVGSVGElement, UserCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 1.75C7.51 3.88 3.88 7.5 3.88 12c0 2.02.73 3.87 1.95 5.29.97-1.3 2.34-2.28 3.93-2.76-1.12-.73-1.86-2-1.86-3.43C7.9 8.84 9.74 7 12 7s4.1 1.84 4.1 4.1c0 1.44-.74 2.7-1.86 3.43 1.59.48 2.95 1.46 3.92 2.76 1.23-1.42 1.97-3.27 1.97-5.29 0-4.49-3.64-8.12-8.13-8.12" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleFill.displayName = 'UserCircleFill';

// Triple export pattern
export { UserCircleFill, UserCircleFill as UserCircleFillIcon, UserCircleFill as SiUserCircleFill };
export default UserCircleFill;
export type { UserCircleFillProps };
