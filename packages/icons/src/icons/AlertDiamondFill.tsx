import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertDiamondFillProps = Omit<IconBaseProps, 'children'>;

const AlertDiamondFill = memo(
  forwardRef<SVGSVGElement, AlertDiamondFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.5 2.02c.97-.32 2.03-.32 3 0 .62.2 1.14.55 1.7 1.02.54.46 1.16 1.09 1.94 1.87l1.95 1.95c.78.78 1.4 1.4 1.87 1.94.47.56.82 1.08 1.02 1.7.32.97.32 2.03 0 3-.2.62-.55 1.14-1.02 1.7-.46.54-1.09 1.16-1.87 1.94l-1.95 1.95Q16 20.26 15.2 20.96c-.56.47-1.08.82-1.7 1.02-.97.32-2.03.32-3 0-.62-.2-1.14-.55-1.7-1.02-.54-.46-1.16-1.09-1.94-1.87L4.9 17.14Q3.73 16 3.04 15.2c-.47-.56-.82-1.08-1.02-1.7-.32-.97-.32-2.03 0-3 .2-.62.55-1.14 1.02-1.7.46-.54 1.08-1.16 1.87-1.94L6.86 4.9c.78-.78 1.4-1.4 1.94-1.87.56-.47 1.08-.82 1.7-1.02M12 14.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-7.87c-.48 0-.87.39-.87.87V12c0 .48.39.88.87.88s.88-.4.88-.88V7.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertDiamondFill.displayName = 'AlertDiamondFill';

// Triple export pattern
export { AlertDiamondFill, AlertDiamondFill as AlertDiamondFillIcon, AlertDiamondFill as SiAlertDiamondFill };
export default AlertDiamondFill;
export type { AlertDiamondFillProps };
