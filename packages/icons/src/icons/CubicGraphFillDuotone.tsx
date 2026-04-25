import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubicGraphFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubicGraphFillDuotone = memo(
  forwardRef<SVGSVGElement, CubicGraphFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 19.96a1 1 0 0 1 1 1V21a1 1 0 0 1-2 0v-.05a1 1 0 0 1 1-1M12 16.96a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0v-.1a1 1 0 0 1 1-1M12 13.96a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V15l.64-.97a1 1 0 0 1 .36-.07M13.04 11.88V12a1 1 0 0 1-.24.65 1 1 0 0 1-.5.36l.2-.33zM3.05 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM6.05 11a1 1 0 1 1 0 2h-.1a1 1 0 1 1 0-2zM9.05 11a1 1 0 0 1 1 .9l-.7 1.05a1 1 0 0 1-.3.05h-.1a1 1 0 1 1 0-2zM15.05 11a1 1 0 1 1 0 2h-.1a1 1 0 1 1 0-2zM18.05 11a1 1 0 1 1 0 2h-.1a1 1 0 1 1 0-2zM21 11a1 1 0 1 1 0 2h-.05a1 1 0 1 1 0-2zM12 7.96a1 1 0 0 1 .65.23q-.67.81-1.25 1.66a1 1 0 0 1-.4-.8v-.1a1 1 0 0 1 1-1M12 4.96a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0v-.1a1 1 0 0 1 1-1M12 2a1 1 0 0 1 1 1v.05a1 1 0 1 1-2 0v-.04a1 1 0 0 1 1-1" opacity={0.4} />
        <path fillRule="evenodd" d="M21 3.75a1.25 1.25 0 0 1 0 2.5c-3.89 0-6.18 2.88-8.5 6.43-1.09 1.69-2.22 3.56-3.47 4.97-1.29 1.43-2.9 2.6-5.03 2.6h-.11.06H3a1.25 1.25 0 0 1 0-2.5H4c1.1 0 2.09-.58 3.15-1.77 1.1-1.22 2.07-2.85 3.25-4.66 2.25-3.45 5.2-7.57 10.59-7.57M3.83 20.24h.03zm-.49-2.3zm.2-.1.02-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

CubicGraphFillDuotone.displayName = 'CubicGraphFillDuotone';

// Triple export pattern (lucide-react style)
export { CubicGraphFillDuotone, CubicGraphFillDuotone as CubicGraphFillDuotoneIcon, CubicGraphFillDuotone as SiCubicGraphFillDuotone };
export default CubicGraphFillDuotone;
export type { CubicGraphFillDuotoneProps };
