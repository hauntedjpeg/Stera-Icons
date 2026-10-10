import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserXRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserXRegularDuotone = memo(
  forwardRef<SVGSVGElement, UserXRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3.25c2.9 0 5.25 2.35 5.25 5.25 0 1.74-.85 3.29-2.16 4.24.19.18.28.45.22.72-.1.4-.5.65-.9.55q-1.1-.26-2.41-.26c-3.33 0-5.66 1.32-6.67 3.46-.14.3-.2.43-.23.55-.02.1-.03.21 0 .44q.02.12.21.45.23.32.32.38c.29.2.52.22 1.57.22h5.12c.42 0 .75.34.75.75s-.33.75-.75.75H7.2c-.93 0-1.68.02-2.42-.49-.3-.2-.55-.52-.73-.8-.18-.3-.36-.66-.42-1.01q-.1-.57.02-1.04.12-.45.32-.84c.92-1.95 2.64-3.27 4.84-3.9-1.25-.96-2.06-2.47-2.06-4.17 0-2.9 2.35-5.25 5.25-5.25m0 1.5c-2.07 0-3.75 1.68-3.75 3.75s1.68 3.75 3.75 3.75 3.75-1.68 3.75-3.75S14.07 4.75 12 4.75" clipRule="evenodd" opacity={.4} />
        <path d="M18.97 15.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L18.56 18l1.47 1.47c.3.3.3.77 0 1.06s-.77.3-1.06 0l-1.47-1.47-1.47 1.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L16.44 18l-1.47-1.47c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l1.47 1.47z" />
    </IconBase>
  ))
);

UserXRegularDuotone.displayName = 'UserXRegularDuotone';

// Triple export pattern
export { UserXRegularDuotone, UserXRegularDuotone as UserXRegularDuotoneIcon, UserXRegularDuotone as SiUserXRegularDuotone };
export default UserXRegularDuotone;
export type { UserXRegularDuotoneProps };
