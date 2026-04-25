import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserRefreshFillProps = Omit<IconBaseProps, 'children'>;

const UserRefreshFill = memo(
  forwardRef<SVGSVGElement, UserRefreshFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6.75a4.35 4.35 0 0 1 2.54 7.88 7.7 7.7 0 0 1 3.63 2.66q.32-.38.6-.8a.88.88 0 0 1 1.46.97 9.87 9.87 0 0 1-18.1-5.35l-.51.5a.88.88 0 0 1-1.24-1.23l1.94-1.94a.96.96 0 0 1 1.35 0l1.95 1.94a.88.88 0 0 1-1.24 1.24l-.5-.5a8 8 0 0 0 1.95 5.17 7.7 7.7 0 0 1 3.63-2.66A4.34 4.34 0 0 1 12 6.75" />
        <path d="M12 2.13a9.87 9.87 0 0 1 9.87 9.76l.51-.5a.88.88 0 0 1 1.24 1.23l-1.95 1.94a.96.96 0 0 1-1.35 0l-1.94-1.94a.88.88 0 0 1 1.24-1.24l.5.5a8.12 8.12 0 0 0-14.9-4.37.88.88 0 0 1-1.45-.97A9.9 9.9 0 0 1 12 2.13" />
    </IconBase>
  ))
);

UserRefreshFill.displayName = 'UserRefreshFill';

// Triple export pattern (lucide-react style)
export { UserRefreshFill, UserRefreshFill as UserRefreshFillIcon, UserRefreshFill as SiUserRefreshFill };
export default UserRefreshFill;
export type { UserRefreshFillProps };
