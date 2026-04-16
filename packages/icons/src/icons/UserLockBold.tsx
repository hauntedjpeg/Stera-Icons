import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserLockBoldProps = Omit<IconBaseProps, 'children'>;

const UserLockBold = memo(
  forwardRef<SVGSVGElement, UserLockBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.25 11A2.75 2.75 0 0 1 21 13.75v1.3c1 .24 1.75 1.13 1.75 2.2v2.5c0 1.24-1 2.25-2.25 2.25H16c-1.24 0-2.25-1-2.25-2.25v-2.5c0-1.07.75-1.96 1.75-2.2v-1.3A2.75 2.75 0 0 1 18.25 11M16 17a.25.25 0 0 0-.25.25v2.5q.02.23.25.25h4.5q.23-.02.25-.25v-2.5a.25.25 0 0 0-.25-.25zm2.25-4a.75.75 0 0 0-.75.75V15H19v-1.25a.75.75 0 0 0-.75-.75M9.92 3a5.5 5.5 0 0 1 3.44 9.79 1 1 0 0 1-1.1 1.47A10 10 0 0 0 9.93 14c-3.27 0-5.5 1.3-6.45 3.32-.14.3-.18.4-.2.5a1 1 0 0 0 0 .34l.04.11a2 2 0 0 0 .38.55c.21.15.36.18 1.43.18h5.12a1 1 0 0 1 0 2H5.12c-.91 0-1.75.03-2.56-.53a3 3 0 0 1-.8-.88 2.78 2.78 0 0 1-.43-2.24c.07-.33.22-.64.33-.88.9-1.9 2.5-3.21 4.56-3.9A5.49 5.49 0 0 1 9.92 3m0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clipRule="evenodd" />
    </IconBase>
  ))
);

UserLockBold.displayName = 'UserLockBold';

// Triple export pattern (lucide-react style)
export { UserLockBold, UserLockBold as UserLockBoldIcon, UserLockBold as SiUserLockBold };
export default UserLockBold;
export type { UserLockBoldProps };
