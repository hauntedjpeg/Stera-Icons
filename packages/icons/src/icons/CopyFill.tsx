import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CopyFillProps = Omit<IconBaseProps, 'children'>;

const CopyFill = memo(
  forwardRef<SVGSVGElement, CopyFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.2 2.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.04.6.04 1.38.79-.01 1.37.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v3.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05h-3.4q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.04-.6-.04-1.38-.79.01-1.37-.04a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05V7.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zM7.8 3.88c-.85 0-1.44 0-1.9.03-.45.04-.69.1-.86.2q-.62.32-.93.93c-.1.17-.16.41-.2.86-.03.46-.04 1.05-.04 1.9v3.4c0 .85 0 1.44.04 1.9s.1.69.2.86q.32.62.93.93c.17.1.41.16.86.2q.48.03 1.22.03V12.8q-.01-1.24.05-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.82-.06 2.05-.04h2.32q0-.75-.03-1.23c-.04-.45-.1-.69-.2-.86q-.31-.62-.93-.93a2 2 0 0 0-.86-.2c-.46-.03-1.05-.04-1.9-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

CopyFill.displayName = 'CopyFill';

// Triple export pattern
export { CopyFill, CopyFill as CopyFillIcon, CopyFill as SiCopyFill };
export default CopyFill;
export type { CopyFillProps };
