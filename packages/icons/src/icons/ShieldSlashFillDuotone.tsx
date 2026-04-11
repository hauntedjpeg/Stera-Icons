import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldSlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashFillDuotone = memo(
  forwardRef<SVGSVGElement, ShieldSlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.4 18.63a12 12 0 0 1-3.73 2.89l-1.28.64a.9.9 0 0 1-.78 0l-1.28-.64a12.1 12.1 0 0 1-6.7-10.85V5.44q0-.25.12-.45zM11.84 1.76a1 1 0 0 1 .47.05l7.5 2.8c.34.14.56.46.57.83v5.23c0 2.37-.7 4.63-1.93 6.55L5.4 4.16l6.3-2.35z" opacity={0.4} />
        <path d="M2.38 2.38a.9.9 0 0 1 1.24 0l17 17a.88.88 0 0 1-1.24 1.24l-17-17a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

ShieldSlashFillDuotone.displayName = 'ShieldSlashFillDuotone';

// Triple export pattern (lucide-react style)
export { ShieldSlashFillDuotone, ShieldSlashFillDuotone as ShieldSlashFillDuotoneIcon, ShieldSlashFillDuotone as SiShieldSlashFillDuotone };
export default ShieldSlashFillDuotone;
export type { ShieldSlashFillDuotoneProps };
