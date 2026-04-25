import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldSlashFillProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashFill = memo(
  forwardRef<SVGSVGElement, ShieldSlashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.21 7.8c.28-.1.6-.04.82.17l10.88 10.88a.75.75 0 0 1-.06 1.1 12 12 0 0 1-2.23 1.46l-1.29.64q-.32.15-.67 0l-1.28-.64a12 12 0 0 1-6.63-10.74V8.5c0-.3.18-.58.46-.7M2.38 2.38a.9.9 0 0 1 1.24 0l17 17a.88.88 0 0 1-1.24 1.24l-17-17a.9.9 0 0 1 0-1.24M12 1.88q.33 0 .56.25a11 11 0 0 0 4.57 3 13 13 0 0 0 2.29.6l.13.02h.03l.14.03c.3.1.53.39.53.72v4.17q0 2.28-.81 4.34a.75.75 0 0 1-1.23.26L8.46 5.52a.75.75 0 0 1 .17-1.19c.97-.53 1.96-1.24 2.8-2.2l.06-.06q.22-.19.5-.2" />
    </IconBase>
  ))
);

ShieldSlashFill.displayName = 'ShieldSlashFill';

// Triple export pattern (lucide-react style)
export { ShieldSlashFill, ShieldSlashFill as ShieldSlashFillIcon, ShieldSlashFill as SiShieldSlashFill };
export default ShieldSlashFill;
export type { ShieldSlashFillProps };
