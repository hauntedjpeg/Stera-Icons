import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockPasswordFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LockPasswordFillDuotone = memo(
  forwardRef<SVGSVGElement, LockPasswordFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.2 9.13q1.24-.01 2.04.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v.9q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05v-.9q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-5.7 5a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.25m3.5 0a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.25m3.5 0a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.25" clipRule="evenodd" opacity={.4} />
        <path d="M8.5 14.13a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25M12 14.13a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25M15.5 14.13a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25M12 2.63c2.7 0 4.88 2.18 4.88 4.87v1.75q-.3-.05-.64-.08-.49-.04-1.11-.04V7.5a3.12 3.12 0 1 0-6.26 0v1.63q-.63 0-1.11.04-.33.02-.63.08V7.5c0-2.7 2.18-4.87 4.87-4.87" />
    </IconBase>
  ))
);

LockPasswordFillDuotone.displayName = 'LockPasswordFillDuotone';

// Triple export pattern (lucide-react style)
export { LockPasswordFillDuotone, LockPasswordFillDuotone as LockPasswordFillDuotoneIcon, LockPasswordFillDuotone as SiLockPasswordFillDuotone };
export default LockPasswordFillDuotone;
export type { LockPasswordFillDuotoneProps };
