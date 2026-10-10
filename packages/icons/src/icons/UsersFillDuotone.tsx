import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UsersFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UsersFillDuotone = memo(
  forwardRef<SVGSVGElement, UsersFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 3.13c2.97 0 5.38 2.4 5.38 5.37 0 1.71-.8 3.24-2.05 4.22 1.78.7 3.15 2 3.9 3.82q.2.43.32.91.11.53 0 1.1c-.08.37-.27.74-.46 1.03-.19.28-.46.6-.77.81-.77.51-1.58.48-2.52.48h-.51c-.48 0-.88-.39-.88-.87s.4-.87.88-.87h.51c1.1 0 1.31-.03 1.55-.2.04-.02.16-.13.28-.32q.19-.3.2-.4.05-.27 0-.39c-.02-.13-.08-.28-.22-.61-.7-1.71-2.14-2.83-4.12-3.2q-.35-.07-.6-.33c-.58-.62-.27-1.53.41-1.8l.25-.1c1.23-.58 2.07-1.83 2.07-3.28 0-2-1.62-3.62-3.62-3.62-.48 0-.87-.4-.87-.88s.39-.87.87-.87" opacity={.4} />
        <path d="M9 3.13c2.97 0 5.38 2.4 5.38 5.37 0 1.71-.8 3.24-2.05 4.22 1.77.7 3.14 2 3.9 3.82q.2.43.32.91.11.53 0 1.1c-.08.37-.27.74-.46 1.03-.19.28-.46.6-.77.81-.76.51-1.58.48-2.52.48H5.2c-.94 0-1.75.03-2.52-.48-.31-.2-.58-.53-.77-.81s-.38-.66-.45-1.02q-.13-.59 0-1.1c.06-.33.2-.64.31-.92.76-1.83 2.13-3.12 3.9-3.82-1.24-.98-2.04-2.5-2.04-4.22 0-2.97 2.4-5.37 5.37-5.37" />
    </IconBase>
  ))
);

UsersFillDuotone.displayName = 'UsersFillDuotone';

// Triple export pattern
export { UsersFillDuotone, UsersFillDuotone as UsersFillDuotoneIcon, UsersFillDuotone as SiUsersFillDuotone };
export default UsersFillDuotone;
export type { UsersFillDuotoneProps };
