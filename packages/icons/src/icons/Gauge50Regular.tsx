import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge50RegularProps = Omit<IconBaseProps, 'children'>;

const Gauge50Regular = memo(
  forwardRef<SVGSVGElement, Gauge50RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.71c5.94 0 10.75 4.82 10.75 10.75 0 2.94-1.18 5.6-3.09 7.54l-.06.07q-.29.27-.67.2h-.02q-.13-.03-.25-.1l-.12-.1-.02-.02-2.1-2.1c-.29-.3-.29-.77 0-1.07.3-.29.77-.29 1.06 0l1.57 1.57c1.22-1.44 2-3.25 2.17-5.24H19c-.41 0-.75-.33-.75-.75 0-.41.34-.75.75-.75h2.22c-.16-1.99-.95-3.8-2.17-5.24l-1.57 1.58c-.3.29-.77.29-1.06 0-.3-.3-.3-.77 0-1.06l1.57-1.58c-1.62-1.37-3.7-2.2-5.99-2.2-2.28 0-4.37.83-5.99 2.2L7.58 8c.3.29.3.76 0 1.06-.29.29-.76.29-1.06 0L4.95 7.47c-1.22 1.44-2 3.25-2.17 5.24H5c.41 0 .75.34.75.75 0 .42-.34.75-.75.75H2.78c.16 2 .95 3.8 2.17 5.24l1.57-1.57c.29-.29.76-.29 1.06 0 .29.3.29.77 0 1.07l-2.1 2.1q-.02 0-.02.02-.11.1-.25.16l-.11.03-.03.01c-.24.05-.5-.02-.68-.2L4.34 21c-1.91-1.94-3.09-4.6-3.09-7.54C1.25 7.53 6.06 2.71 12 2.71" />
        <path d="M12 5.71c.37 0 .69.27.74.64l.01.07.03.2.1.7.34 2.19c.23 1.62.49 3.4.53 3.9v.05c0 .97-.78 1.75-1.75 1.75s-1.75-.78-1.75-1.75v-.05c.04-.5.3-2.28.53-3.9l.33-2.2.1-.7.04-.2v-.05l.04-.14c.1-.3.39-.5.71-.5" />
    </IconBase>
  ))
);

Gauge50Regular.displayName = 'Gauge50Regular';

// Triple export pattern
export { Gauge50Regular, Gauge50Regular as Gauge50RegularIcon, Gauge50Regular as SiGauge50Regular };
export default Gauge50Regular;
export type { Gauge50RegularProps };
