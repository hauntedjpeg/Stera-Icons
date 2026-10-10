import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserRegularProps = Omit<IconBaseProps, 'children'>;

const UserRegular = memo(
  forwardRef<SVGSVGElement, UserRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3.25c2.9 0 5.25 2.35 5.25 5.25 0 1.7-.81 3.21-2.06 4.17 2.2.63 3.92 1.95 4.84 3.9q.2.39.32.84.12.47.02 1.04c-.05.35-.24.72-.42 1-.18.3-.44.61-.73.81-.74.51-1.5.49-2.42.49H7.2c-.93 0-1.68.02-2.42-.49-.3-.2-.55-.52-.73-.8-.18-.3-.36-.66-.42-1.01q-.1-.57.02-1.04.12-.45.32-.84c.92-1.95 2.64-3.27 4.84-3.9-1.25-.96-2.06-2.47-2.06-4.17 0-2.9 2.35-5.25 5.25-5.25m0 10.5c-3.33 0-5.66 1.32-6.67 3.46-.14.3-.2.43-.23.55-.02.1-.03.21 0 .44q.02.12.21.45.23.32.32.38c.29.2.52.22 1.57.22h9.6c1.05 0 1.28-.02 1.57-.22q.1-.06.32-.38.2-.33.2-.45c.04-.23.03-.35 0-.44-.02-.12-.08-.26-.22-.55-1-2.14-3.34-3.46-6.67-3.46m0-9c-2.07 0-3.75 1.68-3.75 3.75s1.68 3.75 3.75 3.75 3.75-1.68 3.75-3.75S14.07 4.75 12 4.75" clipRule="evenodd" />
    </IconBase>
  ))
);

UserRegular.displayName = 'UserRegular';

// Triple export pattern
export { UserRegular, UserRegular as UserRegularIcon, UserRegular as SiUserRegular };
export default UserRegular;
export type { UserRegularProps };
