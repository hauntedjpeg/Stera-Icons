import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserRefreshRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserRefreshRegularDuotone = memo(
  forwardRef<SVGSVGElement, UserRefreshRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 6.75c2.4 0 4.35 1.95 4.35 4.35 0 1.35-.61 2.55-1.57 3.35 1.46.54 2.72 1.5 3.63 2.75q-.48.6-1.07 1.09c-1.16-1.72-3.12-2.84-5.34-2.84s-4.18 1.12-5.34 2.84q-.59-.5-1.07-1.1c.91-1.23 2.17-2.2 3.63-2.74-.96-.8-1.57-2-1.57-3.35 0-2.4 1.95-4.35 4.35-4.35m0 1.5c-1.57 0-2.85 1.28-2.85 2.85 0 1.48 1.12 2.69 2.56 2.84l.29.01.3-.01c1.43-.15 2.55-1.36 2.55-2.84 0-1.57-1.28-2.85-2.85-2.85" clipRule="evenodd" opacity={.4} />
        <path d="M2.41 9.53c.33-.33.85-.33 1.18 0l1.94 1.94c.3.3.3.77 0 1.06s-.77.3-1.06 0l-.72-.72V12c0 4.56 3.7 8.25 8.25 8.25 3.05 0 5.72-1.66 7.15-4.13.2-.35.66-.48 1.02-.27s.48.67.28 1.03c-1.69 2.9-4.84 4.87-8.45 4.87-5.38 0-9.75-4.37-9.75-9.75v-.2l-.72.73c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06zM12 2.25c5.38 0 9.75 4.37 9.75 9.75v.2l.72-.73c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1.94 1.94c-.33.33-.85.33-1.18 0l-1.94-1.94c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l.72.71V12c0-4.56-3.7-8.25-8.25-8.25-2.86 0-5.38 1.45-6.86 3.67l-.29.46c-.2.35-.66.48-1.02.27s-.48-.67-.28-1.03l.34-.54C5.64 3.98 8.62 2.25 12 2.25" />
    </IconBase>
  ))
);

UserRefreshRegularDuotone.displayName = 'UserRefreshRegularDuotone';

// Triple export pattern
export { UserRefreshRegularDuotone, UserRefreshRegularDuotone as UserRefreshRegularDuotoneIcon, UserRefreshRegularDuotone as SiUserRefreshRegularDuotone };
export default UserRefreshRegularDuotone;
export type { UserRefreshRegularDuotoneProps };
