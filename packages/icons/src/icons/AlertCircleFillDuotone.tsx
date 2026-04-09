import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, AlertCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-circle-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 12.37a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-7.87c-.48 0-.87.39-.87.87V12a.88.88 0 0 0 1.74 0V7.5c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6.63c.48 0 .88.39.88.87V12a.88.88 0 0 1-1.76 0V7.5c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

AlertCircleFillDuotone.displayName = 'AlertCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { AlertCircleFillDuotone, AlertCircleFillDuotone as AlertCircleFillDuotoneIcon, AlertCircleFillDuotone as SiAlertCircleFillDuotone };
export default AlertCircleFillDuotone;
export type { AlertCircleFillDuotoneProps };
