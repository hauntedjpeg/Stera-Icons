import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleDashedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleDashedFillDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleDashedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m10.4 21.74-.33-.05h-.01zM13.93 21.69l-.34.05q.18-.02.35-.06zM6.52 20.22l-.16-.12zM4.03 16.27c.4-.27.94-.16 1.21.24q.17.25.35.48-.36.47-.65 1l-.11.2v.59q-.57-.6-1.04-1.3c-.27-.4-.16-.94.24-1.2M18.76 16.51c.27-.4.8-.5 1.21-.24.4.27.51.82.24 1.22q-.46.69-1.04 1.29v-.6l-.1-.2q-.3-.52-.66-1 .18-.22.35-.47M2.31 10.07c.1-.47.56-.78 1.03-.69s.78.56.69 1.03q-.15.78-.16 1.59 0 .81.16 1.59c.1.47-.22.93-.69 1.03s-.93-.22-1.03-.7Q2.12 13 2.12 12t.2-1.93M20.66 9.38c.47-.09.93.22 1.03.7q.18.93.18 1.92t-.18 1.93c-.1.47-.56.78-1.03.69s-.78-.56-.69-1.03q.16-.78.16-1.59t-.16-1.59c-.1-.47.22-.93.69-1.03M6.51 3.79c.4-.27.95-.16 1.22.24s.16.94-.24 1.21q-1.34.9-2.25 2.25c-.27.4-.8.5-1.21.24-.4-.27-.51-.82-.24-1.22Q4.89 4.9 6.5 3.8M16.27 4.03c.27-.4.82-.51 1.22-.24q1.62 1.1 2.72 2.72c.27.4.16.95-.24 1.22s-.94.16-1.21-.24q-.9-1.34-2.25-2.25c-.4-.27-.5-.8-.24-1.21M12 2.13q.99 0 1.93.18c.47.1.78.56.69 1.03s-.56.78-1.03.69q-.78-.15-1.59-.16-.81 0-1.59.16c-.47.1-.93-.22-1.03-.69s.22-.93.7-1.03Q11 2.12 12 2.12" opacity={0.4} />
        <path d="M12 7c2.26 0 4.1 1.84 4.1 4.1 0 1.27-.58 2.4-1.49 3.16 1.9.65 3.5 2 4.46 3.73l.1.2v.6l-.26.26c-1.78 1.75-4.22 2.82-6.91 2.82s-5.13-1.07-6.91-2.82l-.26-.26v-.6l.1-.2c.97-1.74 2.55-3.08 4.46-3.73-.91-.75-1.49-1.89-1.49-3.16C7.9 8.84 9.74 7 12 7" />
    </IconBase>
  ))
);

UserCircleDashedFillDuotone.displayName = 'UserCircleDashedFillDuotone';

// Triple export pattern
export { UserCircleDashedFillDuotone, UserCircleDashedFillDuotone as UserCircleDashedFillDuotoneIcon, UserCircleDashedFillDuotone as SiUserCircleDashedFillDuotone };
export default UserCircleDashedFillDuotone;
export type { UserCircleDashedFillDuotoneProps };
