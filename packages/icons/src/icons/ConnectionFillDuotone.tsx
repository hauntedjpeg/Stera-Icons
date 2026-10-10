import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConnectionFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ConnectionFillDuotone = memo(
  forwardRef<SVGSVGElement, ConnectionFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 13c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4M17 3c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4" opacity={0.4} />
        <path d="M7 3c2.2 0 4 1.8 4 4q-.01 1.13-.55 2.03l4.52 4.52q.91-.54 2.03-.55c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4q.01-1.13.55-2.03l-4.52-4.52q-.91.54-2.03.55c-2.2 0-4-1.8-4-4s1.8-4 4-4" />
    </IconBase>
  ))
);

ConnectionFillDuotone.displayName = 'ConnectionFillDuotone';

// Triple export pattern
export { ConnectionFillDuotone, ConnectionFillDuotone as ConnectionFillDuotoneIcon, ConnectionFillDuotone as SiConnectionFillDuotone };
export default ConnectionFillDuotone;
export type { ConnectionFillDuotoneProps };
