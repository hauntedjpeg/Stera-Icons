import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockOpenRegularProps = Omit<IconBaseProps, 'children'>;

const LockOpenRegular = memo(
  forwardRef<SVGSVGElement, LockOpenRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 13.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M12 2.75c1.5 0 2.84.7 3.7 1.78.27.32.21.8-.1 1.05-.33.26-.8.21-1.06-.11-.6-.75-1.51-1.22-2.54-1.22-1.8 0-3.25 1.46-3.25 3.25v1.75h5.45q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v.9q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H9.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03v-.9q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64q.45-.23.95-.3V7.5c0-2.62 2.13-4.75 4.75-4.75m-2.2 8c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v.9c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h4.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-.9c0-.85 0-1.45-.04-1.9-.04-.46-.1-.72-.2-.92q-.34-.65-.99-.98c-.2-.1-.46-.17-.91-.21-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

LockOpenRegular.displayName = 'LockOpenRegular';

// Triple export pattern
export { LockOpenRegular, LockOpenRegular as LockOpenRegularIcon, LockOpenRegular as SiLockOpenRegular };
export default LockOpenRegular;
export type { LockOpenRegularProps };
