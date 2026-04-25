import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldFillDuotone = memo(
  forwardRef<SVGSVGElement, ShieldFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.88c1.5 1.42 3.2 2.27 4.58 2.77.79.29 1.49.47 1.99.57l.05.02v3.43c0 3.93-2.22 7.52-5.73 9.28l-.89.45-.89-.45a10.4 10.4 0 0 1-5.73-9.28V7.24l.05-.02c.5-.1 1.2-.28 2-.57C8.8 6.15 10.5 5.3 12 3.88" opacity={.4} />
        <path fillRule="evenodd" d="M12 1.75q.4 0 .65.3A11 11 0 0 0 17.17 5a13 13 0 0 0 2.4.62h.02c.45.05.79.42.79.87v4.17c0 4.6-2.6 8.8-6.7 10.85l-1.29.64a.9.9 0 0 1-.78 0l-1.28-.64a12.1 12.1 0 0 1-6.7-10.85V6.5c0-.45.33-.82.77-.87h.04l.63-.12c.43-.09 1.05-.25 1.76-.5a11 11 0 0 0 4.52-2.97q.26-.28.65-.29m0 2.13a13 13 0 0 1-4.58 2.77c-.79.29-1.49.47-1.99.57l-.05.02v3.43c0 3.93 2.22 7.52 5.73 9.28l.89.45.89-.45a10.4 10.4 0 0 0 5.74-9.28V7.24l-.06-.02c-.5-.1-1.2-.28-2-.57A13 13 0 0 1 12 3.88" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldFillDuotone.displayName = 'ShieldFillDuotone';

// Triple export pattern (lucide-react style)
export { ShieldFillDuotone, ShieldFillDuotone as ShieldFillDuotoneIcon, ShieldFillDuotone as SiShieldFillDuotone };
export default ShieldFillDuotone;
export type { ShieldFillDuotoneProps };
