import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignOutRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignOutRegularDuotone = memo(
  forwardRef<SVGSVGElement, SignOutRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.2 2.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.2c0-.85 0-1.45-.04-1.9-.04-.46-.1-.72-.2-.92q-.35-.65-.99-.98c-.2-.1-.46-.17-.91-.21-.46-.04-1.06-.04-1.91-.04H6.8c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v8.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.34.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h3.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V16c0-.41.34-.75.75-.75s.75.34.75.75v.2q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H6.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V7.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04z" opacity={.4} />
        <path d="M18.47 7.97c.3-.3.77-.3 1.06 0l3.5 3.5q.22.22.22.53t-.22.53l-3.5 3.5c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l2.22-2.22H8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.19l-2.22-2.22c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

SignOutRegularDuotone.displayName = 'SignOutRegularDuotone';

// Triple export pattern
export { SignOutRegularDuotone, SignOutRegularDuotone as SignOutRegularDuotoneIcon, SignOutRegularDuotone as SiSignOutRegularDuotone };
export default SignOutRegularDuotone;
export type { SignOutRegularDuotoneProps };
