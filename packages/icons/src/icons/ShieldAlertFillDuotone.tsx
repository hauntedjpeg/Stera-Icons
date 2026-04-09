import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldAlertFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldAlertFillDuotone = memo(
  forwardRef<SVGSVGElement, ShieldAlertFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-alert-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M11.84 1.76a1 1 0 0 1 .47.05l7.5 2.8c.34.14.56.46.57.83v5.23c0 4.6-2.6 8.8-6.7 10.85l-1.29.64a.9.9 0 0 1-.78 0l-1.28-.64a12.1 12.1 0 0 1-6.7-10.85V5.44c0-.37.22-.7.56-.82l7.5-2.81zM12 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-7.38c-.48 0-.87.4-.87.88v4a.88.88 0 0 0 1.74 0v-4c0-.48-.39-.88-.87-.88" clipRule="evenodd" opacity={.4} />
        <path d="M12 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6.63c.48 0 .88.39.88.87v4a.88.88 0 0 1-1.76 0v-4c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

ShieldAlertFillDuotone.displayName = 'ShieldAlertFillDuotone';

// Triple export pattern (lucide-react style)
export { ShieldAlertFillDuotone, ShieldAlertFillDuotone as ShieldAlertFillDuotoneIcon, ShieldAlertFillDuotone as SiShieldAlertFillDuotone };
export default ShieldAlertFillDuotone;
export type { ShieldAlertFillDuotoneProps };
