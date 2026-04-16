import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UsersFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UsersFillDuotone = memo(
  forwardRef<SVGSVGElement, UsersFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 3.13a5.38 5.38 0 0 1 3.33 9.6c1.78.7 3.15 2 3.9 3.8q.2.45.32.92a2.6 2.6 0 0 1-.46 2.13c-.19.28-.46.6-.77.81-.77.51-1.58.48-2.52.48h-.51a.87.87 0 1 1 0-1.75h.51c1.1 0 1.31-.02 1.55-.18.04-.03.16-.14.28-.33q.19-.3.2-.4a1 1 0 0 0 0-.39 5.28 5.28 0 0 0-4.35-3.81 1.1 1.1 0 0 1-.18-2.13l.25-.1A3.63 3.63 0 0 0 15 4.88a.88.88 0 0 1 0-1.75" opacity={.4} />
        <path d="M9 3.13a5.38 5.38 0 0 1 3.33 9.59c1.77.7 3.14 2 3.9 3.82q.2.43.32.91a2.6 2.6 0 0 1-.46 2.13 3 3 0 0 1-.77.81c-.76.51-1.58.48-2.52.48H5.2c-.94 0-1.75.03-2.52-.48a3 3 0 0 1-.77-.81 2.64 2.64 0 0 1-.46-2.12q.12-.5.32-.92a6.8 6.8 0 0 1 3.9-3.82A5.36 5.36 0 0 1 9 3.12" />
    </IconBase>
  ))
);

UsersFillDuotone.displayName = 'UsersFillDuotone';

// Triple export pattern (lucide-react style)
export { UsersFillDuotone, UsersFillDuotone as UsersFillDuotoneIcon, UsersFillDuotone as SiUsersFillDuotone };
export default UsersFillDuotone;
export type { UsersFillDuotoneProps };
