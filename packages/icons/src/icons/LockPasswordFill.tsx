import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockPasswordFillProps = Omit<IconBaseProps, 'children'>;

const LockPasswordFill = memo(
  forwardRef<SVGSVGElement, LockPasswordFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.63c2.7 0 4.88 2.18 4.88 4.87v1.75q.46.08.88.3 1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v.9q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05v-.9q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.4-.2.88-.29V7.5c0-2.7 2.18-4.87 4.87-4.87m-3.5 11.5c-.62 0-1.12.5-1.12 1.12s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12m3.5 0c-.62 0-1.12.5-1.12 1.12s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12m3.5 0c-.62 0-1.12.5-1.12 1.12s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12M12 4.37c-1.73 0-3.12 1.4-3.12 3.13v1.63h6.24V7.5c0-1.73-1.4-3.12-3.12-3.12" clipRule="evenodd" />
    </IconBase>
  ))
);

LockPasswordFill.displayName = 'LockPasswordFill';

// Triple export pattern
export { LockPasswordFill, LockPasswordFill as LockPasswordFillIcon, LockPasswordFill as SiLockPasswordFill };
export default LockPasswordFill;
export type { LockPasswordFillProps };
