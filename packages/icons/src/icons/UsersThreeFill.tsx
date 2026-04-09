import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UsersThreeFillProps = Omit<IconBaseProps, 'children'>;

const UsersThreeFill = memo(
  forwardRef<SVGSVGElement, UsersThreeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="users-three-fill" {...props}>
      <path d="M12 7.13a4.37 4.37 0 0 1 2.91 7.63 5.1 5.1 0 0 1 2.58 2.92c.16.43.33.87.18 1.52-.06.29-.21.55-.35.75q-.2.32-.58.58c-.58.37-1.21.34-1.8.34H9.06c-.59 0-1.22.03-1.8-.34a2 2 0 0 1-.58-.58c-.14-.2-.29-.46-.35-.75-.15-.65.02-1.1.18-1.52a5.1 5.1 0 0 1 2.58-2.92A4.36 4.36 0 0 1 12 7.13" />
        <path d="M7 3.13c1.42 0 2.69.68 3.49 1.73a.88.88 0 1 1-1.4 1.06A2.62 2.62 0 0 0 4.38 7.5c0 1.05.6 1.95 1.5 2.37.3.15.5.46.5.8v.5c0 .4-.28.76-.67.85a3.5 3.5 0 0 0-2.69 2.66l.01.13.01.02.15.2.02.03q.01.02.16.05c.14.01.33.02.69.02h.87a.88.88 0 0 1 0 1.74h-.87c-.59 0-1.22.03-1.8-.34a2 2 0 0 1-.58-.58c-.14-.2-.29-.46-.35-.75-.15-.65.02-1.1.18-1.52a5.1 5.1 0 0 1 2.58-2.92A4.36 4.36 0 0 1 7 3.13M17 3.13a4.38 4.38 0 0 1 2.91 7.63c1.2.6 2.1 1.6 2.58 2.92.16.43.34.87.18 1.52q-.1.44-.35.75-.2.32-.58.58c-.58.37-1.21.34-1.8.34h-.86a.88.88 0 0 1 0-1.75h.86l.69-.01q.14-.03.16-.05l.02-.02.15-.2v-.03l.02-.13-.13-.4a3.5 3.5 0 0 0-2.56-2.26.9.9 0 0 1-.66-.85v-.5c0-.34.19-.65.5-.8a2.63 2.63 0 1 0-3.22-3.95.88.88 0 1 1-1.4-1.06 4.4 4.4 0 0 1 3.5-1.74" />
    </IconBase>
  ))
);

UsersThreeFill.displayName = 'UsersThreeFill';

// Triple export pattern (lucide-react style)
export { UsersThreeFill, UsersThreeFill as UsersThreeFillIcon, UsersThreeFill as SiUsersThreeFill };
export default UsersThreeFill;
export type { UsersThreeFillProps };
