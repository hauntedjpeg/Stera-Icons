import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserLockBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserLockBoldDuotone = memo(
  forwardRef<SVGSVGElement, UserLockBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.92 3c3.04 0 5.5 2.46 5.5 5.5 0 1.73-.8 3.28-2.06 4.29q.2.32.11.73c-.13.53-.67.87-1.2.74Q11.2 14 9.92 14c-3.27 0-5.5 1.3-6.45 3.32-.14.3-.18.4-.2.5q-.04.06 0 .34l.04.11q.05.12.13.25l.17.22.08.08c.21.15.36.18 1.43.18h5.12c.55 0 1 .45 1 1s-.45 1-1 1H5.12c-.91 0-1.75.03-2.56-.53-.34-.23-.62-.58-.8-.88-.2-.3-.4-.7-.46-1.1q-.11-.6.02-1.14c.08-.33.23-.64.34-.88.9-1.9 2.5-3.21 4.56-3.9-1.1-1-1.8-2.46-1.8-4.07 0-3.04 2.46-5.5 5.5-5.5m0 2c-1.93 0-3.5 1.57-3.5 3.5S7.99 12 9.92 12s3.5-1.57 3.5-3.5S11.85 5 9.92 5" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M18.25 11c1.52 0 2.75 1.23 2.75 2.75v1.3c1 .24 1.75 1.13 1.75 2.2v2.5c0 1.24-1 2.25-2.25 2.25H16c-1.24 0-2.25-1-2.25-2.25v-2.5c0-1.07.75-1.96 1.75-2.2v-1.3c0-1.52 1.23-2.75 2.75-2.75M16 17q-.23.02-.25.25v2.5q.02.23.25.25h4.5q.23-.02.25-.25v-2.5q-.02-.23-.25-.25zm2.25-4c-.41 0-.75.34-.75.75V15H19v-1.25c0-.41-.34-.75-.75-.75" clipRule="evenodd" />
    </IconBase>
  ))
);

UserLockBoldDuotone.displayName = 'UserLockBoldDuotone';

// Triple export pattern
export { UserLockBoldDuotone, UserLockBoldDuotone as UserLockBoldDuotoneIcon, UserLockBoldDuotone as SiUserLockBoldDuotone };
export default UserLockBoldDuotone;
export type { UserLockBoldDuotoneProps };
