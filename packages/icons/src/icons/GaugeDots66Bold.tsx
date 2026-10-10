import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots66BoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots66Bold = memo(
  forwardRef<SVGSVGElement, GaugeDots66BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1c.43-.45 1.15-.45 1.59 0 .44.43.44 1.15 0 1.58s-1.16.44-1.6 0c-.43-.43-.43-1.15 0-1.59M15.1 15.1c.43-.45 1.15-.45 1.58 0 .44.43.44 1.15 0 1.58-.43.44-1.15.44-1.59 0-.44-.43-.44-1.15 0-1.59M15.75 6.89c.39-.22.88-.16 1.2.16.34.34.39.88.12 1.28l-.04.04-.1.14-.33.5-1.08 1.53c-.8 1.13-1.71 2.42-2.05 2.82l-.06.05c-.78.79-2.04.79-2.82 0-.79-.78-.79-2.04 0-2.82l.05-.06c.4-.34 1.7-1.26 2.82-2.05L15 7.4l.49-.34.14-.1.04-.02zM6.5 10.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M17.5 10.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M7.31 7.32c.44-.44 1.16-.44 1.6 0 .44.43.44 1.15 0 1.59s-1.16.44-1.6 0c-.43-.44-.43-1.16 0-1.6M12 5.38c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots66Bold.displayName = 'GaugeDots66Bold';

// Triple export pattern
export { GaugeDots66Bold, GaugeDots66Bold as GaugeDots66BoldIcon, GaugeDots66Bold as SiGaugeDots66Bold };
export default GaugeDots66Bold;
export type { GaugeDots66BoldProps };
