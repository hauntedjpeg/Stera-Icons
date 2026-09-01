import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge15FillProps = Omit<IconBaseProps, 'children'>;

const Gauge15Fill = memo(
  forwardRef<SVGSVGElement, Gauge15FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.88 2.6c2.34.2 4.47 1.12 6.16 2.56l-2 2a.88.88 0 0 0 1.24 1.24l2-2a11 11 0 0 1 2.56 6.17H20a.88.88 0 0 0 0 1.75h2.84a10.8 10.8 0 0 1-3.15 6.82 1 1 0 0 1-.62.25H4.93a1 1 0 0 1-.62-.25A10.84 10.84 0 0 1 3.72 6.4l2 2a.88.88 0 0 0 1.25-1.23L4.96 5.16a11 11 0 0 1 6.17-2.55v2.83a.88.88 0 0 0 1.74 0zm-.95 8.97a696.57 696.57 0 0 0-6.8.97l-.2.03H4.9l-.02.01a.88.88 0 0 0 0 1.73h.02l.05.01.2.03 2.89.43a105 105 0 0 0 3.97.54 1.88 1.88 0 1 0-.07-3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

Gauge15Fill.displayName = 'Gauge15Fill';

// Triple export pattern (lucide-react style)
export { Gauge15Fill, Gauge15Fill as Gauge15FillIcon, Gauge15Fill as SiGauge15Fill };
export default Gauge15Fill;
export type { Gauge15FillProps };
