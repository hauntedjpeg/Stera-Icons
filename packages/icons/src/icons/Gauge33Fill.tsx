import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge33FillProps = Omit<IconBaseProps, 'children'>;

const Gauge33Fill = memo(
  forwardRef<SVGSVGElement, Gauge33FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-.7.3H4.92a1 1 0 0 1-.7-.3A11 11 0 0 1 12 2.46M7.75 17.71a1 1 0 0 0-1.41 0l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41m9.91 0a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41zM7.64 7.7a1 1 0 0 0-1.4 1.4l.01.01.04.04.11.16.42.57 1.32 1.79c.97 1.3 2.06 2.76 2.4 3.14l.05.06A2 2 0 1 0 13.36 12c-.39-.33-1.84-1.42-3.15-2.4L7.86 7.88l-.16-.12-.04-.03zM3.5 12.46a1 1 0 0 0 0 2H5a1 1 0 0 0 0-2zm15.5 0a1 1 0 0 0 0 2h1.5a1 1 0 0 0 0-2zm-.29-5.71a1 1 0 0 0-1.41 0L16.24 7.8a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41M12 3.96a1 1 0 0 0-1 1v1.51a1 1 0 0 0 2 0v-1.5a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

Gauge33Fill.displayName = 'Gauge33Fill';

// Triple export pattern (lucide-react style)
export { Gauge33Fill, Gauge33Fill as Gauge33FillIcon, Gauge33Fill as SiGauge33Fill };
export default Gauge33Fill;
export type { Gauge33FillProps };
