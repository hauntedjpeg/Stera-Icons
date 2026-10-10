import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge0RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Gauge0RegularDuotone = memo(
  forwardRef<SVGSVGElement, Gauge0RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.71c5.94 0 10.75 4.82 10.75 10.75 0 2.94-1.18 5.6-3.09 7.54l-.06.07q-.29.27-.67.2h-.02q-.13-.03-.25-.1l-.12-.1-.02-.02-2.1-2.1c-.29-.3-.29-.77 0-1.07.3-.29.77-.29 1.06 0l1.57 1.57c1.22-1.44 2-3.25 2.17-5.24H19c-.41 0-.75-.33-.75-.75 0-.41.34-.75.75-.75h2.22c-.16-1.99-.95-3.8-2.17-5.24l-1.57 1.58c-.3.29-.77.29-1.06 0-.3-.3-.3-.77 0-1.06l1.57-1.58c-1.44-1.21-3.25-2-5.24-2.16v2.22c0 .41-.33.75-.75.75-.4 0-.75-.34-.75-.75V4.25c-1.99.15-3.8.94-5.24 2.16L7.58 8c.3.29.3.76 0 1.06-.29.29-.76.29-1.06 0L4.95 7.47c-1.22 1.44-2 3.25-2.17 5.24H5c.41 0 .75.34.75.75 0 .42-.34.75-.75.75H2.78c.18 2.26 1.17 4.29 2.68 5.8.3.29.3.76 0 1.06-.3.29-.77.29-1.06 0-1.95-1.95-3.15-4.64-3.15-7.6C1.25 7.52 6.06 2.7 12 2.7" opacity={.4} />
        <path d="M10.76 12.23c.69-.69 1.8-.69 2.48 0s.68 1.79 0 2.47l-.04.04c-.38.32-1.82 1.4-3.14 2.38l-1.78 1.32-.57.42-.16.12-.05.03-.12.08c-.29.14-.63.08-.86-.15-.26-.26-.3-.67-.07-.97l.04-.06.11-.16.43-.57 1.31-1.78c.98-1.31 2.06-2.76 2.38-3.13z" />
    </IconBase>
  ))
);

Gauge0RegularDuotone.displayName = 'Gauge0RegularDuotone';

// Triple export pattern
export { Gauge0RegularDuotone, Gauge0RegularDuotone as Gauge0RegularDuotoneIcon, Gauge0RegularDuotone as SiGauge0RegularDuotone };
export default Gauge0RegularDuotone;
export type { Gauge0RegularDuotoneProps };
