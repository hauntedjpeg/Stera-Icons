import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldBoldDuotone = memo(
  forwardRef<SVGSVGElement, ShieldBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 1.96a11 11 0 0 0 4.47 2.93 13 13 0 0 0 2.24.6l.12.01h.03a1 1 0 0 1 .89 1v4.17c0 4.64-2.62 8.88-6.77 10.96l-1.28.64a1 1 0 0 0 0-1.79l-.45-.22.83-.42a10.3 10.3 0 0 0 5.67-9.17V7.34c-.5-.11-1.19-.29-1.97-.57A13 13 0 0 1 12 4.05q.38-.36.75-.76a1 1 0 0 0 0-1.33" opacity={.4} />
        <path d="M11.25 1.96a1 1 0 1 1 1.5 1.33 13 13 0 0 1-5.28 3.48c-.78.28-1.47.46-1.97.57v3.33c0 3.88 2.2 7.43 5.67 9.17l1.28.64a1 1 0 0 1-.9 1.79l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V6.5a1 1 0 0 1 .89-1h.03q.05 0 .12-.02.18-.01.5-.09c.43-.1 1.04-.25 1.74-.5a11 11 0 0 0 4.47-2.93" />
    </IconBase>
  ))
);

ShieldBoldDuotone.displayName = 'ShieldBoldDuotone';

// Triple export pattern (lucide-react style)
export { ShieldBoldDuotone, ShieldBoldDuotone as ShieldBoldDuotoneIcon, ShieldBoldDuotone as SiShieldBoldDuotone };
export default ShieldBoldDuotone;
export type { ShieldBoldDuotoneProps };
