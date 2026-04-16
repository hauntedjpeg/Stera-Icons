import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots66BoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots66Bold = memo(
  forwardRef<SVGSVGElement, GaugeDots66BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1a1.12 1.12 0 1 1 1.59 1.58 1.12 1.12 0 0 1-1.6-1.59M15.1 15.1a1.12 1.12 0 1 1 1.58 1.58 1.12 1.12 0 0 1-1.59-1.59M15.75 6.89a1 1 0 0 1 1.32 1.44l-.04.04-.1.14-1.41 2.03a60 60 0 0 1-2.1 2.87 2 2 0 1 1-2.78-2.88c.4-.34 1.7-1.26 2.82-2.05l2.17-1.51.04-.03zM6.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M17.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M7.31 7.32a1.13 1.13 0 1 1 1.6 1.59 1.13 1.13 0 0 1-1.6-1.6M12 5.38a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots66Bold.displayName = 'GaugeDots66Bold';

// Triple export pattern (lucide-react style)
export { GaugeDots66Bold, GaugeDots66Bold as GaugeDots66BoldIcon, GaugeDots66Bold as SiGaugeDots66Bold };
export default GaugeDots66Bold;
export type { GaugeDots66BoldProps };
