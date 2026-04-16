import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots50RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots50RegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots50RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1a1.12 1.12 0 1 1 1.59 1.58 1.12 1.12 0 0 1-1.6-1.59M15.1 15.1a1.12 1.12 0 1 1 1.58 1.58 1.12 1.12 0 0 1-1.59-1.59M6.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M17.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M7.31 7.32a1.13 1.13 0 1 1 1.6 1.59 1.13 1.13 0 0 1-1.6-1.6M15.1 7.32a1.13 1.13 0 1 1 1.58 1.59 1.13 1.13 0 0 1-1.59-1.6" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={0.4} />
        <path d="M12 5.25c.36 0 .67.26.74.62v.05l.04.17.43 2.44a61 61 0 0 1 .54 3.47 1.75 1.75 0 1 1-3.5-.06c.04-.5.3-2.05.54-3.41l.43-2.44.03-.17.01-.05a.75.75 0 0 1 .74-.62" />
    </IconBase>
  ))
);

GaugeDots50RegularDuotone.displayName = 'GaugeDots50RegularDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots50RegularDuotone, GaugeDots50RegularDuotone as GaugeDots50RegularDuotoneIcon, GaugeDots50RegularDuotone as SiGaugeDots50RegularDuotone };
export default GaugeDots50RegularDuotone;
export type { GaugeDots50RegularDuotoneProps };
