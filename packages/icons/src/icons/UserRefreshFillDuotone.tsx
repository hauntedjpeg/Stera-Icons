import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserRefreshFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserRefreshFillDuotone = memo(
  forwardRef<SVGSVGElement, UserRefreshFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 15.58c2.14 0 4.03 1.06 5.17 2.68-1.4 1.17-3.2 1.86-5.17 1.86s-3.77-.7-5.17-1.86c1.14-1.62 3.03-2.68 5.17-2.68M12 8.38c1.5 0 2.73 1.21 2.73 2.72 0 1.5-1.23 2.72-2.73 2.73S9.28 12.6 9.28 11.1 10.5 8.38 12 8.38" opacity={0.4} />
        <path fillRule="evenodd" d="M12 6.63c2.47 0 4.47 2 4.48 4.47 0 1.31-.57 2.49-1.47 3.3 1.36.55 2.53 1.45 3.4 2.59q.19-.24.36-.5c.27-.4.81-.5 1.21-.24.4.27.52.8.25 1.21-1.77 2.66-4.8 4.41-8.23 4.41-5.42 0-9.81-4.36-9.87-9.76l-.51.5c-.34.35-.9.35-1.24 0-.34-.33-.34-.89 0-1.23l1.94-1.94c.38-.37.98-.37 1.35 0l1.95 1.94c.34.34.34.9 0 1.24s-.9.34-1.24 0l-.5-.5c.02 1.83.66 3.52 1.71 4.87.87-1.14 2.04-2.04 3.4-2.58-.9-.82-1.47-2-1.47-3.31 0-2.47 2-4.47 4.48-4.47m0 8.95c-2.14 0-4.03 1.06-5.17 2.68 1.4 1.17 3.2 1.86 5.17 1.86s3.77-.7 5.17-1.86c-1.14-1.62-3.03-2.68-5.17-2.68m0-7.2c-1.5 0-2.72 1.21-2.73 2.72 0 1.5 1.22 2.72 2.73 2.73 1.5 0 2.73-1.23 2.73-2.73S13.5 8.38 12 8.38" clipRule="evenodd" />
        <path d="M12 2.13c5.42 0 9.81 4.36 9.87 9.76l.51-.5c.34-.35.9-.35 1.24 0 .34.33.34.89 0 1.23l-1.95 1.94c-.37.37-.97.37-1.35 0l-1.94-1.94c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0l.5.5c-.06-4.43-3.67-8-8.12-8-2.83 0-5.31 1.44-6.77 3.63-.27.4-.81.5-1.21.24-.4-.27-.52-.8-.25-1.21C5.54 3.88 8.57 2.13 12 2.13" />
    </IconBase>
  ))
);

UserRefreshFillDuotone.displayName = 'UserRefreshFillDuotone';

// Triple export pattern
export { UserRefreshFillDuotone, UserRefreshFillDuotone as UserRefreshFillDuotoneIcon, UserRefreshFillDuotone as SiUserRefreshFillDuotone };
export default UserRefreshFillDuotone;
export type { UserRefreshFillDuotoneProps };
