import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertCircleFillProps = Omit<IconBaseProps, 'children'>;

const AlertCircleFill = memo(
  forwardRef<SVGSVGElement, AlertCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 12.37a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-7.87c-.48 0-.87.39-.87.87V12a.88.88 0 0 0 1.74 0V7.5c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertCircleFill.displayName = 'AlertCircleFill';

// Triple export pattern (lucide-react style)
export { AlertCircleFill, AlertCircleFill as AlertCircleFillIcon, AlertCircleFill as SiAlertCircleFill };
export default AlertCircleFill;
export type { AlertCircleFillProps };
