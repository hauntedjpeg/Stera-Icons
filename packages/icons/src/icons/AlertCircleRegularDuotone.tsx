import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlertCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 14.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M12 6.75c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

AlertCircleRegularDuotone.displayName = 'AlertCircleRegularDuotone';

// Triple export pattern
export { AlertCircleRegularDuotone, AlertCircleRegularDuotone as AlertCircleRegularDuotoneIcon, AlertCircleRegularDuotone as SiAlertCircleRegularDuotone };
export default AlertCircleRegularDuotone;
export type { AlertCircleRegularDuotoneProps };
