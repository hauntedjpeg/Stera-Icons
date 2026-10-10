import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UsersThreeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UsersThreeFillDuotone = memo(
  forwardRef<SVGSVGElement, UsersThreeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 3.13c1.42 0 2.69.68 3.49 1.73.29.38.21.93-.17 1.22-.39.3-.94.22-1.23-.16C8.61 5.28 7.85 4.88 7 4.88c-1.45 0-2.62 1.17-2.62 2.62 0 1.05.6 1.95 1.5 2.37.3.15.5.46.5.8v.5c0 .4-.28.76-.67.85-1.25.31-2.14 1.1-2.56 2.26l-.13.4.01.13.01.02.07.11.08.1.02.02q.01.02.16.05c.14.01.33.02.69.02h.87c.48 0 .87.39.87.87s-.4.87-.87.88h-.87c-.59 0-1.22.02-1.8-.35-.25-.16-.45-.39-.58-.58-.14-.2-.29-.46-.35-.75-.15-.65.02-1.1.18-1.52.48-1.32 1.38-2.32 2.58-2.92-.9-.8-1.46-1.96-1.46-3.26 0-2.42 1.95-4.37 4.37-4.37M17 3.13c2.42 0 4.38 1.95 4.38 4.37 0 1.3-.57 2.46-1.47 3.26 1.2.6 2.1 1.6 2.58 2.92.16.43.34.87.18 1.52q-.1.44-.35.75-.2.32-.58.58c-.58.37-1.21.34-1.8.34h-.86c-.49 0-.88-.39-.88-.87s.4-.87.88-.87h.86c.36 0 .55 0 .69-.02q.14-.03.16-.05l.02-.02.08-.1.07-.1v-.03q.03-.1.02-.13l-.13-.4q-.65-1.78-2.56-2.26c-.39-.1-.66-.44-.66-.85v-.5c0-.34.19-.65.5-.8.88-.42 1.5-1.32 1.5-2.37 0-1.45-1.18-2.62-2.63-2.62-.85 0-1.61.4-2.1 1.04-.28.38-.83.46-1.22.16-.38-.29-.46-.84-.17-1.22.8-1.05 2.07-1.74 3.5-1.74" opacity={0.4} />
        <path d="M12 7.13c2.42 0 4.38 1.95 4.38 4.37 0 1.3-.57 2.46-1.47 3.26 1.19.6 2.1 1.58 2.58 2.92.16.43.33.87.18 1.52-.06.29-.21.55-.35.75q-.2.32-.58.58c-.58.37-1.21.34-1.8.34H9.06c-.59 0-1.22.03-1.8-.34-.25-.16-.45-.39-.58-.58-.14-.2-.29-.46-.35-.75-.15-.65.02-1.1.18-1.52.48-1.34 1.4-2.33 2.58-2.92-.9-.8-1.46-1.96-1.46-3.26 0-2.42 1.95-4.37 4.37-4.37" />
    </IconBase>
  ))
);

UsersThreeFillDuotone.displayName = 'UsersThreeFillDuotone';

// Triple export pattern
export { UsersThreeFillDuotone, UsersThreeFillDuotone as UsersThreeFillDuotoneIcon, UsersThreeFillDuotone as SiUsersThreeFillDuotone };
export default UsersThreeFillDuotone;
export type { UsersThreeFillDuotoneProps };
