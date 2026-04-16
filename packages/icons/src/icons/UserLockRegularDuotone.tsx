import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserLockRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserLockRegularDuotone = memo(
  forwardRef<SVGSVGElement, UserLockRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.92 3.25a5.25 5.25 0 0 1 3.09 9.5.75.75 0 0 1-.68 1.26q-1.1-.26-2.41-.26c-3.33 0-5.67 1.32-6.67 3.46-.14.3-.2.43-.23.55-.02.1-.03.21 0 .44q.02.12.21.45.22.32.32.38c.28.2.52.22 1.57.22h5.12a.75.75 0 0 1 0 1.5H5.12c-.93 0-1.68.02-2.42-.49-.3-.2-.55-.52-.73-.8a2.53 2.53 0 0 1-.4-2.05q.12-.45.32-.84a7.4 7.4 0 0 1 4.84-3.9 5.24 5.24 0 0 1 3.19-9.42m0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M18.25 11.25a2.5 2.5 0 0 1 2.5 2.5v1.52a2 2 0 0 1 1.75 1.98v2.5a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 1.75-1.98v-1.52a2.5 2.5 0 0 1 2.5-2.5M16 16.75a.5.5 0 0 0-.5.5v2.5c0 .28.22.5.5.5h4.5a.5.5 0 0 0 .5-.5v-2.5a.5.5 0 0 0-.5-.5zm2.25-4a1 1 0 0 0-1 1v1.5h2v-1.5a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

UserLockRegularDuotone.displayName = 'UserLockRegularDuotone';

// Triple export pattern (lucide-react style)
export { UserLockRegularDuotone, UserLockRegularDuotone as UserLockRegularDuotoneIcon, UserLockRegularDuotone as SiUserLockRegularDuotone };
export default UserLockRegularDuotone;
export type { UserLockRegularDuotoneProps };
