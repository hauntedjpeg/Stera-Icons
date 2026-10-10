import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge15RegularProps = Omit<IconBaseProps, 'children'>;

const Gauge15Regular = memo(
  forwardRef<SVGSVGElement, Gauge15RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.71c5.94 0 10.75 4.82 10.75 10.75 0 2.94-1.18 5.6-3.09 7.54l-.06.07q-.29.27-.67.2h-.02q-.13-.03-.25-.1l-.12-.1-.02-.02-2.1-2.1c-.29-.3-.29-.77 0-1.07.3-.29.77-.29 1.06 0l1.57 1.57c1.22-1.44 2-3.25 2.17-5.24H19c-.41 0-.75-.33-.75-.75 0-.41.34-.75.75-.75h2.22c-.16-1.99-.95-3.8-2.17-5.24l-1.57 1.58c-.3.29-.77.29-1.06 0-.3-.3-.3-.77 0-1.06l1.57-1.58c-1.44-1.21-3.25-2-5.24-2.16v2.22c0 .41-.33.75-.75.75-.4 0-.75-.34-.75-.75V4.25c-1.99.15-3.8.94-5.24 2.16L7.58 8c.3.29.3.76 0 1.06-.29.29-.76.29-1.06 0L4.95 7.47c-1.37 1.62-2.2 3.7-2.2 6 0 2.28.83 4.37 2.2 5.98l1.57-1.57c.29-.29.76-.29 1.06 0 .29.3.29.77 0 1.07l-2.1 2.1q-.02 0-.02.02-.11.1-.25.16l-.11.03-.03.01c-.24.05-.5-.02-.68-.2L4.34 21c-1.91-1.94-3.09-4.6-3.09-7.54C1.25 7.53 6.06 2.71 12 2.71" />
        <path d="M12 11.71c.97 0 1.75.79 1.75 1.75 0 .97-.78 1.75-1.75 1.75h-.06c-.5-.04-2.28-.3-3.9-.53l-2.19-.33-.7-.1-.2-.03-.06-.01-.14-.04c-.3-.1-.5-.38-.5-.7 0-.38.27-.7.64-.75h.07l.19-.04.7-.1c.59-.1 1.38-.21 2.2-.33 1.61-.24 3.4-.5 3.9-.53z" />
    </IconBase>
  ))
);

Gauge15Regular.displayName = 'Gauge15Regular';

// Triple export pattern
export { Gauge15Regular, Gauge15Regular as Gauge15RegularIcon, Gauge15Regular as SiGauge15Regular };
export default Gauge15Regular;
export type { Gauge15RegularProps };
