import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, AlertSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zM12 14.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-7.87c-.48 0-.87.39-.87.87V12c0 .48.39.88.87.88s.88-.4.88-.88V7.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 14.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 6.63c.48 0 .88.39.88.87V12c0 .48-.4.88-.88.88s-.87-.4-.87-.88V7.5c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

AlertSquareFillDuotone.displayName = 'AlertSquareFillDuotone';

// Triple export pattern
export { AlertSquareFillDuotone, AlertSquareFillDuotone as AlertSquareFillDuotoneIcon, AlertSquareFillDuotone as SiAlertSquareFillDuotone };
export default AlertSquareFillDuotone;
export type { AlertSquareFillDuotoneProps };
