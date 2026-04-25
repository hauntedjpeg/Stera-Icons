import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserRefreshBoldProps = Omit<IconBaseProps, 'children'>;

const UserRefreshBold = memo(
  forwardRef<SVGSVGElement, UserRefreshBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 6.5a4.6 4.6 0 0 1 3.24 7.86 8 8 0 0 1 3.17 2.42q.14-.16.26-.36a1 1 0 0 1 1.66 1.11A10 10 0 0 1 2.01 12.4l-.3.3a1 1 0 1 1-1.42-1.4l1.95-1.95c.42-.42 1.1-.42 1.52 0l1.95 1.94a1 1 0 1 1-1.42 1.42l-.28-.28a8 8 0 0 0 1.58 4.36 8 8 0 0 1 3.17-2.42A4.59 4.59 0 0 1 12 6.5m0 9.2a6.2 6.2 0 0 0-5 2.54 7.96 7.96 0 0 0 10 0 6.2 6.2 0 0 0-5-2.54m0-7.2a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2" clipRule="evenodd" />
        <path d="M12 2a10 10 0 0 1 9.99 9.6l.3-.3a1 1 0 0 1 1.42 1.4l-1.95 1.95c-.42.42-1.1.42-1.52 0l-1.95-1.94a1 1 0 1 1 1.42-1.42l.28.28a8 8 0 0 0-14.66-4 1 1 0 0 1-1.66-1.1A10 10 0 0 1 12 2" />
    </IconBase>
  ))
);

UserRefreshBold.displayName = 'UserRefreshBold';

// Triple export pattern (lucide-react style)
export { UserRefreshBold, UserRefreshBold as UserRefreshBoldIcon, UserRefreshBold as SiUserRefreshBold };
export default UserRefreshBold;
export type { UserRefreshBoldProps };
