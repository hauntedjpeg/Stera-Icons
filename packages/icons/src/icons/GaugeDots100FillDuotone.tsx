import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots100FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots100FillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots100FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.55 15.45a1.12 1.12 0 1 0-1.59 1.59 1.12 1.12 0 0 0 1.6-1.6m4.78-4.78a1.88 1.88 0 1 0-2.6 2.7c.38.34 1.67 1.25 2.8 2.05l2.03 1.42.14.09.04.03a.88.88 0 0 0 1.3-1.08l-.08-.14-.03-.04-.1-.14-1.41-2.03a61 61 0 0 0-2.1-2.86m-7.33.2a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26m12 0a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26m-9.45-3.9a1.12 1.12 0 1 0-1.59 1.58 1.12 1.12 0 0 0 1.6-1.59m8.49 0a1.12 1.12 0 1 0-1.6 1.58 1.12 1.12 0 0 0 1.6-1.59M12 4.86a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.25" clipRule="evenodd" opacity={.4} />
        <path d="M6.96 15.45a1.12 1.12 0 1 1 1.6 1.59 1.12 1.12 0 0 1-1.6-1.6M10.67 10.67a1.9 1.9 0 0 1 2.7.05c.34.4 1.25 1.68 2.05 2.8l1.42 2.04.09.14.03.04.08.14a.88.88 0 0 1-1.3 1.08l-.04-.03-.14-.1-2.03-1.41a60 60 0 0 1-2.86-2.1 1.9 1.9 0 0 1 0-2.65M6 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M18 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M6.96 6.96a1.12 1.12 0 1 1 1.6 1.6 1.12 1.12 0 0 1-1.6-1.6M15.45 6.96a1.12 1.12 0 1 1 1.59 1.6 1.12 1.12 0 0 1-1.6-1.6M12 4.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" />
    </IconBase>
  ))
);

GaugeDots100FillDuotone.displayName = 'GaugeDots100FillDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots100FillDuotone, GaugeDots100FillDuotone as GaugeDots100FillDuotoneIcon, GaugeDots100FillDuotone as SiGaugeDots100FillDuotone };
export default GaugeDots100FillDuotone;
export type { GaugeDots100FillDuotoneProps };
