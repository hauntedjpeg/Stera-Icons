import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConnectionAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ConnectionAltFillDuotone = memo(
  forwardRef<SVGSVGElement, ConnectionAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 13c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4M17 3c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4" opacity={0.4} />
        <path d="M7 3c2.08 0 3.8 1.6 3.98 3.62l.05.42c.47 4.18 1.99 5.57 6.35 5.98C19.4 13.2 21 14.92 21 17c0 2.2-1.8 4-4 4-2.08 0-3.8-1.6-3.98-3.62-.43-4.5-1.9-5.97-6.4-6.4C4.6 10.8 3 9.08 3 7c0-2.2 1.8-4 4-4" />
    </IconBase>
  ))
);

ConnectionAltFillDuotone.displayName = 'ConnectionAltFillDuotone';

// Triple export pattern
export { ConnectionAltFillDuotone, ConnectionAltFillDuotone as ConnectionAltFillDuotoneIcon, ConnectionAltFillDuotone as SiConnectionAltFillDuotone };
export default ConnectionAltFillDuotone;
export type { ConnectionAltFillDuotoneProps };
