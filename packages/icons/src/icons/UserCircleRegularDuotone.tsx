import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 6.75c2.4 0 4.35 1.95 4.35 4.35 0 1.35-.61 2.55-1.58 3.35 1.47.54 2.73 1.5 3.64 2.74q-.48.6-1.07 1.1c-1.16-1.72-3.12-2.84-5.34-2.84s-4.18 1.12-5.34 2.84q-.59-.5-1.07-1.1c.91-1.23 2.17-2.2 3.63-2.74-.96-.8-1.57-2-1.57-3.35 0-2.4 1.95-4.35 4.35-4.35m0 1.5c-1.57 0-2.85 1.28-2.85 2.85s1.28 2.85 2.85 2.85 2.85-1.28 2.85-2.85S13.57 8.25 12 8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleRegularDuotone.displayName = 'UserCircleRegularDuotone';

// Triple export pattern
export { UserCircleRegularDuotone, UserCircleRegularDuotone as UserCircleRegularDuotoneIcon, UserCircleRegularDuotone as SiUserCircleRegularDuotone };
export default UserCircleRegularDuotone;
export type { UserCircleRegularDuotoneProps };
