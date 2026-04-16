import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots33RegularProps = Omit<IconBaseProps, 'children'>;

const GaugeDots33Regular = memo(
  forwardRef<SVGSVGElement, GaugeDots33RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1a1.12 1.12 0 1 1 1.59 1.58 1.12 1.12 0 0 1-1.6-1.59M15.1 15.1a1.12 1.12 0 1 1 1.58 1.58 1.12 1.12 0 0 1-1.59-1.59M7.23 7.23c.25-.26.66-.3.95-.09l.05.03.14.1.5.34 1.53 1.08c1.13.8 2.41 1.7 2.8 2.03l.04.04a1.75 1.75 0 1 1-2.52 2.44 61 61 0 0 1-2.03-2.8L7.27 8.37l-.1-.14-.03-.04c-.2-.3-.17-.7.09-.96M6.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M17.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M15.1 7.32a1.13 1.13 0 1 1 1.58 1.59 1.13 1.13 0 0 1-1.59-1.6M12 5.38a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots33Regular.displayName = 'GaugeDots33Regular';

// Triple export pattern (lucide-react style)
export { GaugeDots33Regular, GaugeDots33Regular as GaugeDots33RegularIcon, GaugeDots33Regular as SiGaugeDots33Regular };
export default GaugeDots33Regular;
export type { GaugeDots33RegularProps };
