import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConnectionRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ConnectionRegularDuotone = memo(
  forwardRef<SVGSVGElement, ConnectionRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 13c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5M17 3c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5" opacity={0.4} />
        <path fillRule="evenodd" d="M7 3c2.2 0 4 1.8 4 4 0 .83-.26 1.6-.7 2.25l4.45 4.44c.64-.43 1.42-.69 2.25-.69 2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4c0-.83.26-1.6.7-2.25l-4.45-4.44C8.6 10.74 7.83 11 7 11c-2.2 0-4-1.8-4-4s1.8-4 4-4m10 11.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5M7 4.5C5.62 4.5 4.5 5.62 4.5 7S5.62 9.5 7 9.5 9.5 8.38 9.5 7 8.38 4.5 7 4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ConnectionRegularDuotone.displayName = 'ConnectionRegularDuotone';

// Triple export pattern
export { ConnectionRegularDuotone, ConnectionRegularDuotone as ConnectionRegularDuotoneIcon, ConnectionRegularDuotone as SiConnectionRegularDuotone };
export default ConnectionRegularDuotone;
export type { ConnectionRegularDuotoneProps };
