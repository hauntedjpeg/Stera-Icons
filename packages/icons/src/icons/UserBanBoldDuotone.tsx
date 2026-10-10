import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserBanBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserBanBoldDuotone = memo(
  forwardRef<SVGSVGElement, UserBanBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3c3.04 0 5.5 2.46 5.5 5.5 0 1.73-.8 3.28-2.05 4.29q.19.32.1.73c-.12.53-.66.87-1.2.74Q13.28 14 12 14c-3.26 0-5.5 1.3-6.44 3.32-.14.3-.19.4-.21.5q-.04.06 0 .34l.04.11.14.25q.07.13.16.22l.08.08c.21.15.36.18 1.43.18h5.12c.56 0 1 .45 1 1s-.44 1-1 1H7.2c-.9 0-1.75.03-2.56-.53-.34-.23-.61-.58-.8-.88s-.4-.7-.46-1.1q-.11-.6.02-1.14c.08-.33.23-.64.35-.88.89-1.9 2.5-3.21 4.55-3.9-1.1-1-1.8-2.46-1.8-4.07C6.5 5.46 8.96 3 12 3m0 2c-1.93 0-3.5 1.57-3.5 3.5S10.07 12 12 12s3.5-1.57 3.5-3.5S13.93 5 12 5" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M18.5 14.25c2.35 0 4.25 1.9 4.25 4.25s-1.9 4.25-4.25 4.25-4.25-1.9-4.25-4.25c0-1.15.46-2.2 1.2-2.96l.05-.05.05-.05c.77-.74 1.8-1.19 2.95-1.19m-2.4 2.9q-.34.6-.35 1.35c0 1.52 1.23 2.75 2.75 2.75q.74-.01 1.34-.35zm2.4-1.4q-.74.01-1.34.35l3.74 3.74q.34-.6.35-1.34c0-1.52-1.23-2.75-2.75-2.75" clipRule="evenodd" />
    </IconBase>
  ))
);

UserBanBoldDuotone.displayName = 'UserBanBoldDuotone';

// Triple export pattern
export { UserBanBoldDuotone, UserBanBoldDuotone as UserBanBoldDuotoneIcon, UserBanBoldDuotone as SiUserBanBoldDuotone };
export default UserBanBoldDuotone;
export type { UserBanBoldDuotoneProps };
