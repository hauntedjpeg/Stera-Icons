import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots33FillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots33Fill = memo(
  forwardRef<SVGSVGElement, GaugeDots33FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.55 15.45a1.12 1.12 0 1 0-1.59 1.59 1.12 1.12 0 0 0 1.6-1.6m8.49 0a1.12 1.12 0 1 0-1.6 1.59 1.12 1.12 0 0 0 1.6-1.6m-8.86-8.3a.75.75 0 0 0-1.04 1.03l.03.05.1.14 1.42 2.03c.8 1.13 1.7 2.41 2.03 2.8l.04.04a1.75 1.75 0 1 0 2.48-2.48l-.04-.04a61 61 0 0 0-2.8-2.03L8.37 7.27l-.14-.1zM6 10.86a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26m12 0a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26m-.96-3.9a1.12 1.12 0 1 0-1.6 1.58 1.12 1.12 0 0 0 1.6-1.59M12 4.86a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots33Fill.displayName = 'GaugeDots33Fill';

// Triple export pattern (lucide-react style)
export { GaugeDots33Fill, GaugeDots33Fill as GaugeDots33FillIcon, GaugeDots33Fill as SiGaugeDots33Fill };
export default GaugeDots33Fill;
export type { GaugeDots33FillProps };
