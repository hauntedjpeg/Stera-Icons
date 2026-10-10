import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserRefreshRegularProps = Omit<IconBaseProps, 'children'>;

const UserRefreshRegular = memo(
  forwardRef<SVGSVGElement, UserRefreshRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 6.75c2.4 0 4.35 1.95 4.35 4.35 0 1.35-.61 2.55-1.58 3.35 1.47.54 2.73 1.5 3.64 2.74q.4-.5.74-1.07c.2-.35.66-.48 1.02-.27s.48.67.28 1.03c-1.69 2.9-4.84 4.87-8.45 4.87-5.38 0-9.75-4.37-9.75-9.75v-.2l-.72.73c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l1.94-1.94c.33-.33.85-.33 1.18 0l1.94 1.94c.3.3.3.77 0 1.06s-.77.3-1.06 0l-.72-.72V12c0 1.97.7 3.78 1.84 5.2.91-1.24 2.17-2.2 3.63-2.75-.96-.8-1.57-2-1.57-3.35 0-2.4 1.95-4.35 4.35-4.35m0 8.7c-2.22 0-4.18 1.12-5.34 2.84 1.44 1.22 3.3 1.96 5.34 1.96s3.9-.74 5.34-1.96c-1.16-1.71-3.12-2.84-5.34-2.84m0-7.2c-1.57 0-2.85 1.28-2.85 2.85s1.28 2.85 2.85 2.85 2.85-1.28 2.85-2.85S13.57 8.25 12 8.25" clipRule="evenodd" />
        <path d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75v.2l.72-.73c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1.94 1.94c-.33.33-.85.33-1.18 0l-1.94-1.94c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l.72.71V12c0-4.56-3.7-8.25-8.25-8.25-2.86 0-5.38 1.45-6.86 3.67l-.29.46c-.2.35-.66.48-1.02.27s-.48-.67-.28-1.03l.34-.54C5.64 3.98 8.62 2.25 12 2.25" />
    </IconBase>
  ))
);

UserRefreshRegular.displayName = 'UserRefreshRegular';

// Triple export pattern
export { UserRefreshRegular, UserRefreshRegular as UserRefreshRegularIcon, UserRefreshRegular as SiUserRefreshRegular };
export default UserRefreshRegular;
export type { UserRefreshRegularProps };
