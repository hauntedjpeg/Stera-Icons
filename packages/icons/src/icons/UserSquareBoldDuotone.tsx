import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserSquareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserSquareBoldDuotone = memo(
  forwardRef<SVGSVGElement, UserSquareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.5 2.5q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v1q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.34 2.47 1 1 0 0 0 .49-.89 6 6 0 0 0-.34-1.85q.24-.3.4-.63c.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2v-1c0-1.42 0-2.42-.06-3.2a4 4 0 0 0-.38-1.62 4 4 0 0 0-1.74-1.74c-.37-.2-.85-.31-1.62-.38-.78-.06-1.78-.06-3.2-.06h-1c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38a4 4 0 0 0-1.74 1.74c-.2.37-.31.85-.38 1.62-.06.78-.06 1.78-.06 3.2v1c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62q.15.33.4.63A6 6 0 0 0 5 19.8a1 1 0 0 0 .5.9 6 6 0 0 1-2.35-2.48 6 6 0 0 1-.58-2.35q-.09-1.32-.07-3.37v-1q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58q1.32-.09 3.37-.07z" opacity={.4} />
        <path fillRule="evenodd" d="M12 7a4.5 4.5 0 0 1 3.29 7.57q.9.36 1.62.93A5.5 5.5 0 0 1 19 19.8a1 1 0 0 1-.5.9l-.28.15-.11.05c-.7.33-1.44.47-2.32.53q-1.28.09-3.29.07h-1q-2 .02-3.29-.07a6.5 6.5 0 0 1-2.7-.73 1 1 0 0 1-.5-.9c.04-1.79.79-3.28 2.08-4.3q.73-.58 1.62-.93A4.5 4.5 0 0 1 12 7m0 9c-1.6 0-2.85.41-3.67 1.07a3.4 3.4 0 0 0-1.27 2.15q.48.16 1.3.22c.78.06 1.77.06 3.14.06h1c1.38 0 2.36 0 3.14-.06a6 6 0 0 0 1.3-.22 3.4 3.4 0 0 0-1.27-2.15A6 6 0 0 0 12 16m0-7a2.5 2.5 0 0 0-.26 4.99L12 14l.26-.01A2.5 2.5 0 0 0 12 9" clipRule="evenodd" />
    </IconBase>
  ))
);

UserSquareBoldDuotone.displayName = 'UserSquareBoldDuotone';

// Triple export pattern
export { UserSquareBoldDuotone, UserSquareBoldDuotone as UserSquareBoldDuotoneIcon, UserSquareBoldDuotone as SiUserSquareBoldDuotone };
export default UserSquareBoldDuotone;
export type { UserSquareBoldDuotoneProps };
