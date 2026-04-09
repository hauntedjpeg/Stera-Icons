import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleDashedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleDashedFillDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleDashedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle-dashed-fill-duotone" {...props}>
      <path d="m10.4 21.74-.33-.05h-.01zM13.93 21.69l-.34.05q.18-.02.35-.06zM6.52 20.22l-.16-.12zM4.03 16.27a.9.9 0 0 1 1.21.24q.17.25.35.48-.36.47-.65 1l-.11.2v.59q-.57-.6-1.04-1.3a.9.9 0 0 1 .24-1.2M18.76 16.51a.88.88 0 0 1 1.45.98q-.46.69-1.04 1.29v-.6l-.1-.2q-.3-.52-.66-1 .18-.22.35-.47M2.31 10.07a.88.88 0 0 1 1.72.34 8 8 0 0 0 0 3.18.88.88 0 1 1-1.72.34 10 10 0 0 1 0-3.86M20.66 9.38c.47-.09.93.22 1.03.7a10 10 0 0 1 0 3.85.88.88 0 0 1-1.72-.34 8 8 0 0 0 0-3.18.9.9 0 0 1 .69-1.03M6.51 3.79a.87.87 0 1 1 .98 1.45A8 8 0 0 0 5.24 7.5.88.88 0 0 1 3.8 6.5Q4.89 4.9 6.5 3.8M16.27 4.03c.27-.4.82-.51 1.22-.24q1.62 1.1 2.72 2.72a.87.87 0 1 1-1.45.98 8 8 0 0 0-2.25-2.25.9.9 0 0 1-.24-1.21M12 2.13q.99 0 1.93.18a.88.88 0 0 1-.34 1.72 8 8 0 0 0-3.18 0 .88.88 0 1 1-.34-1.72A10 10 0 0 1 12 2.12" opacity={0.4} />
        <path d="M12 7a4.1 4.1 0 0 1 2.61 7.26c1.9.65 3.5 2 4.46 3.73l.1.2v.6l-.26.26a9.85 9.85 0 0 1-13.82 0l-.26-.26v-.6l.1-.2a8 8 0 0 1 4.46-3.73A4.1 4.1 0 0 1 12 7" />
    </IconBase>
  ))
);

UserCircleDashedFillDuotone.displayName = 'UserCircleDashedFillDuotone';

// Triple export pattern (lucide-react style)
export { UserCircleDashedFillDuotone, UserCircleDashedFillDuotone as UserCircleDashedFillDuotoneIcon, UserCircleDashedFillDuotone as SiUserCircleDashedFillDuotone };
export default UserCircleDashedFillDuotone;
export type { UserCircleDashedFillDuotoneProps };
