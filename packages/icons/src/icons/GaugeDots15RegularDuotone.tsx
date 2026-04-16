import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots15RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots15RegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots15RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1a1.12 1.12 0 1 1 1.59 1.58 1.12 1.12 0 0 1-1.6-1.59M15.1 15.1a1.12 1.12 0 1 1 1.58 1.58 1.12 1.12 0 0 1-1.59-1.59M17.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M7.31 7.32a1.13 1.13 0 1 1 1.6 1.59 1.13 1.13 0 0 1-1.6-1.6M15.1 7.32a1.13 1.13 0 1 1 1.58 1.59 1.13 1.13 0 0 1-1.59-1.6M12 5.38a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={0.4} />
        <path d="M12 10.25a1.75 1.75 0 1 1-.06 3.5c-.5-.04-2.05-.3-3.41-.54l-2.44-.43-.17-.03-.05-.01a.75.75 0 0 1 0-1.48h.05l.17-.04 2.44-.43a61 61 0 0 1 3.47-.54" />
    </IconBase>
  ))
);

GaugeDots15RegularDuotone.displayName = 'GaugeDots15RegularDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots15RegularDuotone, GaugeDots15RegularDuotone as GaugeDots15RegularDuotoneIcon, GaugeDots15RegularDuotone as SiGaugeDots15RegularDuotone };
export default GaugeDots15RegularDuotone;
export type { GaugeDots15RegularDuotoneProps };
