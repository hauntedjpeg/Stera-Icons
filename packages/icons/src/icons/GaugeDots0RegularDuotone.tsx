import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots0RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots0RegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots0RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.1 15.1c.43-.45 1.15-.45 1.58 0 .44.43.44 1.15 0 1.58-.43.44-1.15.44-1.59 0-.44-.43-.44-1.15 0-1.59M6.5 10.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M17.5 10.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M7.31 7.32c.44-.44 1.16-.44 1.6 0 .44.43.44 1.15 0 1.59s-1.16.44-1.6 0c-.43-.44-.43-1.16 0-1.6M15.1 7.32c.43-.44 1.15-.44 1.58 0 .44.43.44 1.15 0 1.59-.43.44-1.15.44-1.59 0s-.44-1.16 0-1.6M12 5.38c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={0.4} />
        <path d="M10.76 10.76c.69-.68 1.8-.68 2.48 0s.68 1.8 0 2.48l-.04.04c-.39.33-1.67 1.24-2.8 2.03L8.86 16.4l-.5.34-.13.1-.04.03c-.3.2-.7.17-.96-.09-.26-.25-.3-.66-.09-.95l.03-.05.1-.14.34-.5 1.08-1.53c.8-1.13 1.7-2.41 2.03-2.8z" />
    </IconBase>
  ))
);

GaugeDots0RegularDuotone.displayName = 'GaugeDots0RegularDuotone';

// Triple export pattern
export { GaugeDots0RegularDuotone, GaugeDots0RegularDuotone as GaugeDots0RegularDuotoneIcon, GaugeDots0RegularDuotone as SiGaugeDots0RegularDuotone };
export default GaugeDots0RegularDuotone;
export type { GaugeDots0RegularDuotoneProps };
