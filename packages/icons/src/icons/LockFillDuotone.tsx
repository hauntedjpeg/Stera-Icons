import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LockFillDuotone = memo(
  forwardRef<SVGSVGElement, LockFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.2 9.13q1.24-.01 2.04.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v.9q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05v-.9q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zM12 13.5c-.97 0-1.75.78-1.75 1.75S11.03 17 12 17s1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" opacity={.4} />
        <path d="M12 13.5c.97 0 1.75.78 1.75 1.75S12.97 17 12 17s-1.75-.78-1.75-1.75.78-1.75 1.75-1.75M12 2.63c2.7 0 4.88 2.18 4.88 4.87v1.75q-.3-.05-.64-.08-.49-.04-1.11-.04V7.5c0-1.73-1.4-3.12-3.13-3.12S8.88 5.78 8.88 7.5v1.63q-.64 0-1.12.04-.33.02-.63.08V7.5c0-2.7 2.18-4.87 4.87-4.87" />
    </IconBase>
  ))
);

LockFillDuotone.displayName = 'LockFillDuotone';

// Triple export pattern
export { LockFillDuotone, LockFillDuotone as LockFillDuotoneIcon, LockFillDuotone as SiLockFillDuotone };
export default LockFillDuotone;
export type { LockFillDuotoneProps };
