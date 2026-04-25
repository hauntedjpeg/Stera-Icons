import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldSlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashFillDuotone = memo(
  forwardRef<SVGSVGElement, ShieldSlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.4 18.81a12 12 0 0 1-3.67 2.82l-1.28.64a1 1 0 0 1-.9 0l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V6.5a1 1 0 0 1 .65-.94zM12 1.63a1 1 0 0 1 .75.33 11 11 0 0 0 4.47 2.93 13 13 0 0 0 2.24.6l.12.01h.03a1 1 0 0 1 .89 1v4.17c0 2.36-.68 4.61-1.89 6.53L6.42 5.01l.36-.12a11 11 0 0 0 4.47-2.93l.08-.08a1 1 0 0 1 .67-.25" opacity={0.4} />
        <path d="M2.3 2.3a1 1 0 0 1 1.4 0l17 17a1 1 0 0 1-1.4 1.4l-17-17a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ShieldSlashFillDuotone.displayName = 'ShieldSlashFillDuotone';

// Triple export pattern (lucide-react style)
export { ShieldSlashFillDuotone, ShieldSlashFillDuotone as ShieldSlashFillDuotoneIcon, ShieldSlashFillDuotone as SiShieldSlashFillDuotone };
export default ShieldSlashFillDuotone;
export type { ShieldSlashFillDuotoneProps };
