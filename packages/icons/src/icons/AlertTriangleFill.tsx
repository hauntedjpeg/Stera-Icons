import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertTriangleFillProps = Omit<IconBaseProps, 'children'>;

const AlertTriangleFill = memo(
  forwardRef<SVGSVGElement, AlertTriangleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.63 2.9c.87-.38 1.87-.38 2.74 0 .6.27 1.03.75 1.43 1.32q.6.87 1.42 2.32l4.06 7.02q.86 1.44 1.31 2.39c.3.63.5 1.26.43 1.9-.1.95-.6 1.82-1.37 2.38-.53.38-1.17.52-1.86.58-.7.07-1.6.06-2.73.06H7.94q-1.67.02-2.73-.06c-.7-.06-1.33-.2-1.86-.58-.77-.56-1.27-1.43-1.37-2.38-.07-.64.14-1.27.43-1.9q.46-.95 1.3-2.4l4.07-7Q8.6 5.08 9.2 4.21c.4-.57.84-1.05 1.43-1.31M12 14.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-6.88c-.48 0-.87.4-.87.88V12c0 .48.39.87.87.87s.88-.39.88-.87V8.5c0-.48-.4-.88-.88-.88" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertTriangleFill.displayName = 'AlertTriangleFill';

// Triple export pattern
export { AlertTriangleFill, AlertTriangleFill as AlertTriangleFillIcon, AlertTriangleFill as SiAlertTriangleFill };
export default AlertTriangleFill;
export type { AlertTriangleFillProps };
