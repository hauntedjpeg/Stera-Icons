import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertDiamondFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertDiamondFillDuotone = memo(
  forwardRef<SVGSVGElement, AlertDiamondFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.5 2.02a5 5 0 0 1 3 0 5 5 0 0 1 1.7 1.02c.54.46 1.16 1.09 1.94 1.87l1.95 1.95Q20.27 8 20.96 8.8a5 5 0 0 1 1.02 1.7c.32.97.32 2.03 0 3a5 5 0 0 1-1.02 1.7c-.46.54-1.08 1.16-1.87 1.94l-1.95 1.95c-.78.79-1.4 1.4-1.94 1.87a5 5 0 0 1-1.7 1.02c-.97.32-2.03.32-3 0a5 5 0 0 1-1.7-1.02c-.54-.46-1.16-1.08-1.94-1.87L4.9 17.14c-.78-.78-1.41-1.4-1.87-1.95a5 5 0 0 1-1.02-1.68 5 5 0 0 1 0-3.02A5 5 0 0 1 3.04 8.8c.46-.54 1.09-1.16 1.87-1.94L6.86 4.9c.78-.78 1.4-1.41 1.95-1.87a5 5 0 0 1 1.68-1.02M12 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-7.88c-.48 0-.88.4-.88.88V12a.88.88 0 0 0 1.75 0V7.5c0-.48-.39-.88-.87-.88" clipRule="evenodd" opacity={.4} />
        <path d="M12 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6.63c.48 0 .88.39.88.87V12a.88.88 0 0 1-1.76 0V7.5c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

AlertDiamondFillDuotone.displayName = 'AlertDiamondFillDuotone';

// Triple export pattern (lucide-react style)
export { AlertDiamondFillDuotone, AlertDiamondFillDuotone as AlertDiamondFillDuotoneIcon, AlertDiamondFillDuotone as SiAlertDiamondFillDuotone };
export default AlertDiamondFillDuotone;
export type { AlertDiamondFillDuotoneProps };
