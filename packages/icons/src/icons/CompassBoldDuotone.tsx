import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CompassBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CompassBoldDuotone = memo(
  forwardRef<SVGSVGElement, CompassBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M15.68 7.05c.36-.12.76-.02 1.03.24.27.27.36.67.24 1.03l-2 6q-.16.46-.63.63l-6 2c-.36.12-.76.02-1.03-.24-.26-.27-.36-.67-.24-1.03l2-6 .05-.1q.18-.38.58-.53zM12 10.75c-.69 0-1.25.56-1.25 1.25 0 .7.56 1.25 1.25 1.25.7 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CompassBoldDuotone.displayName = 'CompassBoldDuotone';

// Triple export pattern
export { CompassBoldDuotone, CompassBoldDuotone as CompassBoldDuotoneIcon, CompassBoldDuotone as SiCompassBoldDuotone };
export default CompassBoldDuotone;
export type { CompassBoldDuotoneProps };
