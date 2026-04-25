import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserRefreshBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserRefreshBoldDuotone = memo(
  forwardRef<SVGSVGElement, UserRefreshBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 6.5a4.6 4.6 0 0 1 3.24 7.86 8 8 0 0 1 3.17 2.43q-.61.82-1.4 1.45a6.2 6.2 0 0 0-10.01 0q-.8-.64-1.4-1.45a8 8 0 0 1 3.16-2.43A4.59 4.59 0 0 1 12 6.5m0 2a2.6 2.6 0 0 0-.27 5.19l.27.01.27-.01A2.6 2.6 0 0 0 12 8.5" clipRule="evenodd" opacity={.4} />
        <path d="M2.24 9.35c.42-.42 1.1-.42 1.52 0l1.95 1.94a1 1 0 1 1-1.42 1.42l-.28-.28a8 8 0 0 0 14.66 4 1 1 0 0 1 1.66 1.1A10 10 0 0 1 2.01 12.4l-.3.3a1 1 0 1 1-1.42-1.4zM12 2a10 10 0 0 1 9.99 9.6l.3-.3a1 1 0 0 1 1.42 1.4l-1.95 1.95c-.42.42-1.1.42-1.52 0l-1.95-1.94a1 1 0 1 1 1.42-1.42l.28.28a8 8 0 0 0-14.66-4 1 1 0 0 1-1.66-1.1A10 10 0 0 1 12 2" />
    </IconBase>
  ))
);

UserRefreshBoldDuotone.displayName = 'UserRefreshBoldDuotone';

// Triple export pattern (lucide-react style)
export { UserRefreshBoldDuotone, UserRefreshBoldDuotone as UserRefreshBoldDuotoneIcon, UserRefreshBoldDuotone as SiUserRefreshBoldDuotone };
export default UserRefreshBoldDuotone;
export type { UserRefreshBoldDuotoneProps };
