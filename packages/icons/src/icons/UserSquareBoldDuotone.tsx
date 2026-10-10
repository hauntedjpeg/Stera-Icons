import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserSquareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserSquareBoldDuotone = memo(
  forwardRef<SVGSVGElement, UserSquareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.5 2.5q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58 1.13.58 2.05 1.5 2.63 2.63.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v1q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35-.53 1.04-1.34 1.9-2.34 2.47.3-.18.5-.52.49-.89q-.04-1-.34-1.85.24-.3.4-.63c.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2v-1c0-1.42 0-2.42-.06-3.2-.07-.77-.19-1.25-.38-1.62-.38-.75-1-1.36-1.74-1.74-.37-.2-.85-.31-1.62-.38-.78-.06-1.78-.06-3.2-.06h-1c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38-.75.38-1.36 1-1.74 1.74-.2.37-.31.85-.38 1.62-.06.78-.06 1.78-.06 3.2v1c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62q.15.33.4.63-.3.86-.34 1.85c0 .37.18.71.5.9-1-.58-1.82-1.44-2.35-2.48-.35-.7-.5-1.46-.58-2.35q-.09-1.32-.07-3.37v-1q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35.58-1.13 1.5-2.05 2.63-2.63.7-.35 1.46-.5 2.35-.58q1.32-.09 3.37-.07z" opacity={.4} />
        <path fillRule="evenodd" d="M12 7c2.49 0 4.5 2.01 4.5 4.5 0 1.19-.46 2.27-1.21 3.07q.9.36 1.62.93c1.3 1.02 2.04 2.51 2.09 4.3 0 .37-.18.71-.5.9l-.28.15-.11.05c-.7.33-1.44.47-2.32.53q-1.28.09-3.29.07h-1q-2 .02-3.29-.07c-.88-.06-1.63-.2-2.32-.53l-.11-.05-.28-.15c-.32-.19-.5-.53-.5-.9.05-1.79.8-3.28 2.09-4.3q.73-.58 1.62-.93c-.75-.8-1.21-1.88-1.21-3.07C7.5 9.01 9.52 7 12 7m0 9c-1.6 0-2.85.41-3.67 1.07q-1 .77-1.27 2.15.48.16 1.3.22c.78.06 1.77.06 3.14.06h1c1.38 0 2.36 0 3.14-.06q.82-.07 1.3-.22c-.16-.92-.61-1.63-1.27-2.15C14.85 16.4 13.61 16 12 16m0-7c-1.38 0-2.5 1.12-2.5 2.5 0 1.3.98 2.36 2.24 2.49L12 14l.26-.01c1.26-.13 2.24-1.2 2.24-2.49 0-1.38-1.12-2.5-2.5-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

UserSquareBoldDuotone.displayName = 'UserSquareBoldDuotone';

// Triple export pattern
export { UserSquareBoldDuotone, UserSquareBoldDuotone as UserSquareBoldDuotoneIcon, UserSquareBoldDuotone as SiUserSquareBoldDuotone };
export default UserSquareBoldDuotone;
export type { UserSquareBoldDuotoneProps };
