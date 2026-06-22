import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserRefreshFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserRefreshFillDuotone = memo(
  forwardRef<SVGSVGElement, UserRefreshFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 15.58a6.3 6.3 0 0 1 5.17 2.68 8.1 8.1 0 0 1-10.34 0A6.3 6.3 0 0 1 12 15.58M12 8.38a2.73 2.73 0 1 1 0 5.45 2.73 2.73 0 0 1 0-5.45" opacity={0.4} />
        <path fillRule="evenodd" d="M12 6.63a4.48 4.48 0 0 1 3.01 7.78 8 8 0 0 1 3.4 2.58q.19-.24.36-.5a.88.88 0 0 1 1.46.97 9.87 9.87 0 0 1-18.1-5.35l-.51.5a.88.88 0 0 1-1.24-1.23l1.94-1.94a.96.96 0 0 1 1.35 0l1.95 1.94a.88.88 0 0 1-1.24 1.24l-.5-.5a8 8 0 0 0 1.71 4.87A8 8 0 0 1 9 14.41 4.46 4.46 0 0 1 12 6.63m0 8.95a6.3 6.3 0 0 0-5.17 2.68 8.1 8.1 0 0 0 10.34 0A6.3 6.3 0 0 0 12 15.58m0-7.2a2.73 2.73 0 1 0 0 5.45 2.73 2.73 0 0 0 0-5.45" clipRule="evenodd" />
        <path d="M12 2.13a9.87 9.87 0 0 1 9.87 9.76l.51-.5a.88.88 0 0 1 1.24 1.23l-1.95 1.94a.96.96 0 0 1-1.35 0l-1.94-1.94a.88.88 0 0 1 1.24-1.24l.5.5a8.12 8.12 0 0 0-14.9-4.37.88.88 0 0 1-1.45-.97A9.9 9.9 0 0 1 12 2.13" />
    </IconBase>
  ))
);

UserRefreshFillDuotone.displayName = 'UserRefreshFillDuotone';

// Triple export pattern (lucide-react style)
export { UserRefreshFillDuotone, UserRefreshFillDuotone as UserRefreshFillDuotoneIcon, UserRefreshFillDuotone as SiUserRefreshFillDuotone };
export default UserRefreshFillDuotone;
export type { UserRefreshFillDuotoneProps };
