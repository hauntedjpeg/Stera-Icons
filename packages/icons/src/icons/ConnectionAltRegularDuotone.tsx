import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConnectionAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ConnectionAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, ConnectionAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 13c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5M17 3c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5" opacity={0.4} />
        <path fillRule="evenodd" d="M7 3c2.08 0 3.8 1.6 3.98 3.62l.05.42c.47 4.18 1.99 5.57 6.35 5.98C19.4 13.2 21 14.92 21 17c0 2.2-1.8 4-4 4-2.08 0-3.8-1.6-3.98-3.62-.43-4.5-1.9-5.97-6.4-6.4C4.6 10.8 3 9.08 3 7c0-2.2 1.8-4 4-4m10 11.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5M7 4.5C5.62 4.5 4.5 5.62 4.5 7S5.62 9.5 7 9.5 9.5 8.38 9.5 7 8.38 4.5 7 4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ConnectionAltRegularDuotone.displayName = 'ConnectionAltRegularDuotone';

// Triple export pattern
export { ConnectionAltRegularDuotone, ConnectionAltRegularDuotone as ConnectionAltRegularDuotoneIcon, ConnectionAltRegularDuotone as SiConnectionAltRegularDuotone };
export default ConnectionAltRegularDuotone;
export type { ConnectionAltRegularDuotoneProps };
