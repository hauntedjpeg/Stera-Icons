import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots33BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots33BoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots33BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1c.43-.45 1.15-.45 1.59 0 .44.43.44 1.15 0 1.58s-1.16.44-1.6 0c-.43-.43-.43-1.15 0-1.59M15.1 15.1c.43-.45 1.15-.45 1.58 0 .44.43.44 1.15 0 1.58-.43.44-1.15.44-1.59 0-.44-.43-.44-1.15 0-1.59M6.5 10.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M17.5 10.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M15.1 7.32c.43-.44 1.15-.44 1.58 0 .44.43.44 1.15 0 1.59-.43.44-1.15.44-1.59 0s-.44-1.16 0-1.6M12 5.38c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={0.4} />
        <path d="M7.05 7.05c.34-.34.88-.39 1.28-.12l.04.04.14.1.5.33 1.54 1.08c1.12.8 2.41 1.71 2.8 2.05l.06.06c.79.78.79 2.04 0 2.82-.78.79-2.04.79-2.82 0l-.06-.05c-.34-.4-1.26-1.7-2.05-2.82L7.4 9l-.34-.49-.1-.14-.02-.04-.05-.08c-.22-.39-.16-.88.16-1.2" />
    </IconBase>
  ))
);

GaugeDots33BoldDuotone.displayName = 'GaugeDots33BoldDuotone';

// Triple export pattern
export { GaugeDots33BoldDuotone, GaugeDots33BoldDuotone as GaugeDots33BoldDuotoneIcon, GaugeDots33BoldDuotone as SiGaugeDots33BoldDuotone };
export default GaugeDots33BoldDuotone;
export type { GaugeDots33BoldDuotoneProps };
