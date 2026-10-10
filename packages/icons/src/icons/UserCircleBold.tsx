import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleBoldProps = Omit<IconBaseProps, 'children'>;

const UserCircleBold = memo(
  forwardRef<SVGSVGElement, UserCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 13.7c-2.05 0-3.87 1-5 2.54 1.37 1.1 3.1 1.76 5 1.76s3.63-.66 5-1.76c-1.13-1.54-2.95-2.54-5-2.54M12 4c-4.42 0-8 3.58-8 8 0 1.8.6 3.45 1.59 4.79.84-1.05 1.92-1.89 3.17-2.42-.84-.84-1.36-2-1.36-3.27 0-2.54 2.06-4.6 4.6-4.6s4.6 2.06 4.6 4.6c0 1.28-.52 2.43-1.36 3.26 1.25.54 2.33 1.38 3.17 2.43 1-1.34 1.59-3 1.59-4.79 0-4.42-3.58-8-8-8m0 4.5c-1.44 0-2.6 1.16-2.6 2.6s1.16 2.6 2.6 2.6 2.6-1.16 2.6-2.6-1.16-2.6-2.6-2.6" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleBold.displayName = 'UserCircleBold';

// Triple export pattern
export { UserCircleBold, UserCircleBold as UserCircleBoldIcon, UserCircleBold as SiUserCircleBold };
export default UserCircleBold;
export type { UserCircleBoldProps };
