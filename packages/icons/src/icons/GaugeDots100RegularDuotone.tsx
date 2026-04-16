import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots100RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots100RegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots100RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1a1.12 1.12 0 1 1 1.59 1.58 1.12 1.12 0 0 1-1.6-1.59M6.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M17.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M7.32 7.32A1.12 1.12 0 1 1 8.9 8.9a1.12 1.12 0 0 1-1.6-1.6M15.1 7.32a1.12 1.12 0 1 1 1.58 1.59 1.12 1.12 0 0 1-1.59-1.6M12 5.38a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={0.4} />
        <path d="M10.76 10.76a1.75 1.75 0 0 1 2.52.04c.33.39 1.24 1.67 2.03 2.8l1.08 1.54.34.5.1.13.03.04a.75.75 0 0 1-1.04 1.05l-.05-.03-.14-.1-2.03-1.42a61 61 0 0 1-2.84-2.07 1.75 1.75 0 0 1 0-2.48" />
    </IconBase>
  ))
);

GaugeDots100RegularDuotone.displayName = 'GaugeDots100RegularDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots100RegularDuotone, GaugeDots100RegularDuotone as GaugeDots100RegularDuotoneIcon, GaugeDots100RegularDuotone as SiGaugeDots100RegularDuotone };
export default GaugeDots100RegularDuotone;
export type { GaugeDots100RegularDuotoneProps };
