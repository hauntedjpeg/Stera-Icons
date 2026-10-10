import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleRegularProps = Omit<IconBaseProps, 'children'>;

const UserCircleRegular = memo(
  forwardRef<SVGSVGElement, UserCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 13.2c-2.22 0-4.18 1.12-5.34 2.84 1.44 1.22 3.3 1.96 5.34 1.96s3.9-.74 5.34-1.96c-1.16-1.72-3.12-2.84-5.34-2.84m0-11.7c-4.56 0-8.25 3.7-8.25 8.25 0 1.97.7 3.78 1.84 5.2.91-1.24 2.17-2.2 3.63-2.75-.96-.8-1.57-2-1.57-3.35 0-2.4 1.95-4.35 4.35-4.35s4.35 1.95 4.35 4.35c0 1.35-.61 2.55-1.58 3.35 1.47.54 2.73 1.5 3.64 2.74 1.15-1.41 1.84-3.22 1.84-5.19 0-4.56-3.7-8.25-8.25-8.25m0 4.5c-1.57 0-2.85 1.28-2.85 2.85s1.28 2.85 2.85 2.85 2.85-1.28 2.85-2.85S13.57 8.25 12 8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleRegular.displayName = 'UserCircleRegular';

// Triple export pattern
export { UserCircleRegular, UserCircleRegular as UserCircleRegularIcon, UserCircleRegular as SiUserCircleRegular };
export default UserCircleRegular;
export type { UserCircleRegularProps };
