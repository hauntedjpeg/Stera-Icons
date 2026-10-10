import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserRefreshFillProps = Omit<IconBaseProps, 'children'>;

const UserRefreshFill = memo(
  forwardRef<SVGSVGElement, UserRefreshFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6.75c2.4 0 4.35 1.95 4.35 4.35 0 1.45-.71 2.74-1.81 3.53 1.46.51 2.72 1.45 3.63 2.66q.32-.38.6-.8c.27-.4.81-.5 1.21-.24.4.27.52.8.25 1.21-1.77 2.66-4.8 4.41-8.23 4.41-5.42 0-9.81-4.36-9.87-9.76l-.51.5c-.34.35-.9.35-1.24 0-.34-.33-.34-.89 0-1.23l1.94-1.94c.38-.37.98-.37 1.35 0l1.95 1.94c.34.34.34.9 0 1.24s-.9.34-1.24 0l-.5-.5c.02 1.97.76 3.77 1.95 5.17.91-1.22 2.17-2.15 3.63-2.66-1.1-.79-1.81-2.08-1.81-3.53 0-2.4 1.95-4.35 4.35-4.35" />
        <path d="M12 2.13c5.42 0 9.81 4.36 9.87 9.76l.51-.5c.34-.35.9-.35 1.24 0 .34.33.34.89 0 1.23l-1.95 1.94c-.37.37-.97.37-1.35 0l-1.94-1.94c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0l.5.5c-.06-4.43-3.67-8-8.12-8-2.83 0-5.31 1.44-6.77 3.63-.27.4-.81.5-1.21.24-.4-.27-.52-.8-.25-1.21C5.54 3.88 8.57 2.13 12 2.13" />
    </IconBase>
  ))
);

UserRefreshFill.displayName = 'UserRefreshFill';

// Triple export pattern
export { UserRefreshFill, UserRefreshFill as UserRefreshFillIcon, UserRefreshFill as SiUserRefreshFill };
export default UserRefreshFill;
export type { UserRefreshFillProps };
