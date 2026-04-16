import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots100RegularProps = Omit<IconBaseProps, 'children'>;

const GaugeDots100Regular = memo(
  forwardRef<SVGSVGElement, GaugeDots100RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1a1.12 1.12 0 1 1 1.59 1.58 1.12 1.12 0 0 1-1.6-1.59M10.76 10.76a1.75 1.75 0 0 1 2.52.04c.33.39 1.24 1.67 2.03 2.8l1.42 2.03.1.14.03.04a.75.75 0 0 1-1.04 1.05l-.05-.03-.14-.1-.5-.34-1.53-1.08c-1.13-.8-2.41-1.7-2.8-2.03l-.04-.04a1.75 1.75 0 0 1 0-2.48M6.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M17.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M7.32 7.32A1.12 1.12 0 1 1 8.9 8.9a1.12 1.12 0 0 1-1.6-1.6M15.1 7.32a1.12 1.12 0 1 1 1.58 1.59 1.12 1.12 0 0 1-1.59-1.6M12 5.38a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots100Regular.displayName = 'GaugeDots100Regular';

// Triple export pattern (lucide-react style)
export { GaugeDots100Regular, GaugeDots100Regular as GaugeDots100RegularIcon, GaugeDots100Regular as SiGaugeDots100Regular };
export default GaugeDots100Regular;
export type { GaugeDots100RegularProps };
