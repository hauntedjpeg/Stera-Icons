import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleDashedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleDashedRegularDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleDashedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.61 20.1c.4-.09.8.18.88.58.08.41-.18.8-.59.88q-.92.2-1.9.19-.98 0-1.9-.19c-.4-.08-.67-.47-.6-.88.09-.4.48-.67.89-.59q.78.16 1.61.16t1.61-.16M4.1 16.38c.34-.23.8-.14 1.04.2q.92 1.36 2.28 2.28c.34.23.43.7.2 1.04s-.7.44-1.04.2c-1.06-.7-1.98-1.62-2.69-2.68-.23-.35-.14-.81.2-1.04M18.86 16.58c.23-.34.7-.43 1.04-.2s.44.7.2 1.04c-.7 1.06-1.62 1.98-2.68 2.69-.35.23-.81.14-1.04-.2s-.14-.82.2-1.05q1.36-.91 2.28-2.28M2.44 10.1c.08-.4.47-.67.88-.6.4.09.67.48.59.89q-.16.78-.16 1.61t.16 1.61c.08.4-.19.8-.6.88s-.8-.18-.87-.59q-.2-.92-.19-1.9 0-.98.19-1.9M20.68 9.5c.41-.07.8.2.88.6q.2.92.19 1.9 0 .98-.19 1.9c-.08.4-.47.67-.88.6-.4-.09-.67-.48-.59-.89q.16-.78.16-1.61t-.16-1.61c-.08-.4.19-.8.6-.88M6.58 3.9c.35-.24.81-.15 1.04.2s.14.8-.2 1.04q-1.37.92-2.28 2.28c-.23.34-.7.43-1.04.2s-.44-.7-.2-1.04C4.6 5.52 5.51 4.6 6.57 3.9M16.38 4.1c.23-.35.7-.44 1.04-.2 1.06.7 1.98 1.62 2.69 2.68.23.35.14.81-.2 1.04s-.82.14-1.05-.2q-.91-1.37-2.28-2.28c-.34-.23-.43-.7-.2-1.04M12 2.25q.98 0 1.9.19c.4.08.67.47.6.88-.09.4-.48.67-.89.59q-.78-.16-1.61-.16t-1.61.16c-.4.08-.8-.19-.88-.6s.18-.8.59-.87q.92-.2 1.9-.19" opacity={0.4} />
        <path fillRule="evenodd" d="M12 6.75c2.4 0 4.35 1.95 4.35 4.35 0 1.35-.61 2.55-1.57 3.35 1.46.54 2.72 1.5 3.63 2.75q-.48.6-1.07 1.09c-1.16-1.72-3.12-2.84-5.34-2.84s-4.18 1.12-5.34 2.84q-.59-.5-1.07-1.1c.91-1.23 2.17-2.2 3.63-2.74-.96-.8-1.57-2-1.57-3.35 0-2.4 1.95-4.35 4.35-4.35m0 1.5c-1.57 0-2.85 1.28-2.85 2.85 0 1.48 1.12 2.69 2.56 2.84l.29.01.3-.01c1.43-.15 2.55-1.36 2.55-2.84 0-1.57-1.28-2.85-2.85-2.85" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleDashedRegularDuotone.displayName = 'UserCircleDashedRegularDuotone';

// Triple export pattern
export { UserCircleDashedRegularDuotone, UserCircleDashedRegularDuotone as UserCircleDashedRegularDuotoneIcon, UserCircleDashedRegularDuotone as SiUserCircleDashedRegularDuotone };
export default UserCircleDashedRegularDuotone;
export type { UserCircleDashedRegularDuotoneProps };
