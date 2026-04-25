import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots66BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots66BoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots66BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1a1.12 1.12 0 1 1 1.59 1.58 1.12 1.12 0 0 1-1.6-1.59M15.1 15.1a1.12 1.12 0 1 1 1.58 1.58 1.12 1.12 0 0 1-1.59-1.59M6.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M17.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M7.31 7.32a1.13 1.13 0 1 1 1.6 1.59 1.13 1.13 0 0 1-1.6-1.6M12 5.38a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={0.4} />
        <path d="M15.75 6.89a1 1 0 0 1 1.32 1.44l-.04.04-.1.14-.33.5-1.08 1.54a61 61 0 0 1-2.1 2.86 2 2 0 1 1-2.78-2.88c.4-.34 1.7-1.26 2.82-2.05l2.03-1.42.14-.1.04-.02z" />
    </IconBase>
  ))
);

GaugeDots66BoldDuotone.displayName = 'GaugeDots66BoldDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots66BoldDuotone, GaugeDots66BoldDuotone as GaugeDots66BoldDuotoneIcon, GaugeDots66BoldDuotone as SiGaugeDots66BoldDuotone };
export default GaugeDots66BoldDuotone;
export type { GaugeDots66BoldDuotoneProps };
