import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserSquareFillProps = Omit<IconBaseProps, 'children'>;

const UserSquareFill = memo(
  forwardRef<SVGSVGElement, UserSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zM12 7.25a3.75 3.75 0 0 0-1.62 7.13q-1.72.31-2.89 1.25c-.9.75-1.5 1.76-1.68 3q.37.32.82.55c.39.2.88.32 1.66.38.79.06 1.8.07 3.21.07h1c1.41 0 2.42 0 3.21-.07a4 4 0 0 0 1.66-.38q.45-.23.82-.55a4.7 4.7 0 0 0-1.68-3 6 6 0 0 0-2.9-1.25A3.75 3.75 0 0 0 12 7.25" clipRule="evenodd" />
    </IconBase>
  ))
);

UserSquareFill.displayName = 'UserSquareFill';

// Triple export pattern
export { UserSquareFill, UserSquareFill as UserSquareFillIcon, UserSquareFill as SiUserSquareFill };
export default UserSquareFill;
export type { UserSquareFillProps };
