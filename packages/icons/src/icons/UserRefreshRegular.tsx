import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserRefreshRegularProps = Omit<IconBaseProps, 'children'>;

const UserRefreshRegular = memo(
  forwardRef<SVGSVGElement, UserRefreshRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 6.75a4.35 4.35 0 0 1 2.77 7.7 8 8 0 0 1 3.64 2.74q.4-.5.74-1.07a.75.75 0 0 1 1.3.76A9.75 9.75 0 0 1 2.25 12v-.2l-.72.73a.75.75 0 0 1-1.06-1.06l1.94-1.94a.83.83 0 0 1 1.18 0l1.94 1.94a.75.75 0 0 1-1.06 1.06l-.72-.72V12c0 1.97.7 3.78 1.84 5.2a8 8 0 0 1 3.63-2.75A4.34 4.34 0 0 1 12 6.75m0 8.7a6.4 6.4 0 0 0-5.34 2.84 8.2 8.2 0 0 0 10.68 0A6.4 6.4 0 0 0 12 15.45m0-7.2a2.85 2.85 0 1 0 0 5.7 2.85 2.85 0 0 0 0-5.7" clipRule="evenodd" />
        <path d="M12 2.25A9.75 9.75 0 0 1 21.75 12v.2l.72-.73a.75.75 0 1 1 1.06 1.06l-1.94 1.94a.83.83 0 0 1-1.18 0l-1.94-1.94a.75.75 0 1 1 1.06-1.06l.72.71V12a8.25 8.25 0 0 0-15.4-4.12.75.75 0 0 1-1.3-.76A9.8 9.8 0 0 1 12 2.25" />
    </IconBase>
  ))
);

UserRefreshRegular.displayName = 'UserRefreshRegular';

// Triple export pattern (lucide-react style)
export { UserRefreshRegular, UserRefreshRegular as UserRefreshRegularIcon, UserRefreshRegular as SiUserRefreshRegular };
export default UserRefreshRegular;
export type { UserRefreshRegularProps };
