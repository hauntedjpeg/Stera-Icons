import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge66RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Gauge66RegularDuotone = memo(
  forwardRef<SVGSVGElement, Gauge66RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.71c5.94 0 10.75 4.82 10.75 10.75 0 2.94-1.18 5.6-3.09 7.54l-.06.07q-.29.27-.67.2h-.02q-.13-.03-.25-.1l-.12-.1-.02-.02-2.1-2.1c-.29-.3-.29-.77 0-1.07.3-.29.77-.29 1.06 0l1.57 1.57c1.22-1.44 2-3.25 2.17-5.24H19c-.41 0-.75-.33-.75-.75 0-.41.34-.75.75-.75h2.22c-.36-4.5-3.96-8.1-8.47-8.46v2.22c0 .41-.33.75-.75.75-.4 0-.75-.34-.75-.75V4.25c-1.99.15-3.8.94-5.24 2.16L7.58 8c.3.29.3.76 0 1.06-.29.29-.76.29-1.06 0L4.95 7.47c-1.22 1.44-2 3.25-2.17 5.24H5c.41 0 .75.34.75.75 0 .42-.34.75-.75.75H2.78c.16 2 .95 3.8 2.17 5.24l1.57-1.57c.29-.29.76-.29 1.06 0 .29.3.29.77 0 1.07l-2.1 2.1q-.02 0-.02.02-.11.1-.25.16l-.11.03-.03.01c-.24.05-.5-.02-.68-.2L4.34 21c-1.91-1.94-3.09-4.6-3.09-7.54C1.25 7.53 6.06 2.71 12 2.71" opacity={.4} />
        <path d="M16.62 7.84c.28-.14.63-.09.86.14.26.27.3.68.07.98l-.04.05-.11.16-.43.57-1.31 1.79c-.98 1.3-2.06 2.75-2.38 3.13l-.04.04c-.69.68-1.8.68-2.48 0s-.68-1.79 0-2.47l.04-.04c.38-.33 1.83-1.4 3.14-2.38l1.78-1.32.57-.42.16-.12.05-.04z" />
    </IconBase>
  ))
);

Gauge66RegularDuotone.displayName = 'Gauge66RegularDuotone';

// Triple export pattern
export { Gauge66RegularDuotone, Gauge66RegularDuotone as Gauge66RegularDuotoneIcon, Gauge66RegularDuotone as SiGauge66RegularDuotone };
export default Gauge66RegularDuotone;
export type { Gauge66RegularDuotoneProps };
