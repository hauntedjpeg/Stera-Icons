import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertCircleBoldProps = Omit<IconBaseProps, 'children'>;

const AlertCircleBold = memo(
  forwardRef<SVGSVGElement, AlertCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 14.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 6.5c.55 0 1 .45 1 1V12c0 .55-.45 1-1 1s-1-.45-1-1V7.5c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertCircleBold.displayName = 'AlertCircleBold';

// Triple export pattern
export { AlertCircleBold, AlertCircleBold as AlertCircleBoldIcon, AlertCircleBold as SiAlertCircleBold };
export default AlertCircleBold;
export type { AlertCircleBoldProps };
