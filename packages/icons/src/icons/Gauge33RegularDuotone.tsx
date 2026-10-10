import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge33RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Gauge33RegularDuotone = memo(
  forwardRef<SVGSVGElement, Gauge33RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.71c5.94 0 10.75 4.82 10.75 10.75 0 2.94-1.18 5.6-3.09 7.54l-.06.07q-.29.27-.67.2-.22-.05-.39-.2l-.02-.03-2.1-2.1c-.29-.29-.29-.76 0-1.06.3-.29.77-.29 1.06 0l1.57 1.57c1.22-1.44 2-3.25 2.17-5.24H19c-.41 0-.75-.33-.75-.75 0-.41.34-.75.75-.75h2.22c-.16-1.99-.95-3.8-2.17-5.24l-1.57 1.58c-.3.29-.77.29-1.06 0-.3-.3-.3-.77 0-1.06l1.57-1.58c-1.44-1.21-3.25-2-5.24-2.16v2.22c0 .41-.33.75-.75.75-.4 0-.75-.34-.75-.75V4.25c-4.5.36-8.1 3.95-8.47 8.46H5c.41 0 .75.34.75.75 0 .42-.34.75-.75.75H2.78c.16 2 .95 3.8 2.17 5.24l1.57-1.57c.29-.29.76-.29 1.06 0 .29.3.29.77 0 1.07l-2.1 2.1-.02.02q-.17.15-.39.2c-.24.05-.5-.02-.68-.2L4.34 21c-1.91-1.94-3.09-4.6-3.09-7.54C1.25 7.53 6.06 2.71 12 2.71" opacity={.4} />
        <path d="M6.52 7.98c.26-.26.68-.29.97-.07l.06.04.16.12.57.42 1.78 1.32c1.31.97 2.76 2.05 3.14 2.38l.04.04c.68.68.68 1.79 0 2.47s-1.8.68-2.48 0l-.04-.04c-.32-.38-1.4-1.82-2.38-3.13L7.03 9.74l-.43-.57-.11-.16-.04-.05-.07-.12c-.14-.28-.09-.63.14-.86" />
    </IconBase>
  ))
);

Gauge33RegularDuotone.displayName = 'Gauge33RegularDuotone';

// Triple export pattern
export { Gauge33RegularDuotone, Gauge33RegularDuotone as Gauge33RegularDuotoneIcon, Gauge33RegularDuotone as SiGauge33RegularDuotone };
export default Gauge33RegularDuotone;
export type { Gauge33RegularDuotoneProps };
