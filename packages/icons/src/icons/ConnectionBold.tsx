import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConnectionBoldProps = Omit<IconBaseProps, 'children'>;

const ConnectionBold = memo(
  forwardRef<SVGSVGElement, ConnectionBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M7 12.75c2.35 0 4.25 1.9 4.25 4.25S9.35 21.25 7 21.25 2.75 19.35 2.75 17s1.9-4.25 4.25-4.25m0 2c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
        <path fillRule="evenodd" d="M7 2.75c2.35 0 4.25 1.9 4.25 4.25q-.02 1.23-.62 2.21l4.16 4.16q.98-.61 2.21-.62c2.35 0 4.25 1.9 4.25 4.25s-1.9 4.25-4.25 4.25-4.25-1.9-4.25-4.25q.02-1.23.62-2.21l-4.16-4.16q-.98.61-2.21.62c-2.35 0-4.25-1.9-4.25-4.25S4.65 2.75 7 2.75m10 12c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25m-10-10c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
        <path fillRule="evenodd" d="M17 2.75c2.35 0 4.25 1.9 4.25 4.25s-1.9 4.25-4.25 4.25-4.25-1.9-4.25-4.25 1.9-4.25 4.25-4.25m0 2c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ConnectionBold.displayName = 'ConnectionBold';

// Triple export pattern
export { ConnectionBold, ConnectionBold as ConnectionBoldIcon, ConnectionBold as SiConnectionBold };
export default ConnectionBold;
export type { ConnectionBoldProps };
