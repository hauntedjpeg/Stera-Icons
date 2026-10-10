import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserBoldDuotone = memo(
  forwardRef<SVGSVGElement, UserBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.7 12.57c2.05.69 3.66 2 4.55 3.9.12.24.27.55.35.88q.13.54.02 1.14c-.07.4-.27.8-.46 1.1s-.47.65-.8.88c-.81.56-1.65.53-2.56.53H7.2c-.9 0-1.75.03-2.56-.53-.33-.23-.61-.58-.8-.88s-.4-.7-.46-1.1q-.11-.6.02-1.14c.08-.33.23-.64.35-.88.89-1.9 2.5-3.21 4.55-3.9.98.89 2.27 1.43 3.7 1.43s2.72-.54 3.7-1.43M12 14c-3.26 0-5.5 1.3-6.44 3.32-.14.3-.19.4-.21.5q-.04.06 0 .34l.04.11.14.25q.07.13.16.22l.08.08c.21.15.36.18 1.43.18h9.6c1.07 0 1.22-.03 1.43-.18l.08-.08.16-.22.14-.25.04-.1q.04-.3 0-.35c-.02-.1-.07-.2-.2-.5C17.48 15.29 15.25 14 12 14" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 3c3.04 0 5.5 2.46 5.5 5.5S15.04 14 12 14s-5.5-2.46-5.5-5.5S8.96 3 12 3m0 2c-1.93 0-3.5 1.57-3.5 3.5S10.07 12 12 12s3.5-1.57 3.5-3.5S13.93 5 12 5" clipRule="evenodd" />
    </IconBase>
  ))
);

UserBoldDuotone.displayName = 'UserBoldDuotone';

// Triple export pattern
export { UserBoldDuotone, UserBoldDuotone as UserBoldDuotoneIcon, UserBoldDuotone as SiUserBoldDuotone };
export default UserBoldDuotone;
export type { UserBoldDuotoneProps };
