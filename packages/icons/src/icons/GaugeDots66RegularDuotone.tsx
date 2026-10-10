import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots66RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots66RegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots66RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1c.43-.45 1.15-.45 1.59 0 .44.43.44 1.15 0 1.58s-1.16.44-1.6 0c-.43-.43-.43-1.15 0-1.59M15.1 15.1c.43-.45 1.15-.45 1.58 0 .44.43.44 1.15 0 1.58-.43.44-1.15.44-1.59 0-.44-.43-.44-1.15 0-1.59M6.5 10.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M17.5 10.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M7.31 7.32c.44-.44 1.16-.44 1.6 0 .44.43.44 1.15 0 1.59s-1.16.44-1.6 0c-.43-.44-.43-1.16 0-1.6M12 5.38c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={0.4} />
        <path d="M15.82 7.14c.3-.2.7-.17.95.09.26.25.3.66.09.95l-.03.05-.1.14-.34.5-1.08 1.53c-.8 1.13-1.7 2.41-2.03 2.8l-.04.04c-.69.68-1.8.68-2.48 0s-.68-1.8 0-2.48l.04-.04c.39-.33 1.67-1.24 2.8-2.03l1.54-1.08.5-.34.13-.1z" />
    </IconBase>
  ))
);

GaugeDots66RegularDuotone.displayName = 'GaugeDots66RegularDuotone';

// Triple export pattern
export { GaugeDots66RegularDuotone, GaugeDots66RegularDuotone as GaugeDots66RegularDuotoneIcon, GaugeDots66RegularDuotone as SiGaugeDots66RegularDuotone };
export default GaugeDots66RegularDuotone;
export type { GaugeDots66RegularDuotoneProps };
