import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserRefreshBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserRefreshBoldDuotone = memo(
  forwardRef<SVGSVGElement, UserRefreshBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 6.5c2.54 0 4.6 2.06 4.6 4.6 0 1.28-.52 2.43-1.36 3.26 1.25.54 2.33 1.38 3.17 2.43q-.61.82-1.4 1.45C15.86 16.7 14.04 15.7 12 15.7s-3.87 1-5 2.54q-.8-.64-1.4-1.45c.83-1.05 1.91-1.89 3.16-2.43-.84-.83-1.36-1.98-1.36-3.26 0-2.54 2.06-4.6 4.6-4.6m0 2c-1.44 0-2.6 1.16-2.6 2.6 0 1.35 1.02 2.45 2.33 2.59l.27.01.27-.01c1.3-.14 2.33-1.24 2.33-2.59 0-1.44-1.16-2.6-2.6-2.6" clipRule="evenodd" opacity={.4} />
        <path d="M2.24 9.35c.42-.42 1.1-.42 1.52 0l1.95 1.94c.39.4.39 1.03 0 1.42-.4.39-1.03.39-1.42 0l-.28-.28C4.23 16.65 7.72 20 12 20c2.78 0 5.23-1.42 6.67-3.58.3-.46.92-.58 1.38-.28s.59.93.28 1.39C18.54 20.23 15.48 22 12 22c-5.39 0-9.78-4.26-9.99-9.6l-.3.3c-.4.4-1.03.4-1.42 0-.39-.38-.39-1.02 0-1.4zM12 2c5.39 0 9.78 4.26 9.99 9.6l.3-.3c.4-.4 1.03-.4 1.42 0 .39.38.39 1.02 0 1.4l-1.95 1.95c-.42.42-1.1.42-1.52 0l-1.95-1.94c-.39-.4-.39-1.03 0-1.42.4-.39 1.03-.39 1.42 0l.28.28C19.77 7.35 16.28 4 12 4 9.22 4 6.77 5.42 5.33 7.58c-.3.46-.92.58-1.38.28s-.59-.93-.28-1.39C5.46 3.77 8.52 2 12 2" />
    </IconBase>
  ))
);

UserRefreshBoldDuotone.displayName = 'UserRefreshBoldDuotone';

// Triple export pattern
export { UserRefreshBoldDuotone, UserRefreshBoldDuotone as UserRefreshBoldDuotoneIcon, UserRefreshBoldDuotone as SiUserRefreshBoldDuotone };
export default UserRefreshBoldDuotone;
export type { UserRefreshBoldDuotoneProps };
