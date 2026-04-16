import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots33FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots33FillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots33FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.55 15.45a1.12 1.12 0 1 0-1.59 1.59 1.12 1.12 0 0 0 1.6-1.6m8.49 0a1.12 1.12 0 1 0-1.6 1.59 1.12 1.12 0 0 0 1.6-1.6m-8.86-8.3a.75.75 0 0 0-1.04 1.03l.03.05.1.14 1.42 2.03a61 61 0 0 0 2.07 2.84 1.75 1.75 0 0 0 2.48-2.48l-.04-.04a61 61 0 0 0-2.8-2.03L8.37 7.27l-.14-.1zM6 10.86a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26m12 0a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26m-.96-3.9a1.12 1.12 0 1 0-1.6 1.58 1.12 1.12 0 0 0 1.6-1.59M12 4.86a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.25" clipRule="evenodd" opacity={.4} />
        <path d="M6.96 15.45a1.12 1.12 0 1 1 1.6 1.59 1.12 1.12 0 0 1-1.6-1.6M15.45 15.45a1.12 1.12 0 1 1 1.59 1.59 1.12 1.12 0 0 1-1.6-1.6M7.23 7.23c.25-.26.65-.3.95-.09l.05.03.14.1 2.03 1.42c1.13.8 2.41 1.7 2.8 2.03l.04.04a1.75 1.75 0 1 1-2.52 2.44 61 61 0 0 1-2.03-2.8L7.27 8.37l-.1-.14-.03-.04c-.2-.3-.17-.7.09-.96M6 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M18 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M15.45 6.96a1.12 1.12 0 1 1 1.59 1.6 1.12 1.12 0 0 1-1.6-1.6M12 4.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" />
    </IconBase>
  ))
);

GaugeDots33FillDuotone.displayName = 'GaugeDots33FillDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots33FillDuotone, GaugeDots33FillDuotone as GaugeDots33FillDuotoneIcon, GaugeDots33FillDuotone as SiGaugeDots33FillDuotone };
export default GaugeDots33FillDuotone;
export type { GaugeDots33FillDuotoneProps };
