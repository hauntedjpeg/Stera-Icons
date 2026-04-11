import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertOctagonFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertOctagonFillDuotone = memo(
  forwardRef<SVGSVGElement, AlertOctagonFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.21 2.13c.56 0 1.1.22 1.5.62l4.54 4.54c.4.4.63.94.63 1.5v6.42c0 .56-.23 1.1-.63 1.5l-4.54 4.54c-.4.4-.94.63-1.5.63H8.79c-.56 0-1.1-.23-1.5-.63l-4.54-4.54c-.4-.4-.62-.94-.62-1.5V8.79c0-.56.22-1.1.62-1.5l4.54-4.54c.4-.4.94-.62 1.5-.62zM12 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-7.87c-.48 0-.87.39-.87.87V12a.88.88 0 0 0 1.74 0V7.5c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6.63c.48 0 .88.39.88.87V12a.88.88 0 0 1-1.76 0V7.5c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

AlertOctagonFillDuotone.displayName = 'AlertOctagonFillDuotone';

// Triple export pattern (lucide-react style)
export { AlertOctagonFillDuotone, AlertOctagonFillDuotone as AlertOctagonFillDuotoneIcon, AlertOctagonFillDuotone as SiAlertOctagonFillDuotone };
export default AlertOctagonFillDuotone;
export type { AlertOctagonFillDuotoneProps };
