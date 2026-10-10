import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserSquareRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserSquareRegularDuotone = memo(
  forwardRef<SVGSVGElement, UserSquareRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.5 2.75c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v1c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.5.99-1.28 1.81-2.24 2.36.23-.13.38-.39.37-.66q-.02-.72-.2-1.36.44-.45.74-1.02c.2-.41.33-.92.4-1.7.06-.8.06-1.82.06-3.23v-1c0-1.41 0-2.43-.07-3.22-.06-.79-.18-1.3-.4-1.71-.4-.8-1.05-1.45-1.85-1.86-.41-.2-.92-.33-1.7-.4-.8-.06-1.82-.06-3.23-.06h-1c-1.41 0-2.43 0-3.22.07-.79.06-1.3.18-1.71.4-.8.4-1.45 1.05-1.86 1.85-.2.41-.33.92-.4 1.7-.06.8-.06 1.82-.06 3.23v1c0 1.41 0 2.43.07 3.22.06.79.18 1.3.4 1.71q.29.57.72 1.02-.16.64-.19 1.36.01.44.38.67c-.96-.55-1.75-1.38-2.25-2.37-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-1c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07z" opacity={.4} />
        <path fillRule="evenodd" d="M12 7.25c2.35 0 4.25 1.9 4.25 4.25 0 1.26-.55 2.4-1.43 3.17q1.1.36 1.94 1.02c1.23.98 1.94 2.4 1.99 4.12q-.01.44-.38.67l-.26.14-.11.06q-.96.43-2.23.5c-.86.07-1.92.07-3.27.07h-1c-1.35 0-2.41 0-3.27-.06q-1.12-.07-1.98-.4L6 20.68l-.11-.06-.26-.14c-.24-.14-.38-.4-.38-.67.05-1.72.76-3.14 2-4.12q.83-.66 1.92-1.02c-.87-.78-1.42-1.9-1.42-3.17 0-2.35 1.9-4.25 4.25-4.25m0 8.5c-1.65 0-2.95.42-3.83 1.12-.75.6-1.25 1.44-1.38 2.51.38.16.86.26 1.55.3.8.07 1.79.07 3.16.07h1c1.37 0 2.37 0 3.16-.06.69-.05 1.17-.15 1.55-.3-.13-1.08-.63-1.92-1.38-2.52-.88-.7-2.18-1.12-3.83-1.12m0-7c-1.52 0-2.75 1.23-2.75 2.75 0 1.42 1.08 2.6 2.47 2.74l.28.01.28-.01c1.39-.15 2.47-1.32 2.47-2.74 0-1.52-1.23-2.75-2.75-2.75" clipRule="evenodd" />
    </IconBase>
  ))
);

UserSquareRegularDuotone.displayName = 'UserSquareRegularDuotone';

// Triple export pattern
export { UserSquareRegularDuotone, UserSquareRegularDuotone as UserSquareRegularDuotoneIcon, UserSquareRegularDuotone as SiUserSquareRegularDuotone };
export default UserSquareRegularDuotone;
export type { UserSquareRegularDuotoneProps };
