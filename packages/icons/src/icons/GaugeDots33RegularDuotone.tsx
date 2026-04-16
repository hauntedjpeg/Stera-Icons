import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots33RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots33RegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots33RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1a1.12 1.12 0 1 1 1.59 1.58 1.12 1.12 0 0 1-1.6-1.59M15.1 15.1a1.12 1.12 0 1 1 1.58 1.58 1.12 1.12 0 0 1-1.59-1.59M6.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M17.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M15.1 7.32a1.13 1.13 0 1 1 1.58 1.59 1.13 1.13 0 0 1-1.59-1.6M12 5.38a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={0.4} />
        <path d="M7.23 7.23c.25-.26.66-.3.95-.09l.05.03.14.1.5.34 1.53 1.08a61 61 0 0 1 2.84 2.07 1.75 1.75 0 1 1-2.52 2.44 61 61 0 0 1-2.03-2.8L7.6 8.86l-.34-.5-.1-.13-.03-.04c-.2-.3-.17-.7.09-.96" />
    </IconBase>
  ))
);

GaugeDots33RegularDuotone.displayName = 'GaugeDots33RegularDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots33RegularDuotone, GaugeDots33RegularDuotone as GaugeDots33RegularDuotoneIcon, GaugeDots33RegularDuotone as SiGaugeDots33RegularDuotone };
export default GaugeDots33RegularDuotone;
export type { GaugeDots33RegularDuotoneProps };
