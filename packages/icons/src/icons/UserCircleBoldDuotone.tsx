import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 6.25c2.65 0 4.8 2.15 4.8 4.8 0 1.36-.57 2.6-1.48 3.46 1.36.58 2.55 1.49 3.45 2.63q-.62.81-1.41 1.46c-1.2-1.67-3.15-2.75-5.36-2.75-2.2 0-4.16 1.08-5.36 2.75q-.79-.65-1.4-1.46c.9-1.14 2.08-2.05 3.44-2.62-.91-.88-1.48-2.1-1.48-3.47 0-2.65 2.15-4.8 4.8-4.8m0 2c-1.55 0-2.8 1.25-2.8 2.8s1.25 2.8 2.8 2.8 2.8-1.25 2.8-2.8-1.25-2.8-2.8-2.8" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleBoldDuotone.displayName = 'UserCircleBoldDuotone';

// Triple export pattern
export { UserCircleBoldDuotone, UserCircleBoldDuotone as UserCircleBoldDuotoneIcon, UserCircleBoldDuotone as SiUserCircleBoldDuotone };
export default UserCircleBoldDuotone;
export type { UserCircleBoldDuotoneProps };
