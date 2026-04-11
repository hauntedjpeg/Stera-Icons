import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertOctagonFillProps = Omit<IconBaseProps, 'children'>;

const AlertOctagonFill = memo(
  forwardRef<SVGSVGElement, AlertOctagonFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.21 2.13c.56 0 1.1.22 1.5.62l4.54 4.54c.4.4.63.94.63 1.5v6.42c0 .56-.23 1.1-.63 1.5l-4.54 4.54c-.4.4-.94.63-1.5.63H8.79c-.56 0-1.1-.23-1.5-.63l-4.54-4.54c-.4-.4-.62-.94-.62-1.5V8.79c0-.56.22-1.1.62-1.5l4.54-4.54c.4-.4.94-.62 1.5-.62zM12 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-7.87c-.48 0-.87.39-.87.87V12a.88.88 0 0 0 1.74 0V7.5c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertOctagonFill.displayName = 'AlertOctagonFill';

// Triple export pattern (lucide-react style)
export { AlertOctagonFill, AlertOctagonFill as AlertOctagonFillIcon, AlertOctagonFill as SiAlertOctagonFill };
export default AlertOctagonFill;
export type { AlertOctagonFillProps };
