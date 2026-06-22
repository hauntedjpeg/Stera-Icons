import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldCheckBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldCheckBoldDuotone = memo(
  forwardRef<SVGSVGElement, ShieldCheckBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.63a1 1 0 0 1 .75.33 11 11 0 0 0 4.47 2.93 13 13 0 0 0 2.24.6l.12.01h.03a1 1 0 0 1 .89 1v4.17c0 4.64-2.62 8.88-6.77 10.96l-1.28.64a1 1 0 0 1-.9 0l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V6.5a1 1 0 0 1 .89-1h.03q.05 0 .12-.02.18-.01.5-.09c.43-.1 1.04-.25 1.74-.5a11 11 0 0 0 4.47-2.93l.08-.08a1 1 0 0 1 .67-.25m0 2.42a13 13 0 0 1-4.53 2.72c-.78.28-1.47.46-1.97.57v3.33c0 3.88 2.2 7.43 5.67 9.17l.83.42.83-.42a10.3 10.3 0 0 0 5.67-9.17V7.34c-.5-.11-1.19-.29-1.97-.57A13 13 0 0 1 12 4.05" clipRule="evenodd" opacity={.4} />
        <path d="M14.32 9.52a1 1 0 1 1 1.36 1.46l-3.62 3.4-.33.3q-.18.17-.55.29a1.5 1.5 0 0 1-.97-.07c-.24-.1-.4-.26-.51-.37q-.15-.16-.28-.33l-1.2-1.5a1 1 0 0 1 1.56-1.26l1.07 1.34z" />
    </IconBase>
  ))
);

ShieldCheckBoldDuotone.displayName = 'ShieldCheckBoldDuotone';

// Triple export pattern (lucide-react style)
export { ShieldCheckBoldDuotone, ShieldCheckBoldDuotone as ShieldCheckBoldDuotoneIcon, ShieldCheckBoldDuotone as SiShieldCheckBoldDuotone };
export default ShieldCheckBoldDuotone;
export type { ShieldCheckBoldDuotoneProps };
