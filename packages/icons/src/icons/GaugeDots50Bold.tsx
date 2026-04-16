import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots50BoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots50Bold = memo(
  forwardRef<SVGSVGElement, GaugeDots50BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1a1.12 1.12 0 1 1 1.59 1.58 1.12 1.12 0 0 1-1.6-1.59M15.1 15.1a1.12 1.12 0 1 1 1.58 1.58 1.12 1.12 0 0 1-1.59-1.59M12 5a1 1 0 0 1 .98.82l.01.06.03.16.44 2.44A60 60 0 0 1 14 12a2 2 0 1 1-4-.08c.04-.52.3-2.08.54-3.44l.44-2.44q0-.1.03-.16v-.06l.03-.09A1 1 0 0 1 12 5M6.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M17.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M7.31 7.32a1.13 1.13 0 1 1 1.6 1.59 1.13 1.13 0 0 1-1.6-1.6M15.1 7.32a1.13 1.13 0 1 1 1.58 1.59 1.13 1.13 0 0 1-1.59-1.6" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots50Bold.displayName = 'GaugeDots50Bold';

// Triple export pattern (lucide-react style)
export { GaugeDots50Bold, GaugeDots50Bold as GaugeDots50BoldIcon, GaugeDots50Bold as SiGaugeDots50Bold };
export default GaugeDots50Bold;
export type { GaugeDots50BoldProps };
