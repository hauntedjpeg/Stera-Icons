import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertHexagonFillProps = Omit<IconBaseProps, 'children'>;

const AlertHexagonFill = memo(
  forwardRef<SVGSVGElement, AlertHexagonFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.2 3.12c.95 0 1.63 0 2.26.2q.79.26 1.4.82c.48.44.8 1.04 1.28 1.88l1.8 3.2c.45.8.78 1.37.91 2q.16.78 0 1.57c-.13.62-.46 1.18-.91 2l-1.8 3.2c-.47.83-.8 1.43-1.28 1.87q-.61.56-1.4.82c-.63.2-1.3.2-2.27.2H9.81c-.96 0-1.64 0-2.27-.2q-.79-.26-1.4-.82c-.48-.44-.8-1.04-1.28-1.88l-1.8-3.2c-.45-.8-.78-1.37-.91-2q-.16-.78 0-1.57c.13-.62.46-1.18.91-2l1.8-3.2c.47-.83.8-1.43 1.28-1.87q.61-.56 1.4-.82c.63-.2 1.3-.2 2.27-.2zM12 14.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-7.88c-.48 0-.87.4-.87.88V12c0 .48.39.87.87.87s.88-.39.88-.87V7.5c0-.48-.4-.87-.88-.88" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertHexagonFill.displayName = 'AlertHexagonFill';

// Triple export pattern
export { AlertHexagonFill, AlertHexagonFill as AlertHexagonFillIcon, AlertHexagonFill as SiAlertHexagonFill };
export default AlertHexagonFill;
export type { AlertHexagonFillProps };
