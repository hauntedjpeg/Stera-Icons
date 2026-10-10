import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserRefreshBoldProps = Omit<IconBaseProps, 'children'>;

const UserRefreshBold = memo(
  forwardRef<SVGSVGElement, UserRefreshBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 6.5c2.54 0 4.6 2.06 4.6 4.6 0 1.28-.52 2.43-1.36 3.26 1.25.54 2.33 1.38 3.17 2.42q.14-.16.26-.36c.3-.46.92-.58 1.38-.28s.59.93.28 1.39C18.54 20.23 15.48 22 12 22c-5.39 0-9.78-4.26-9.99-9.6l-.3.3c-.4.4-1.03.4-1.42 0-.39-.38-.39-1.02 0-1.4l1.95-1.95c.42-.42 1.1-.42 1.52 0l1.95 1.94c.39.4.39 1.03 0 1.42-.4.39-1.03.39-1.42 0l-.28-.28c.09 1.63.66 3.13 1.58 4.36.84-1.05 1.92-1.89 3.17-2.42-.84-.84-1.36-2-1.36-3.27 0-2.54 2.06-4.6 4.6-4.6m0 9.2c-2.05 0-3.87 1-5 2.54 1.37 1.1 3.1 1.76 5 1.76s3.63-.66 5-1.76c-1.13-1.54-2.95-2.54-5-2.54m0-7.2c-1.44 0-2.6 1.16-2.6 2.6s1.16 2.6 2.6 2.6 2.6-1.16 2.6-2.6-1.16-2.6-2.6-2.6" clipRule="evenodd" />
        <path d="M12 2c5.39 0 9.78 4.26 9.99 9.6l.3-.3c.4-.4 1.03-.4 1.42 0 .39.38.39 1.02 0 1.4l-1.95 1.95c-.42.42-1.1.42-1.52 0l-1.95-1.94c-.39-.4-.39-1.03 0-1.42.4-.39 1.03-.39 1.42 0l.28.28C19.77 7.35 16.28 4 12 4 9.22 4 6.77 5.42 5.33 7.58c-.3.46-.92.58-1.38.28s-.59-.93-.28-1.39C5.46 3.77 8.52 2 12 2" />
    </IconBase>
  ))
);

UserRefreshBold.displayName = 'UserRefreshBold';

// Triple export pattern
export { UserRefreshBold, UserRefreshBold as UserRefreshBoldIcon, UserRefreshBold as SiUserRefreshBold };
export default UserRefreshBold;
export type { UserRefreshBoldProps };
