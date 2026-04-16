import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots100FillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots100Fill = memo(
  forwardRef<SVGSVGElement, GaugeDots100FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.55 15.45a1.12 1.12 0 1 0-1.59 1.59 1.12 1.12 0 0 0 1.6-1.6m4.78-4.78a1.88 1.88 0 1 0-2.6 2.7c.38.34 1.67 1.25 2.8 2.05l2.03 1.42.14.09.04.03a.88.88 0 0 0 1.3-1.08l-.08-.13-.03-.05-.1-.14-1.41-2.03a61 61 0 0 0-2.1-2.86m-7.33.2a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26m12 0a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26m-9.45-3.9a1.12 1.12 0 1 0-1.59 1.58 1.12 1.12 0 0 0 1.6-1.59m8.49 0a1.12 1.12 0 1 0-1.6 1.58 1.12 1.12 0 0 0 1.6-1.59M12 4.86a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots100Fill.displayName = 'GaugeDots100Fill';

// Triple export pattern (lucide-react style)
export { GaugeDots100Fill, GaugeDots100Fill as GaugeDots100FillIcon, GaugeDots100Fill as SiGaugeDots100Fill };
export default GaugeDots100Fill;
export type { GaugeDots100FillProps };
