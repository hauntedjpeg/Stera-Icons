import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots0BoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots0Bold = memo(
  forwardRef<SVGSVGElement, GaugeDots0BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.67 10.67a1.88 1.88 0 1 1 2.6 2.7c-.38.34-1.67 1.25-2.8 2.05l-2.03 1.42-.14.09-.04.03-.14.08a.88.88 0 0 1-1.08-1.3l.03-.04.1-.14 1.41-2.03a60 60 0 0 1 2.1-2.86M15.1 15.1a1.12 1.12 0 1 1 1.58 1.58 1.12 1.12 0 0 1-1.59-1.59M6.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M17.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M7.31 7.32a1.13 1.13 0 1 1 1.6 1.59 1.13 1.13 0 0 1-1.6-1.6M15.1 7.32a1.13 1.13 0 1 1 1.58 1.59 1.13 1.13 0 0 1-1.59-1.6M12 5.38a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots0Bold.displayName = 'GaugeDots0Bold';

// Triple export pattern (lucide-react style)
export { GaugeDots0Bold, GaugeDots0Bold as GaugeDots0BoldIcon, GaugeDots0Bold as SiGaugeDots0Bold };
export default GaugeDots0Bold;
export type { GaugeDots0BoldProps };
