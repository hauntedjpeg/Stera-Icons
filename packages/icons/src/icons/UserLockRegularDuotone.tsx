import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserLockRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserLockRegularDuotone = memo(
  forwardRef<SVGSVGElement, UserLockRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.92 3.25c2.9 0 5.25 2.35 5.25 5.25 0 1.74-.85 3.29-2.16 4.24.19.18.28.45.22.72-.1.4-.5.65-.9.55q-1.1-.26-2.41-.26c-3.33 0-5.67 1.32-6.67 3.46-.14.3-.2.43-.23.55-.02.1-.03.21 0 .44q.02.12.21.45.22.32.32.38c.28.2.52.22 1.57.22h5.12c.42 0 .75.34.75.75s-.33.75-.75.75H5.12c-.93 0-1.68.02-2.42-.49-.3-.2-.55-.52-.73-.8-.19-.3-.37-.66-.42-1.01q-.1-.57.01-1.04.14-.45.33-.84c.92-1.95 2.64-3.27 4.84-3.9-1.25-.96-2.06-2.47-2.06-4.17 0-2.9 2.35-5.25 5.25-5.25m0 1.5c-2.07 0-3.75 1.68-3.75 3.75s1.68 3.75 3.75 3.75 3.75-1.68 3.75-3.75-1.68-3.75-3.75-3.75" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M18.25 11.25c1.38 0 2.5 1.12 2.5 2.5v1.52c.99.12 1.75.96 1.75 1.98v2.5c0 1.1-.9 2-2 2H16c-1.1 0-2-.9-2-2v-2.5c0-1.02.76-1.86 1.75-1.98v-1.52c0-1.38 1.12-2.5 2.5-2.5M16 16.75c-.28 0-.5.22-.5.5v2.5c0 .28.22.5.5.5h4.5c.28 0 .5-.22.5-.5v-2.5c0-.28-.22-.5-.5-.5zm2.25-4c-.55 0-1 .45-1 1v1.5h2v-1.5c0-.55-.45-1-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

UserLockRegularDuotone.displayName = 'UserLockRegularDuotone';

// Triple export pattern
export { UserLockRegularDuotone, UserLockRegularDuotone as UserLockRegularDuotoneIcon, UserLockRegularDuotone as SiUserLockRegularDuotone };
export default UserLockRegularDuotone;
export type { UserLockRegularDuotoneProps };
