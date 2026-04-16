import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots33BoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots33Bold = memo(
  forwardRef<SVGSVGElement, GaugeDots33BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1a1.12 1.12 0 1 1 1.59 1.58 1.12 1.12 0 0 1-1.6-1.59M15.1 15.1a1.12 1.12 0 1 1 1.58 1.58 1.12 1.12 0 0 1-1.59-1.59M7.05 7.05a1 1 0 0 1 1.28-.12l.04.04.14.1 2.03 1.41a60 60 0 0 1 2.87 2.1 2 2 0 1 1-2.88 2.78c-.34-.4-1.26-1.7-2.05-2.82L7.06 8.51l-.1-.14-.02-.04-.05-.08a1 1 0 0 1 .16-1.2M6.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M17.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M15.1 7.32a1.13 1.13 0 1 1 1.58 1.59 1.13 1.13 0 0 1-1.59-1.6M12 5.38a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots33Bold.displayName = 'GaugeDots33Bold';

// Triple export pattern (lucide-react style)
export { GaugeDots33Bold, GaugeDots33Bold as GaugeDots33BoldIcon, GaugeDots33Bold as SiGaugeDots33Bold };
export default GaugeDots33Bold;
export type { GaugeDots33BoldProps };
