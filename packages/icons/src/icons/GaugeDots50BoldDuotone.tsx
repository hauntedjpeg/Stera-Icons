import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots50BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots50BoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots50BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1a1.12 1.12 0 1 1 1.59 1.58 1.12 1.12 0 0 1-1.6-1.59M15.1 15.1a1.12 1.12 0 1 1 1.58 1.58 1.12 1.12 0 0 1-1.59-1.59M6.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M17.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M7.31 7.32a1.13 1.13 0 1 1 1.6 1.59 1.13 1.13 0 0 1-1.6-1.6M15.1 7.32a1.13 1.13 0 1 1 1.58 1.59 1.13 1.13 0 0 1-1.59-1.6" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={0.4} />
        <path d="M12 5a1 1 0 0 1 .98.82l.01.06.03.16.44 2.44A60 60 0 0 1 14 12a2 2 0 1 1-4-.08c.04-.52.3-2.08.54-3.44l.44-2.44q0-.1.03-.16v-.06l.03-.09A1 1 0 0 1 12 5" />
    </IconBase>
  ))
);

GaugeDots50BoldDuotone.displayName = 'GaugeDots50BoldDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots50BoldDuotone, GaugeDots50BoldDuotone as GaugeDots50BoldDuotoneIcon, GaugeDots50BoldDuotone as SiGaugeDots50BoldDuotone };
export default GaugeDots50BoldDuotone;
export type { GaugeDots50BoldDuotoneProps };
