import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldSlashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashBoldDuotone = memo(
  forwardRef<SVGSVGElement, ShieldSlashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.5 7.74a1 1 0 0 1 1 1v1.93c0 3.88 2.2 7.43 5.67 9.17l.83.42.83-.42q.96-.48 1.79-1.14a1 1 0 0 1 1.24 1.57q-.98.79-2.13 1.36l-1.28.64a1 1 0 0 1-.9 0l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V8.74a1 1 0 0 1 1-1M12 1.63a1 1 0 0 1 .75.33 11 11 0 0 0 4.47 2.93 13 13 0 0 0 2.24.6l.12.01h.03a1 1 0 0 1 .89 1v4.17q0 2.22-.76 4.24a1 1 0 1 1-1.87-.7q.61-1.67.63-3.54V7.34c-.5-.11-1.19-.29-1.97-.57A13 13 0 0 1 12 4.05q-1.15 1.06-2.37 1.72a1 1 0 0 1-.98-1.74c.9-.5 1.81-1.18 2.6-2.07l.08-.08a1 1 0 0 1 .67-.25" opacity={0.4} />
        <path d="M2.3 2.3a1 1 0 0 1 1.4 0l17 17a1 1 0 0 1-1.4 1.4l-17-17a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ShieldSlashBoldDuotone.displayName = 'ShieldSlashBoldDuotone';

// Triple export pattern (lucide-react style)
export { ShieldSlashBoldDuotone, ShieldSlashBoldDuotone as ShieldSlashBoldDuotoneIcon, ShieldSlashBoldDuotone as SiShieldSlashBoldDuotone };
export default ShieldSlashBoldDuotone;
export type { ShieldSlashBoldDuotoneProps };
