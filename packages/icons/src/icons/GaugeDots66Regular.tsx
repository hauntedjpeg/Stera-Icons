import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots66RegularProps = Omit<IconBaseProps, 'children'>;

const GaugeDots66Regular = memo(
  forwardRef<SVGSVGElement, GaugeDots66RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1a1.12 1.12 0 1 1 1.59 1.58 1.12 1.12 0 0 1-1.6-1.59M15.1 15.1a1.12 1.12 0 1 1 1.58 1.58 1.12 1.12 0 0 1-1.59-1.59M15.82 7.14a.75.75 0 0 1 1.04 1.04l-.03.05-.1.14-.34.5-1.08 1.53c-.8 1.13-1.7 2.41-2.03 2.8l-.04.04a1.75 1.75 0 1 1-2.44-2.52c.39-.33 1.67-1.24 2.8-2.03l2.03-1.42.14-.1zM6.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M17.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M7.31 7.32a1.13 1.13 0 1 1 1.6 1.59 1.13 1.13 0 0 1-1.6-1.6M12 5.38a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots66Regular.displayName = 'GaugeDots66Regular';

// Triple export pattern (lucide-react style)
export { GaugeDots66Regular, GaugeDots66Regular as GaugeDots66RegularIcon, GaugeDots66Regular as SiGaugeDots66Regular };
export default GaugeDots66Regular;
export type { GaugeDots66RegularProps };
