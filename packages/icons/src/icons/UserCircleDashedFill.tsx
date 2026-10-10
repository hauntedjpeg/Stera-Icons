import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleDashedFillProps = Omit<IconBaseProps, 'children'>;

const UserCircleDashedFill = memo(
  forwardRef<SVGSVGElement, UserCircleDashedFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7c2.26 0 4.1 1.84 4.1 4.1 0 1.27-.58 2.4-1.49 3.16 1.52.52 2.84 1.48 3.8 2.73q.18-.23.35-.48c.27-.4.8-.5 1.21-.24.4.27.51.82.24 1.22q-.46.69-1.04 1.29v.01l-.26.26-.23.22-.06.06-.28.24-.1.08c-1.22 1-2.69 1.71-4.3 2.03h-.01q-.17.05-.34.06l-.11.02-.3.04q-.1 0-.2.03-.48.05-.98.05t-.98-.05l-.17-.03q-.16 0-.33-.04l-.11-.02-.34-.05h-.01q-1.94-.4-3.54-1.47l-.16-.12-.23-.16-.16-.13q-.11-.07-.21-.16l-.16-.13-.2-.18-.13-.12-.18-.17-.26-.26v-.01q-.57-.6-1.04-1.3c-.27-.4-.16-.94.24-1.2.4-.28.94-.17 1.21.23q.17.25.35.48c.96-1.25 2.28-2.21 3.8-2.73-.91-.75-1.49-1.89-1.49-3.16C7.9 8.84 9.74 7 12 7M2.31 10.07c.1-.47.56-.78 1.03-.69s.78.56.69 1.03q-.15.78-.16 1.59 0 .81.16 1.59c.1.47-.22.93-.69 1.03s-.93-.22-1.03-.7Q2.12 13 2.12 12t.2-1.93M20.66 9.38c.47-.09.93.22 1.03.7q.18.93.18 1.92t-.18 1.93c-.1.47-.56.78-1.03.69s-.78-.56-.69-1.03q.16-.78.16-1.59t-.16-1.59c-.1-.47.22-.93.69-1.03M6.51 3.79c.4-.27.95-.16 1.22.24s.16.94-.24 1.21q-1.34.9-2.25 2.25c-.27.4-.8.5-1.21.24-.4-.27-.51-.82-.24-1.22Q4.89 4.9 6.5 3.8M16.27 4.03c.27-.4.82-.51 1.22-.24q1.62 1.1 2.72 2.72c.27.4.16.95-.24 1.22s-.94.16-1.21-.24q-.9-1.34-2.25-2.25c-.4-.27-.5-.8-.24-1.21M12 2.13q.99 0 1.93.18c.47.1.78.56.69 1.03s-.56.78-1.03.69q-.78-.15-1.59-.16-.81 0-1.59.16c-.47.1-.93-.22-1.03-.69s.22-.93.7-1.03Q11 2.12 12 2.12" />
    </IconBase>
  ))
);

UserCircleDashedFill.displayName = 'UserCircleDashedFill';

// Triple export pattern
export { UserCircleDashedFill, UserCircleDashedFill as UserCircleDashedFillIcon, UserCircleDashedFill as SiUserCircleDashedFill };
export default UserCircleDashedFill;
export type { UserCircleDashedFillProps };
