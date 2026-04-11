import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockPasswordOpenFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LockPasswordOpenFillDuotone = memo(
  forwardRef<SVGSVGElement, LockPasswordOpenFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.2 9.13q1.24-.01 2.04.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v.9q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05v-.9q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-5.7 5a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.25m3.5 0a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.25m3.5 0a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.25" clipRule="evenodd" opacity={.4} />
        <path d="M8.5 14.13a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25M12 14.13a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25M15.5 14.13a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25M12 2.63c1.54 0 2.91.71 3.8 1.82a.87.87 0 0 1-1.36 1.1A3.12 3.12 0 0 0 8.88 7.5v1.63q-.64 0-1.12.04-.33.02-.63.08V7.5c0-2.7 2.18-4.87 4.87-4.87" />
    </IconBase>
  ))
);

LockPasswordOpenFillDuotone.displayName = 'LockPasswordOpenFillDuotone';

// Triple export pattern (lucide-react style)
export { LockPasswordOpenFillDuotone, LockPasswordOpenFillDuotone as LockPasswordOpenFillDuotoneIcon, LockPasswordOpenFillDuotone as SiLockPasswordOpenFillDuotone };
export default LockPasswordOpenFillDuotone;
export type { LockPasswordOpenFillDuotoneProps };
