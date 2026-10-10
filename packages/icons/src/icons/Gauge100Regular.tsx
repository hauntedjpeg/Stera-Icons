import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge100RegularProps = Omit<IconBaseProps, 'children'>;

const Gauge100Regular = memo(
  forwardRef<SVGSVGElement, Gauge100RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.71c5.94 0 10.75 4.82 10.75 10.75 0 2.97-1.2 5.66-3.15 7.6-.3.3-.77.3-1.06 0-.3-.29-.3-.76 0-1.06 1.51-1.5 2.5-3.53 2.68-5.79H19c-.41 0-.75-.33-.75-.75 0-.41.34-.75.75-.75h2.22c-.16-1.99-.95-3.8-2.17-5.24l-1.57 1.58c-.3.29-.77.29-1.06 0-.3-.3-.3-.77 0-1.06l1.57-1.58c-1.44-1.21-3.25-2-5.24-2.16v2.22c0 .41-.33.75-.75.75-.4 0-.75-.34-.75-.75V4.25c-1.99.15-3.8.94-5.24 2.16L7.58 8c.3.29.3.76 0 1.06-.29.29-.76.29-1.06 0L4.95 7.47c-1.22 1.44-2 3.25-2.17 5.24H5c.41 0 .75.34.75.75 0 .42-.34.75-.75.75H2.78c.16 2 .95 3.8 2.17 5.24l1.57-1.57c.29-.29.76-.29 1.06 0 .29.3.29.77 0 1.07l-2.1 2.1-.02.02q-.17.15-.39.2c-.24.05-.5-.02-.68-.2L4.34 21c-1.91-1.94-3.09-4.6-3.09-7.54C1.25 7.53 6.06 2.71 12 2.71" />
        <path d="M10.76 12.23c.69-.69 1.8-.69 2.48 0l.04.04c.32.38 1.4 1.82 2.38 3.13l1.31 1.78.43.57.11.16.04.05.07.13c.14.28.09.62-.14.85-.26.27-.68.3-.97.08l-.06-.04-.16-.12-.57-.42-1.78-1.32c-1.31-.98-2.76-2.06-3.14-2.38l-.04-.04c-.68-.68-.68-1.79 0-2.47" />
    </IconBase>
  ))
);

Gauge100Regular.displayName = 'Gauge100Regular';

// Triple export pattern
export { Gauge100Regular, Gauge100Regular as Gauge100RegularIcon, Gauge100Regular as SiGauge100Regular };
export default Gauge100Regular;
export type { Gauge100RegularProps };
