import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleDashedFillProps = Omit<IconBaseProps, 'children'>;

const UserCircleDashedFill = memo(
  forwardRef<SVGSVGElement, UserCircleDashedFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7a4.1 4.1 0 0 1 2.61 7.26 8 8 0 0 1 3.8 2.73q.18-.23.35-.48a.88.88 0 0 1 1.45.98q-.46.69-1.04 1.29v.01l-.26.26-.23.22-.06.06-.28.24-.1.08a10 10 0 0 1-4.3 2.03h-.01q-.17.05-.34.06l-.11.02-.3.04q-.1 0-.2.03a10 10 0 0 1-1.96 0l-.17-.03q-.16 0-.33-.04l-.11-.02-.34-.05h-.01a10 10 0 0 1-3.54-1.47l-.16-.12-.23-.16-.16-.13q-.11-.07-.21-.16l-.16-.13-.2-.18-.13-.12-.18-.17-.26-.26v-.01q-.57-.6-1.04-1.3a.88.88 0 1 1 1.45-.97q.17.25.35.48a8 8 0 0 1 3.8-2.73A4.1 4.1 0 0 1 12 7M2.31 10.07a.88.88 0 0 1 1.72.34 8 8 0 0 0 0 3.18.88.88 0 1 1-1.72.34 10 10 0 0 1 0-3.86M20.66 9.38c.47-.09.93.22 1.03.7a10 10 0 0 1 0 3.85.88.88 0 0 1-1.72-.34 8 8 0 0 0 0-3.18.9.9 0 0 1 .69-1.03M6.51 3.79a.87.87 0 1 1 .98 1.45A8 8 0 0 0 5.24 7.5.88.88 0 0 1 3.8 6.5Q4.89 4.9 6.5 3.8M16.27 4.03c.27-.4.82-.51 1.22-.24q1.62 1.1 2.72 2.72a.87.87 0 1 1-1.45.98 8 8 0 0 0-2.25-2.25.9.9 0 0 1-.24-1.21M12 2.13q.99 0 1.93.18a.88.88 0 0 1-.34 1.72 8 8 0 0 0-3.18 0 .88.88 0 1 1-.34-1.72A10 10 0 0 1 12 2.12" />
    </IconBase>
  ))
);

UserCircleDashedFill.displayName = 'UserCircleDashedFill';

// Triple export pattern (lucide-react style)
export { UserCircleDashedFill, UserCircleDashedFill as UserCircleDashedFillIcon, UserCircleDashedFill as SiUserCircleDashedFill };
export default UserCircleDashedFill;
export type { UserCircleDashedFillProps };
