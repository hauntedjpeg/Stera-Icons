import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserRefreshRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserRefreshRegularDuotone = memo(
  forwardRef<SVGSVGElement, UserRefreshRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 6.75a4.35 4.35 0 0 1 2.78 7.7 8 8 0 0 1 3.63 2.75q-.48.6-1.07 1.09a6.44 6.44 0 0 0-10.68 0 8 8 0 0 1-1.07-1.1 8 8 0 0 1 3.63-2.74A4.34 4.34 0 0 1 12 6.75m0 1.5a2.85 2.85 0 0 0-.3 5.69l.3.01.3-.01a2.85 2.85 0 0 0-.3-5.69" clipRule="evenodd" opacity={.4} />
        <path d="M2.41 9.53a.83.83 0 0 1 1.18 0l1.94 1.94a.75.75 0 0 1-1.06 1.06l-.72-.72V12a8.25 8.25 0 0 0 15.4 4.12.75.75 0 0 1 1.3.76A9.75 9.75 0 0 1 2.25 12v-.2l-.72.73a.75.75 0 0 1-1.06-1.06zM12 2.25A9.75 9.75 0 0 1 21.75 12v.2l.72-.73a.75.75 0 1 1 1.06 1.06l-1.94 1.94a.83.83 0 0 1-1.18 0l-1.94-1.94a.75.75 0 1 1 1.06-1.06l.72.71V12a8.25 8.25 0 0 0-15.4-4.12.75.75 0 0 1-1.3-.76A9.8 9.8 0 0 1 12 2.25" />
    </IconBase>
  ))
);

UserRefreshRegularDuotone.displayName = 'UserRefreshRegularDuotone';

// Triple export pattern (lucide-react style)
export { UserRefreshRegularDuotone, UserRefreshRegularDuotone as UserRefreshRegularDuotoneIcon, UserRefreshRegularDuotone as SiUserRefreshRegularDuotone };
export default UserRefreshRegularDuotone;
export type { UserRefreshRegularDuotoneProps };
