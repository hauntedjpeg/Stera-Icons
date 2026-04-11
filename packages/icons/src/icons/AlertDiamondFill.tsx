import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertDiamondFillProps = Omit<IconBaseProps, 'children'>;

const AlertDiamondFill = memo(
  forwardRef<SVGSVGElement, AlertDiamondFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.5 2.02a5 5 0 0 1 3 0 5 5 0 0 1 1.7 1.02q.79.7 1.94 1.87l1.95 1.95c.78.78 1.4 1.4 1.87 1.94a5 5 0 0 1 1.02 1.7c.32.97.32 2.03 0 3a5 5 0 0 1-1.02 1.7c-.46.54-1.08 1.16-1.87 1.94l-1.95 1.95Q16 20.26 15.2 20.96a5 5 0 0 1-1.7 1.02c-.97.32-2.03.32-3 0a5 5 0 0 1-1.7-1.02q-.79-.7-1.94-1.87L4.9 17.14Q3.73 16 3.04 15.2a5 5 0 0 1-1.02-1.7 5 5 0 0 1 0-3 5 5 0 0 1 1.02-1.7c.46-.54 1.09-1.16 1.87-1.94L6.86 4.9c.78-.78 1.4-1.4 1.95-1.87a5 5 0 0 1 1.68-1.02M12 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-7.87c-.48 0-.87.39-.87.87V12a.88.88 0 0 0 1.75 0V7.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertDiamondFill.displayName = 'AlertDiamondFill';

// Triple export pattern (lucide-react style)
export { AlertDiamondFill, AlertDiamondFill as AlertDiamondFillIcon, AlertDiamondFill as SiAlertDiamondFill };
export default AlertDiamondFill;
export type { AlertDiamondFillProps };
