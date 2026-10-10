import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignOutAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignOutAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, SignOutAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 1.25c.88 0 1.47 0 1.97.13 1.3.34 2.3 1.36 2.65 2.65.14.5.13 1.09.13 1.97 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.98 0-1.32-.08-1.58-.2-.78-.81-1.38-1.59-1.6-.26-.06-.6-.07-1.58-.07H8.8c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v10.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04H16c.98 0 1.32 0 1.58-.08.78-.2 1.38-.81 1.6-1.59.06-.26.07-.6.07-1.58 0-.41.34-.75.75-.75s.75.34.75.75c0 .88 0 1.47-.13 1.97-.34 1.3-1.36 2.3-2.65 2.65-.5.14-1.09.13-1.97.13H8.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V6.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04z" opacity={.4} />
        <path d="M14.47 6.47c.3-.3.77-.3 1.06 0l5 5c.3.3.3.77 0 1.06l-5 5c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l3.72-3.72H8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.69l-3.72-3.72c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

SignOutAltRegularDuotone.displayName = 'SignOutAltRegularDuotone';

// Triple export pattern
export { SignOutAltRegularDuotone, SignOutAltRegularDuotone as SignOutAltRegularDuotoneIcon, SignOutAltRegularDuotone as SiSignOutAltRegularDuotone };
export default SignOutAltRegularDuotone;
export type { SignOutAltRegularDuotoneProps };
