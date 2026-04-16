import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots50RegularProps = Omit<IconBaseProps, 'children'>;

const GaugeDots50Regular = memo(
  forwardRef<SVGSVGElement, GaugeDots50RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1a1.12 1.12 0 1 1 1.59 1.58 1.12 1.12 0 0 1-1.6-1.59M15.1 15.1a1.12 1.12 0 1 1 1.58 1.58 1.12 1.12 0 0 1-1.59-1.59M12 5.25c.36 0 .67.26.74.62v.05l.04.17.43 2.44a61 61 0 0 1 .54 3.47 1.75 1.75 0 1 1-3.5-.06c.04-.5.3-2.05.54-3.41l.43-2.44.03-.17.01-.05a.75.75 0 0 1 .74-.62M6.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M17.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M7.31 7.32a1.13 1.13 0 1 1 1.6 1.59 1.13 1.13 0 0 1-1.6-1.6M15.1 7.32a1.13 1.13 0 1 1 1.58 1.59 1.13 1.13 0 0 1-1.59-1.6" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots50Regular.displayName = 'GaugeDots50Regular';

// Triple export pattern (lucide-react style)
export { GaugeDots50Regular, GaugeDots50Regular as GaugeDots50RegularIcon, GaugeDots50Regular as SiGaugeDots50Regular };
export default GaugeDots50Regular;
export type { GaugeDots50RegularProps };
