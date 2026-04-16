import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots33BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots33BoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots33BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1a1.12 1.12 0 1 1 1.59 1.58 1.12 1.12 0 0 1-1.6-1.59M15.1 15.1a1.12 1.12 0 1 1 1.58 1.58 1.12 1.12 0 0 1-1.59-1.59M6.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M17.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M15.1 7.32a1.13 1.13 0 1 1 1.58 1.59 1.13 1.13 0 0 1-1.59-1.6M12 5.38a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={0.4} />
        <path d="M7.05 7.05a1 1 0 0 1 1.28-.12l.04.04.14.1.5.33 1.54 1.08a61 61 0 0 1 2.86 2.1 2 2 0 1 1-2.88 2.78c-.34-.4-1.26-1.7-2.05-2.82L7.4 9l-.34-.49-.1-.14-.02-.04-.05-.08a1 1 0 0 1 .16-1.2" />
    </IconBase>
  ))
);

GaugeDots33BoldDuotone.displayName = 'GaugeDots33BoldDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots33BoldDuotone, GaugeDots33BoldDuotone as GaugeDots33BoldDuotoneIcon, GaugeDots33BoldDuotone as SiGaugeDots33BoldDuotone };
export default GaugeDots33BoldDuotone;
export type { GaugeDots33BoldDuotoneProps };
