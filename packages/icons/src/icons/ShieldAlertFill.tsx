import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldAlertFillProps = Omit<IconBaseProps, 'children'>;

const ShieldAlertFill = memo(
  forwardRef<SVGSVGElement, ShieldAlertFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.84 1.76a1 1 0 0 1 .47.05l7.5 2.8c.34.14.57.46.57.83v5.23c0 4.6-2.6 8.8-6.7 10.85l-1.29.64a.9.9 0 0 1-.78 0l-1.28-.64a12.1 12.1 0 0 1-6.7-10.85V5.44c0-.37.22-.7.56-.82l7.5-2.81zM12 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-7.37c-.48 0-.87.39-.87.87v4a.88.88 0 0 0 1.74 0v-4c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldAlertFill.displayName = 'ShieldAlertFill';

// Triple export pattern (lucide-react style)
export { ShieldAlertFill, ShieldAlertFill as ShieldAlertFillIcon, ShieldAlertFill as SiShieldAlertFill };
export default ShieldAlertFill;
export type { ShieldAlertFillProps };
