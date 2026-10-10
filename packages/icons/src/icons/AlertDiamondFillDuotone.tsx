import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertDiamondFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertDiamondFillDuotone = memo(
  forwardRef<SVGSVGElement, AlertDiamondFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.5 2.02c.97-.32 2.03-.32 3 0 .62.2 1.14.55 1.7 1.02.54.46 1.16 1.09 1.94 1.87l1.95 1.95Q20.27 8 20.96 8.8c.47.56.82 1.08 1.02 1.7.32.97.32 2.03 0 3-.2.62-.55 1.14-1.02 1.7-.46.54-1.08 1.16-1.87 1.94l-1.95 1.95c-.78.79-1.4 1.4-1.94 1.87-.56.47-1.08.82-1.7 1.02-.97.32-2.03.32-3 0-.62-.2-1.14-.55-1.7-1.02-.54-.46-1.16-1.08-1.94-1.87L4.9 17.14c-.78-.78-1.41-1.4-1.87-1.95s-.82-1.07-1.02-1.68c-.32-.98-.32-2.04 0-3.02.2-.6.55-1.13 1.02-1.69.46-.54 1.09-1.16 1.87-1.94L6.86 4.9c.78-.78 1.4-1.41 1.95-1.87s1.07-.82 1.68-1.02M12 14.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-7.88c-.48 0-.88.4-.88.88V12c0 .48.4.87.88.87s.87-.39.87-.87V7.5c0-.48-.39-.88-.87-.88" clipRule="evenodd" opacity={.4} />
        <path d="M12 14.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 6.63c.48 0 .88.39.88.87V12c0 .48-.4.88-.88.88s-.87-.4-.87-.88V7.5c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

AlertDiamondFillDuotone.displayName = 'AlertDiamondFillDuotone';

// Triple export pattern
export { AlertDiamondFillDuotone, AlertDiamondFillDuotone as AlertDiamondFillDuotoneIcon, AlertDiamondFillDuotone as SiAlertDiamondFillDuotone };
export default AlertDiamondFillDuotone;
export type { AlertDiamondFillDuotoneProps };
