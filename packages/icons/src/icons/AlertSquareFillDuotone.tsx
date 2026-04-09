import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, AlertSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-square-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM12 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-7.87c-.48 0-.87.39-.87.87V12a.88.88 0 0 0 1.74 0V7.5c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6.63c.48 0 .88.39.88.87V12a.88.88 0 0 1-1.76 0V7.5c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

AlertSquareFillDuotone.displayName = 'AlertSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { AlertSquareFillDuotone, AlertSquareFillDuotone as AlertSquareFillDuotoneIcon, AlertSquareFillDuotone as SiAlertSquareFillDuotone };
export default AlertSquareFillDuotone;
export type { AlertSquareFillDuotoneProps };
