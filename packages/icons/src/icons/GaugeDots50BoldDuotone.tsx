import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots50BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots50BoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots50BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1c.43-.45 1.15-.45 1.59 0 .44.43.44 1.15 0 1.58s-1.16.44-1.6 0c-.43-.43-.43-1.15 0-1.59M15.1 15.1c.43-.45 1.15-.45 1.58 0 .44.43.44 1.15 0 1.58-.43.44-1.15.44-1.59 0-.44-.43-.44-1.15 0-1.59M6.5 10.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M17.5 10.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M7.31 7.32c.44-.44 1.16-.44 1.6 0 .44.43.44 1.15 0 1.59s-1.16.44-1.6 0c-.43-.44-.43-1.16 0-1.6M15.1 7.32c.43-.44 1.15-.44 1.58 0 .44.43.44 1.15 0 1.59-.43.44-1.15.44-1.59 0s-.44-1.16 0-1.6" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={0.4} />
        <path d="M12 5c.48 0 .9.35.98.82l.01.06.03.16.11.6.33 1.84c.23 1.36.5 2.92.54 3.44V12c0 1.1-.9 2-2 2s-2-.9-2-2v-.08c.04-.52.3-2.08.54-3.44l.33-1.85.1-.59.04-.16v-.06l.03-.09c.12-.43.5-.73.96-.73" />
    </IconBase>
  ))
);

GaugeDots50BoldDuotone.displayName = 'GaugeDots50BoldDuotone';

// Triple export pattern
export { GaugeDots50BoldDuotone, GaugeDots50BoldDuotone as GaugeDots50BoldDuotoneIcon, GaugeDots50BoldDuotone as SiGaugeDots50BoldDuotone };
export default GaugeDots50BoldDuotone;
export type { GaugeDots50BoldDuotoneProps };
