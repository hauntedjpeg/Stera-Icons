import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserXBoldProps = Omit<IconBaseProps, 'children'>;

const UserXBold = memo(
  forwardRef<SVGSVGElement, UserXBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3c3.04 0 5.5 2.46 5.5 5.5 0 1.73-.8 3.28-2.05 4.29q.19.32.1.73c-.12.53-.66.87-1.2.74Q13.28 14 12 14c-3.26 0-5.5 1.3-6.44 3.32-.14.3-.19.4-.21.5q-.04.06 0 .34l.04.11.14.25q.07.13.16.22l.08.08c.21.15.36.18 1.43.18h5.12c.56 0 1 .45 1 1s-.44 1-1 1H7.2c-.9 0-1.75.03-2.56-.53-.34-.23-.61-.58-.8-.88s-.4-.7-.46-1.1q-.11-.6.02-1.14c.08-.33.23-.64.35-.88.89-1.9 2.5-3.21 4.55-3.9-1.1-1-1.8-2.46-1.8-4.07C6.5 5.46 8.96 3 12 3m0 2c-1.93 0-3.5 1.57-3.5 3.5S10.07 12 12 12s3.5-1.57 3.5-3.5S13.93 5 12 5" clipRule="evenodd" />
        <path d="M18.8 15.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L18.92 18l1.3 1.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-1.29-1.29-1.3 1.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l1.28-1.3-1.29-1.28c-.39-.4-.39-1.03 0-1.42.4-.39 1.03-.39 1.42 0l1.29 1.3z" />
    </IconBase>
  ))
);

UserXBold.displayName = 'UserXBold';

// Triple export pattern
export { UserXBold, UserXBold as UserXBoldIcon, UserXBold as SiUserXBold };
export default UserXBold;
export type { UserXBoldProps };
