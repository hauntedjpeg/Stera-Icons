import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockPasswordOpenBoldProps = Omit<IconBaseProps, 'children'>;

const LockPasswordOpenBold = memo(
  forwardRef<SVGSVGElement, LockPasswordOpenBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.5 14c.69 0 1.25.56 1.25 1.25S9.19 16.5 8.5 16.5s-1.25-.56-1.25-1.25S7.81 14 8.5 14M12 14c.69 0 1.25.56 1.25 1.25S12.69 16.5 12 16.5s-1.25-.56-1.25-1.25S11.31 14 12 14M15.5 14c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25S14.81 14 15.5 14" />
        <path fillRule="evenodd" d="M12 2.5c1.58 0 2.99.73 3.9 1.88.35.43.28 1.05-.15 1.4s-1.06.28-1.4-.16c-.56-.68-1.4-1.12-2.35-1.12-1.66 0-3 1.34-3 3V9h5.2q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05v.9q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q4 16.93 4 15.7v-.9q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74q.4-.2.82-.29V7.5c0-2.76 2.24-5 5-5M9.8 11c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C6 13.36 6 13.94 6 14.8v.9c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-.9c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18-.45-.04-1.03-.04-1.89-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

LockPasswordOpenBold.displayName = 'LockPasswordOpenBold';

// Triple export pattern
export { LockPasswordOpenBold, LockPasswordOpenBold as LockPasswordOpenBoldIcon, LockPasswordOpenBold as SiLockPasswordOpenBold };
export default LockPasswordOpenBold;
export type { LockPasswordOpenBoldProps };
