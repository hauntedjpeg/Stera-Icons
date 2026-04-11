import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertTriangleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertTriangleFillDuotone = memo(
  forwardRef<SVGSVGElement, AlertTriangleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.63 2.9a3.4 3.4 0 0 1 2.74 0c.6.27 1.03.75 1.43 1.32q.6.87 1.42 2.32l4.06 7.02q.86 1.44 1.31 2.39c.3.63.5 1.26.43 1.9-.1.95-.6 1.82-1.37 2.38-.53.38-1.17.52-1.87.58-.7.07-1.6.06-2.72.06H7.94q-1.67.02-2.73-.06c-.7-.06-1.33-.2-1.86-.58a3.4 3.4 0 0 1-1.37-2.38c-.07-.64.14-1.27.43-1.9q.46-.95 1.3-2.4l4.07-7c.56-.98 1-1.75 1.41-2.33.4-.57.85-1.05 1.44-1.31M12 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-6.88c-.48 0-.88.4-.88.88V12a.88.88 0 0 0 1.75 0V8.5c0-.48-.39-.88-.87-.88" clipRule="evenodd" opacity={.4} />
        <path d="M12 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 7.63c.48 0 .88.39.88.87V12a.88.88 0 0 1-1.76 0V8.5c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

AlertTriangleFillDuotone.displayName = 'AlertTriangleFillDuotone';

// Triple export pattern (lucide-react style)
export { AlertTriangleFillDuotone, AlertTriangleFillDuotone as AlertTriangleFillDuotoneIcon, AlertTriangleFillDuotone as SiAlertTriangleFillDuotone };
export default AlertTriangleFillDuotone;
export type { AlertTriangleFillDuotoneProps };
