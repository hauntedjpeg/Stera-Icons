import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockPasswordFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LockPasswordFillDuotone = memo(
  forwardRef<SVGSVGElement, LockPasswordFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.2 9.13q1.24-.01 2.04.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v.9q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05v-.9q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-5.7 5c-.62 0-1.12.5-1.12 1.12s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12m3.5 0c-.62 0-1.12.5-1.12 1.12s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12m3.5 0c-.62 0-1.12.5-1.12 1.12s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12" clipRule="evenodd" opacity={.4} />
        <path d="M8.5 14.13c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M12 14.13c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M15.5 14.13c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M12 2.63c2.7 0 4.88 2.18 4.88 4.87v1.75q-.3-.05-.64-.08-.49-.04-1.11-.04V7.5c0-1.73-1.4-3.12-3.13-3.12S8.88 5.78 8.88 7.5v1.63q-.64 0-1.12.04-.33.02-.63.08V7.5c0-2.7 2.18-4.87 4.87-4.87" />
    </IconBase>
  ))
);

LockPasswordFillDuotone.displayName = 'LockPasswordFillDuotone';

// Triple export pattern
export { LockPasswordFillDuotone, LockPasswordFillDuotone as LockPasswordFillDuotoneIcon, LockPasswordFillDuotone as SiLockPasswordFillDuotone };
export default LockPasswordFillDuotone;
export type { LockPasswordFillDuotoneProps };
