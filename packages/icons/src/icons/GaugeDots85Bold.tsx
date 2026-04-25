import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots85BoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots85Bold = memo(
  forwardRef<SVGSVGElement, GaugeDots85BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1a1.12 1.12 0 1 1 1.59 1.58 1.12 1.12 0 0 1-1.6-1.59M15.1 15.1a1.12 1.12 0 1 1 1.58 1.58 1.12 1.12 0 0 1-1.59-1.59M12.08 10c.52.04 2.08.3 3.44.54l2.44.44q.1 0 .16.03h.06l.09.03a1 1 0 0 1-.09 1.94l-.06.01-.16.03-2.44.44A61 61 0 0 1 12 14a2 2 0 1 1 .08-4M6.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M7.31 7.32a1.13 1.13 0 1 1 1.6 1.59 1.13 1.13 0 0 1-1.6-1.6M15.1 7.32a1.13 1.13 0 1 1 1.58 1.59 1.13 1.13 0 0 1-1.59-1.6M12 5.38a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots85Bold.displayName = 'GaugeDots85Bold';

// Triple export pattern (lucide-react style)
export { GaugeDots85Bold, GaugeDots85Bold as GaugeDots85BoldIcon, GaugeDots85Bold as SiGaugeDots85Bold };
export default GaugeDots85Bold;
export type { GaugeDots85BoldProps };
