import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots100BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots100BoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots100BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1a1.12 1.12 0 1 1 1.59 1.58 1.12 1.12 0 0 1-1.6-1.59M6.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M17.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M7.32 7.32A1.12 1.12 0 1 1 8.9 8.9a1.12 1.12 0 0 1-1.6-1.6M15.1 7.32a1.12 1.12 0 1 1 1.58 1.59 1.12 1.12 0 0 1-1.59-1.6M12 5.38a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={0.4} />
        <path d="M10.59 10.59a2 2 0 0 1 2.88.05c.34.4 1.26 1.7 2.05 2.82l1.42 2.03.1.14.02.04.05.08a1 1 0 0 1-1.44 1.32l-.04-.04-.63-.43-1.54-1.08a61 61 0 0 1-2.87-2.1 2 2 0 0 1 0-2.83" />
    </IconBase>
  ))
);

GaugeDots100BoldDuotone.displayName = 'GaugeDots100BoldDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots100BoldDuotone, GaugeDots100BoldDuotone as GaugeDots100BoldDuotoneIcon, GaugeDots100BoldDuotone as SiGaugeDots100BoldDuotone };
export default GaugeDots100BoldDuotone;
export type { GaugeDots100BoldDuotoneProps };
