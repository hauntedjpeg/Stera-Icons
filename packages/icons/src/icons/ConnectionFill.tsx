import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConnectionFillProps = Omit<IconBaseProps, 'children'>;

const ConnectionFill = memo(
  forwardRef<SVGSVGElement, ConnectionFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 13c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4" />
        <path d="M7 3c2.2 0 4 1.8 4 4q-.01 1.13-.55 2.03l4.52 4.52q.91-.54 2.03-.55c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4q.01-1.13.55-2.03l-4.52-4.52q-.91.54-2.03.55c-2.2 0-4-1.8-4-4s1.8-4 4-4" />
        <path d="M17 3c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4" />
    </IconBase>
  ))
);

ConnectionFill.displayName = 'ConnectionFill';

// Triple export pattern
export { ConnectionFill, ConnectionFill as ConnectionFillIcon, ConnectionFill as SiConnectionFill };
export default ConnectionFill;
export type { ConnectionFillProps };
