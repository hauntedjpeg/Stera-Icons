import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserSquareBoldProps = Omit<IconBaseProps, 'children'>;

const UserSquareBold = memo(
  forwardRef<SVGSVGElement, UserSquareBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.5 2.5q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v1q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63l-.05.02-.06.03c-.7.33-1.44.47-2.32.53q-1.28.09-3.29.07h-1q-2 .02-3.29-.07a7 7 0 0 1-2.43-.58l-.28-.15a6 6 0 0 1-2.35-2.48 6 6 0 0 1-.58-2.35q-.09-1.32-.07-3.37v-1q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58q1.32-.09 3.37-.07zM12 16q-.45 0-.86.04a5.7 5.7 0 0 0-2.81 1.03 4 4 0 0 0-.8.89 4 4 0 0 0-.46 1.26q.46.16 1.3.22c.77.06 1.76.06 3.13.06h1c1.38 0 2.36 0 3.14-.06a6 6 0 0 0 1.3-.22v-.01a3.6 3.6 0 0 0-1.27-2.14A6 6 0 0 0 12 16m-.5-11.5c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38a4 4 0 0 0-1.74 1.74c-.2.37-.31.85-.38 1.62-.06.78-.06 1.78-.06 3.2v1c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62a4 4 0 0 0 .4.62l.13-.33q0-.05.03-.08l.13-.26.05-.1.1-.19.07-.1q.18-.29.39-.55l.1-.11.39-.41.09-.08.21-.19.06-.04.43-.32.1-.06.17-.1.07-.04.24-.13.05-.02.23-.11.04-.02.3-.13A4.48 4.48 0 0 1 12 7a4.5 4.5 0 0 1 3.29 7.57h.01l.01.01.2.08.05.03.09.04a7 7 0 0 1 .74.4l.07.05.45.32.24.2.03.03.09.08.4.41.08.1q.22.27.4.57l.04.06q.08.13.15.27l.03.04q.16.33.3.68a4 4 0 0 0 .4-.62c.18-.37.3-.85.37-1.62.06-.78.06-1.78.06-3.2v-1c0-1.42 0-2.42-.06-3.2a4 4 0 0 0-.38-1.62 4 4 0 0 0-1.74-1.74c-.37-.2-.85-.31-1.62-.38-.78-.06-1.78-.06-3.2-.06zM12 9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

UserSquareBold.displayName = 'UserSquareBold';

// Triple export pattern (lucide-react style)
export { UserSquareBold, UserSquareBold as UserSquareBoldIcon, UserSquareBold as SiUserSquareBold };
export default UserSquareBold;
export type { UserSquareBoldProps };
