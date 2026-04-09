import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockOpenFillProps = Omit<IconBaseProps, 'children'>;

const LockOpenFill = memo(
  forwardRef<SVGSVGElement, LockOpenFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="lock-open-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.63c1.54 0 2.91.71 3.8 1.82a.87.87 0 0 1-1.36 1.1A3.12 3.12 0 0 0 8.88 7.5v1.63h5.32q1.24-.01 2.04.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v.9q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05v-.9q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.4-.2.88-.29V7.5c0-2.7 2.18-4.87 4.87-4.87m0 10.87a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

LockOpenFill.displayName = 'LockOpenFill';

// Triple export pattern (lucide-react style)
export { LockOpenFill, LockOpenFill as LockOpenFillIcon, LockOpenFill as SiLockOpenFill };
export default LockOpenFill;
export type { LockOpenFillProps };
