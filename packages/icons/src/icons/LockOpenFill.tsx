import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockOpenFillProps = Omit<IconBaseProps, 'children'>;

const LockOpenFill = memo(
  forwardRef<SVGSVGElement, LockOpenFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.63c1.54 0 2.91.71 3.8 1.82.3.38.25.93-.13 1.23s-.93.24-1.23-.13c-.57-.72-1.45-1.17-2.44-1.17-1.73 0-3.12 1.4-3.12 3.12v1.63h5.32q1.24-.01 2.04.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v.9q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05v-.9q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.4-.2.88-.29V7.5c0-2.7 2.18-4.87 4.87-4.87m0 10.87c-.97 0-1.75.78-1.75 1.75S11.03 17 12 17s1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" />
    </IconBase>
  ))
);

LockOpenFill.displayName = 'LockOpenFill';

// Triple export pattern
export { LockOpenFill, LockOpenFill as LockOpenFillIcon, LockOpenFill as SiLockOpenFill };
export default LockOpenFill;
export type { LockOpenFillProps };
