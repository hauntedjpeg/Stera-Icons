import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConnectionAltBoldProps = Omit<IconBaseProps, 'children'>;

const ConnectionAltBold = memo(
  forwardRef<SVGSVGElement, ConnectionAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M7 12.75c2.35 0 4.25 1.9 4.25 4.25S9.35 21.25 7 21.25 2.75 19.35 2.75 17s1.9-4.25 4.25-4.25m0 2c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
        <path fillRule="evenodd" d="M7 2.75c2.28 0 4.14 1.8 4.25 4.05.2 4.2 1.74 5.76 5.95 5.95 2.25.1 4.05 1.97 4.05 4.25 0 2.35-1.9 4.25-4.25 4.25-2.28 0-4.14-1.8-4.25-4.05l-.02-.39c-.27-3.91-1.86-5.37-5.93-5.56-2.25-.1-4.05-1.97-4.05-4.25 0-2.35 1.9-4.25 4.25-4.25m10 12c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25m-10-10c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
        <path fillRule="evenodd" d="M17 2.75c2.35 0 4.25 1.9 4.25 4.25s-1.9 4.25-4.25 4.25-4.25-1.9-4.25-4.25 1.9-4.25 4.25-4.25m0 2c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ConnectionAltBold.displayName = 'ConnectionAltBold';

// Triple export pattern
export { ConnectionAltBold, ConnectionAltBold as ConnectionAltBoldIcon, ConnectionAltBold as SiConnectionAltBold };
export default ConnectionAltBold;
export type { ConnectionAltBoldProps };
