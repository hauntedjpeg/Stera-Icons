import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldBanFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldBanFillDuotone = memo(
  forwardRef<SVGSVGElement, ShieldBanFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4.05a13 13 0 0 0 4.53 2.72c.78.28 1.47.46 1.97.57v3.33c0 1.98-.57 3.87-1.59 5.48L5.56 7.32c.5-.1 1.16-.28 1.9-.55A13 13 0 0 0 12 4.05" opacity={.4} />
        <path fillRule="evenodd" d="M12 1.63a1 1 0 0 1 .75.33 11 11 0 0 0 4.47 2.93 13 13 0 0 0 2.24.6l.12.01h.03a1 1 0 0 1 .89 1v4.17c0 4.64-2.62 8.88-6.77 10.96l-1.28.64a1 1 0 0 1-.9 0l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V6.5a1 1 0 0 1 .89-1h.03q.05 0 .12-.02.18-.01.5-.09c.43-.1 1.04-.25 1.74-.5a11 11 0 0 0 4.47-2.93l.08-.08a1 1 0 0 1 .67-.25m0 2.42a13 13 0 0 1-4.53 2.72q-1.14.4-1.91.55l11.35 8.83a10.2 10.2 0 0 0 1.59-5.48V7.34c-.5-.11-1.19-.29-1.97-.57A13 13 0 0 1 12 4.05" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldBanFillDuotone.displayName = 'ShieldBanFillDuotone';

// Triple export pattern (lucide-react style)
export { ShieldBanFillDuotone, ShieldBanFillDuotone as ShieldBanFillDuotoneIcon, ShieldBanFillDuotone as SiShieldBanFillDuotone };
export default ShieldBanFillDuotone;
export type { ShieldBanFillDuotoneProps };
