import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubicGraphFillProps = Omit<IconBaseProps, 'children'>;

const CubicGraphFill = memo(
  forwardRef<SVGSVGElement, CubicGraphFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 19.96a1 1 0 0 1 1 1V21a1 1 0 0 1-2 0v-.05a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M21 3.75a1.25 1.25 0 1 1 0 2.5c-3.6 0-5.82 2.46-7.96 5.63V12a1 1 0 0 1-.24.65 1 1 0 0 1-.5.36l-.66 1.02a1 1 0 0 1 1.36.93v.1a1 1 0 1 1-2 0V15c-.63.95-1.28 1.87-1.97 2.65-1.29 1.43-2.9 2.6-5.03 2.6h-.11.06H3a1.25 1.25 0 0 1 0-2.5H4c1.1 0 2.09-.58 3.15-1.77.75-.84 1.45-1.87 2.2-3.03a1 1 0 0 1-.31.05h-.1a1 1 0 1 1 0-2h.1a1 1 0 0 1 1 .9q.17-.3.36-.58.47-.73.99-1.47a1 1 0 0 1-.4-.8v-.1a1 1 0 0 1 1.65-.76c1.98-2.4 4.57-4.44 8.35-4.44M3.83 20.24h.03zm-.49-2.3zm.2-.1.02-.01z" clipRule="evenodd" />
        <path d="M12 16.96a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0v-.1a1 1 0 0 1 1-1M3.05 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM6.05 11a1 1 0 1 1 0 2h-.1a1 1 0 1 1 0-2zM15.05 11a1 1 0 1 1 0 2h-.1a1 1 0 0 1 0-2zM18.05 11a1 1 0 1 1 0 2h-.1a1 1 0 0 1 0-2zM21 11a1 1 0 1 1 0 2h-.05a1 1 0 0 1 0-2zM12 4.96a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0v-.1a1 1 0 0 1 1-1M12 2a1 1 0 0 1 1 1v.05a1 1 0 1 1-2 0v-.04a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CubicGraphFill.displayName = 'CubicGraphFill';

// Triple export pattern (lucide-react style)
export { CubicGraphFill, CubicGraphFill as CubicGraphFillIcon, CubicGraphFill as SiCubicGraphFill };
export default CubicGraphFill;
export type { CubicGraphFillProps };
