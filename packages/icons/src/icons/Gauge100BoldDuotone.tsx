import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge100BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Gauge100BoldDuotone = memo(
  forwardRef<SVGSVGElement, Gauge100BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-1.42-1.41 9 9 0 0 0 2.58-5.37H19a1 1 0 1 1 0-2h1.94a9 9 0 0 0-1.91-4.61l-1.38 1.37a1 1 0 0 1-1.41-1.41l1.37-1.38a9 9 0 0 0-4.6-1.9v1.94a1 1 0 1 1-2 0V4.52c-1.74.2-3.33.88-4.63 1.91l1.38 1.38a1 1 0 0 1-1.41 1.41L4.97 7.85a9 9 0 0 0-1.91 4.61H5a1 1 0 1 1 0 2H3.06c.19 1.74.87 3.32 1.9 4.62l1.38-1.37a1 1 0 1 1 1.41 1.41l-2.1 2.1-.01.02a1 1 0 0 1-1.49-.08A11 11 0 0 1 12 2.46" opacity={.4} />
        <path d="M10.59 12.05a2 2 0 0 1 2.82 0l.06.06c.33.38 1.42 1.84 2.39 3.14l1.74 2.36.11.15.04.05.06.09a1 1 0 0 1-1.45 1.32l-.02-.01-.04-.03-.16-.12-.57-.42-1.78-1.32a105 105 0 0 1-3.2-2.44 2 2 0 0 1 0-2.83" />
    </IconBase>
  ))
);

Gauge100BoldDuotone.displayName = 'Gauge100BoldDuotone';

// Triple export pattern (lucide-react style)
export { Gauge100BoldDuotone, Gauge100BoldDuotone as Gauge100BoldDuotoneIcon, Gauge100BoldDuotone as SiGauge100BoldDuotone };
export default Gauge100BoldDuotone;
export type { Gauge100BoldDuotoneProps };
