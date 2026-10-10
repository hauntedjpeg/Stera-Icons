import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots100BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots100BoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots100BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1c.43-.45 1.15-.45 1.59 0 .44.43.44 1.15 0 1.58s-1.16.44-1.6 0c-.43-.43-.43-1.15 0-1.59M6.5 10.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M17.5 10.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M7.32 7.32c.43-.44 1.15-.44 1.59 0 .44.43.44 1.15 0 1.59s-1.16.44-1.6 0c-.43-.44-.43-1.16 0-1.6M15.1 7.32c.43-.44 1.15-.44 1.58 0 .44.43.44 1.15 0 1.59-.43.44-1.15.44-1.59 0s-.44-1.16 0-1.6M12 5.38c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={0.4} />
        <path d="M10.59 10.59c.78-.78 2.04-.78 2.82 0l.06.05c.34.4 1.26 1.7 2.05 2.82L16.6 15l.34.49.1.14.02.04.05.08c.22.39.16.88-.16 1.2-.34.34-.88.39-1.28.12l-.04-.04-.14-.1-.5-.33-1.53-1.08c-1.13-.8-2.42-1.71-2.82-2.05l-.05-.06c-.78-.78-.78-2.04 0-2.82" />
    </IconBase>
  ))
);

GaugeDots100BoldDuotone.displayName = 'GaugeDots100BoldDuotone';

// Triple export pattern
export { GaugeDots100BoldDuotone, GaugeDots100BoldDuotone as GaugeDots100BoldDuotoneIcon, GaugeDots100BoldDuotone as SiGaugeDots100BoldDuotone };
export default GaugeDots100BoldDuotone;
export type { GaugeDots100BoldDuotoneProps };
