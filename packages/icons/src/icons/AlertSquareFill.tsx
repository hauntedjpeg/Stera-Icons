import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertSquareFillProps = Omit<IconBaseProps, 'children'>;

const AlertSquareFill = memo(
  forwardRef<SVGSVGElement, AlertSquareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-square-fill" {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.08 2.7-.06zM12 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-7.87c-.48 0-.87.39-.87.87V12a.88.88 0 0 0 1.74 0V7.5c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertSquareFill.displayName = 'AlertSquareFill';

// Triple export pattern (lucide-react style)
export { AlertSquareFill, AlertSquareFill as AlertSquareFillIcon, AlertSquareFill as SiAlertSquareFill };
export default AlertSquareFill;
export type { AlertSquareFillProps };
