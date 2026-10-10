import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserSquareRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserSquareRegularDuotone = memo(
  forwardRef<SVGSVGElement, UserSquareRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.5 2.75c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56a5.8 5.8 0 0 1 2.51 2.51c.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v1c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27a5.8 5.8 0 0 1-2.24 2.36c.23-.13.38-.39.37-.66a6 6 0 0 0-.2-1.36q.44-.45.74-1.02c.2-.41.33-.92.4-1.7.06-.8.06-1.82.06-3.23v-1c0-1.41 0-2.43-.07-3.22a5 5 0 0 0-.4-1.71 4.3 4.3 0 0 0-1.85-1.86 5 5 0 0 0-1.7-.4c-.8-.06-1.82-.06-3.23-.06h-1c-1.41 0-2.43 0-3.22.07-.79.06-1.3.18-1.71.4-.8.4-1.45 1.05-1.86 1.85-.2.41-.33.92-.4 1.7-.06.8-.06 1.82-.06 3.23v1c0 1.41 0 2.43.07 3.22.06.79.18 1.3.4 1.71q.29.57.72 1.02a6 6 0 0 0-.19 1.36q.01.44.38.67a5.8 5.8 0 0 1-2.25-2.37 6 6 0 0 1-.56-2.27c-.07-.87-.07-1.95-.07-3.34v-1c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27a5.8 5.8 0 0 1 2.51-2.51 6 6 0 0 1 2.27-.56c.87-.07 1.95-.07 3.34-.07z" opacity={.4} />
        <path fillRule="evenodd" d="M12 7.25a4.25 4.25 0 0 1 2.82 7.42q1.1.36 1.94 1.02a5.3 5.3 0 0 1 1.99 4.12q-.01.44-.38.67l-.37.2a6 6 0 0 1-2.23.5c-.86.07-1.92.07-3.27.07h-1c-1.35 0-2.41 0-3.27-.06a7 7 0 0 1-1.98-.4L6 20.68l-.37-.2a.8.8 0 0 1-.38-.67 5.3 5.3 0 0 1 2-4.12q.83-.66 1.92-1.02A4.24 4.24 0 0 1 12 7.25m0 8.5a6 6 0 0 0-3.83 1.12 3.7 3.7 0 0 0-1.38 2.51c.38.16.86.26 1.55.3.8.07 1.79.07 3.16.07h1c1.37 0 2.37 0 3.16-.06a5 5 0 0 0 1.55-.3 3.7 3.7 0 0 0-1.38-2.52A6 6 0 0 0 12 15.75m0-7a2.75 2.75 0 0 0-.28 5.49l.28.01.28-.01A2.75 2.75 0 0 0 12 8.75" clipRule="evenodd" />
    </IconBase>
  ))
);

UserSquareRegularDuotone.displayName = 'UserSquareRegularDuotone';

// Triple export pattern
export { UserSquareRegularDuotone, UserSquareRegularDuotone as UserSquareRegularDuotoneIcon, UserSquareRegularDuotone as SiUserSquareRegularDuotone };
export default UserSquareRegularDuotone;
export type { UserSquareRegularDuotoneProps };
