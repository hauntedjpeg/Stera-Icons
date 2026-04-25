import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldSlashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashRegularDuotone = memo(
  forwardRef<SVGSVGElement, ShieldSlashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.5 7.99c.41 0 .75.33.75.75v1.93a10.5 10.5 0 0 0 5.8 9.4l.95.47.95-.48a11 11 0 0 0 1.83-1.16.75.75 0 0 1 .93 1.17 12 12 0 0 1-2.1 1.34l-1.27.64q-.34.15-.68 0l-1.28-.64a12 12 0 0 1-6.63-10.74V8.74c0-.42.34-.75.75-.75M12 1.88q.33 0 .56.25a11 11 0 0 0 4.57 3 13 13 0 0 0 2.29.6l.13.02h.03l.14.03c.31.1.53.39.53.72v4.17a12 12 0 0 1-.74 4.16.75.75 0 0 1-1.4-.52q.63-1.74.64-3.64V7.13l-.16-.03q-.77-.14-1.97-.57c-1.4-.5-3.13-1.37-4.62-2.82Q10.78 4.85 9.5 5.56a.75.75 0 0 1-.74-1.31c.93-.52 1.86-1.21 2.67-2.12l.06-.06q.2-.19.5-.2" opacity={0.4} />
        <path d="M2.47 2.47c.3-.3.77-.3 1.06 0l17 17a.75.75 0 1 1-1.06 1.06l-17-17a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ShieldSlashRegularDuotone.displayName = 'ShieldSlashRegularDuotone';

// Triple export pattern (lucide-react style)
export { ShieldSlashRegularDuotone, ShieldSlashRegularDuotone as ShieldSlashRegularDuotoneIcon, ShieldSlashRegularDuotone as SiShieldSlashRegularDuotone };
export default ShieldSlashRegularDuotone;
export type { ShieldSlashRegularDuotoneProps };
