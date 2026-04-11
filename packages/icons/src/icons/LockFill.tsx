import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockFillProps = Omit<IconBaseProps, 'children'>;

const LockFill = memo(
  forwardRef<SVGSVGElement, LockFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.63c2.7 0 4.88 2.18 4.88 4.87v1.75q.46.08.88.3 1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v.9q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05v-.9q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.4-.2.88-.29V7.5c0-2.7 2.18-4.87 4.87-4.87m0 10.87a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m0-9.12A3.1 3.1 0 0 0 8.88 7.5v1.63h6.25V7.5c0-1.73-1.4-3.12-3.13-3.12" clipRule="evenodd" />
    </IconBase>
  ))
);

LockFill.displayName = 'LockFill';

// Triple export pattern (lucide-react style)
export { LockFill, LockFill as LockFillIcon, LockFill as SiLockFill };
export default LockFill;
export type { LockFillProps };
