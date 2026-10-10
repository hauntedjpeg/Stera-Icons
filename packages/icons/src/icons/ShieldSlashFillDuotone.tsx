import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldSlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashFillDuotone = memo(
  forwardRef<SVGSVGElement, ShieldSlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.4 18.81q-1.53 1.74-3.67 2.82l-1.28.64c-.28.14-.62.14-.9 0l-1.28-.64C6.12 19.55 3.5 15.3 3.5 10.67V6.5c0-.43.27-.8.65-.94zM12 1.63q.45 0 .75.33c1.35 1.52 3.06 2.42 4.47 2.93q1.07.36 1.74.5l.5.1.12.01h.03c.5.06.89.49.89 1v4.17c0 2.36-.68 4.61-1.89 6.53L6.42 5.01l.36-.12c1.4-.51 3.12-1.4 4.47-2.93l.08-.08q.28-.24.67-.25" opacity={0.4} />
        <path d="M2.3 2.3c.38-.4 1.02-.4 1.4 0l17 17c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-17-17c-.4-.38-.4-1.02 0-1.4" />
    </IconBase>
  ))
);

ShieldSlashFillDuotone.displayName = 'ShieldSlashFillDuotone';

// Triple export pattern
export { ShieldSlashFillDuotone, ShieldSlashFillDuotone as ShieldSlashFillDuotoneIcon, ShieldSlashFillDuotone as SiShieldSlashFillDuotone };
export default ShieldSlashFillDuotone;
export type { ShieldSlashFillDuotoneProps };
