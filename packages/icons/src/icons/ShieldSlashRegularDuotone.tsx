import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldSlashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashRegularDuotone = memo(
  forwardRef<SVGSVGElement, ShieldSlashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.5 7.99c.41 0 .75.33.75.75v1.93c0 3.98 2.25 7.61 5.8 9.4l.95.47.95-.48q.97-.49 1.83-1.16c.32-.26.8-.2 1.05.12.26.32.2.8-.12 1.05q-.96.77-2.1 1.34l-1.27.64q-.34.15-.68 0l-1.28-.64c-4.06-2.04-6.63-6.2-6.63-10.74V8.74c0-.42.34-.75.75-.75M12 1.88q.33 0 .56.25c1.4 1.56 3.14 2.47 4.57 3 .71.25 1.34.41 1.78.5l.5.1.14.02h.03l.14.03c.31.1.53.39.53.72v4.17q-.01 2.18-.74 4.16c-.14.38-.58.58-.96.44-.4-.14-.6-.58-.45-.96q.64-1.74.65-3.64V7.13l-.16-.03q-.77-.14-1.97-.57c-1.4-.5-3.13-1.37-4.62-2.82Q10.78 4.85 9.5 5.56c-.36.2-.82.07-1.02-.29s-.08-.82.28-1.02c.93-.52 1.86-1.21 2.67-2.12l.06-.06q.2-.19.5-.2" opacity={0.4} />
        <path d="M2.47 2.47c.3-.3.77-.3 1.06 0l17 17c.3.3.3.77 0 1.06s-.77.3-1.06 0l-17-17c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ShieldSlashRegularDuotone.displayName = 'ShieldSlashRegularDuotone';

// Triple export pattern
export { ShieldSlashRegularDuotone, ShieldSlashRegularDuotone as ShieldSlashRegularDuotoneIcon, ShieldSlashRegularDuotone as SiShieldSlashRegularDuotone };
export default ShieldSlashRegularDuotone;
export type { ShieldSlashRegularDuotoneProps };
