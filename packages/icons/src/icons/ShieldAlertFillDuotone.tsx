import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldAlertFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldAlertFillDuotone = memo(
  forwardRef<SVGSVGElement, ShieldAlertFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75q.4 0 .65.3A11 11 0 0 0 17.17 5a13 13 0 0 0 2.4.62h.02c.45.05.79.42.79.87v4.17c0 4.6-2.6 8.8-6.7 10.85l-1.29.64a.9.9 0 0 1-.78 0l-1.28-.64a12.1 12.1 0 0 1-6.7-10.85V6.5c0-.45.33-.82.77-.87h.04l.63-.12c.43-.09 1.05-.25 1.76-.5a11 11 0 0 0 4.52-2.97q.26-.28.65-.29m0 12.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m0-7.12c-.48 0-.87.39-.87.87v3.5a.88.88 0 0 0 1.74 0V8c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 14.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7.13c.48 0 .88.39.88.87v3.5a.88.88 0 0 1-1.76 0V8c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

ShieldAlertFillDuotone.displayName = 'ShieldAlertFillDuotone';

// Triple export pattern (lucide-react style)
export { ShieldAlertFillDuotone, ShieldAlertFillDuotone as ShieldAlertFillDuotoneIcon, ShieldAlertFillDuotone as SiShieldAlertFillDuotone };
export default ShieldAlertFillDuotone;
export type { ShieldAlertFillDuotoneProps };
