import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UsersFillProps = Omit<IconBaseProps, 'children'>;

const UsersFill = memo(
  forwardRef<SVGSVGElement, UsersFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 3.13a5.38 5.38 0 0 1 3.33 9.59c1.77.7 3.14 2 3.9 3.82q.2.43.32.91a2.6 2.6 0 0 1-.46 2.13 3 3 0 0 1-.77.81c-.76.51-1.58.48-2.52.48H5.2c-.94 0-1.75.03-2.52-.48a3 3 0 0 1-.77-.81 2.64 2.64 0 0 1-.46-2.12q.12-.5.32-.92a6.8 6.8 0 0 1 3.9-3.82A5.36 5.36 0 0 1 9 3.12" />
        <path d="M15 3.13a5.38 5.38 0 0 1 3.33 9.6c1.78.7 3.15 2 3.9 3.8q.2.45.32.92a2.6 2.6 0 0 1-.46 2.13 3 3 0 0 1-.77.81c-.76.51-1.58.48-2.52.48h-.51a.88.88 0 0 1 0-1.75h.51c1.1 0 1.31-.02 1.55-.18q.08-.05.29-.33.18-.3.19-.4a1 1 0 0 0 0-.39 5.28 5.28 0 0 0-4.35-3.81 1.1 1.1 0 0 1-.18-2.13l.25-.1A3.63 3.63 0 0 0 15 4.88a.88.88 0 0 1 0-1.75" />
    </IconBase>
  ))
);

UsersFill.displayName = 'UsersFill';

// Triple export pattern (lucide-react style)
export { UsersFill, UsersFill as UsersFillIcon, UsersFill as SiUsersFill };
export default UsersFill;
export type { UsersFillProps };
