import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleBoldProps = Omit<IconBaseProps, 'children'>;

const UserCircleBold = memo(
  forwardRef<SVGSVGElement, UserCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 14.35c-2.2 0-4.16 1.08-5.36 2.75 1.46 1.19 3.33 1.9 5.36 1.9s3.9-.71 5.36-1.9c-1.2-1.67-3.15-2.75-5.36-2.75M12 3.5c-4.7 0-8.5 3.8-8.5 8.5 0 1.93.65 3.71 1.73 5.14.9-1.14 2.09-2.05 3.45-2.62-.91-.88-1.48-2.1-1.48-3.47 0-2.65 2.15-4.8 4.8-4.8s4.8 2.15 4.8 4.8c0 1.36-.57 2.6-1.48 3.46 1.36.58 2.55 1.49 3.45 2.63 1.08-1.43 1.73-3.2 1.73-5.14 0-4.7-3.8-8.5-8.5-8.5m0 4.75c-1.55 0-2.8 1.25-2.8 2.8s1.25 2.8 2.8 2.8 2.8-1.25 2.8-2.8-1.25-2.8-2.8-2.8" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleBold.displayName = 'UserCircleBold';

// Triple export pattern
export { UserCircleBold, UserCircleBold as UserCircleBoldIcon, UserCircleBold as SiUserCircleBold };
export default UserCircleBold;
export type { UserCircleBoldProps };
