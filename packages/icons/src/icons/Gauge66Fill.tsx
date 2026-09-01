import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge66FillProps = Omit<IconBaseProps, 'children'>;

const Gauge66Fill = memo(
  forwardRef<SVGSVGElement, Gauge66FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.9 2.6c5.3.43 9.53 4.66 9.96 9.97h-2.84a.88.88 0 0 0 0 1.75h2.84a10.8 10.8 0 0 1-3.15 6.82 1 1 0 0 1-.62.25H4.95a1 1 0 0 1-.62-.25 10.8 10.8 0 0 1-3.15-6.82h2.84a.88.88 0 0 0 0-1.75H1.18A11 11 0 0 1 3.74 6.4l2 2A.88.88 0 0 0 7 7.18L4.98 5.16a11 11 0 0 1 6.16-2.55v2.83a.88.88 0 0 0 1.75 0zm4.69 5.28a.9.9 0 0 0-1.14-.09l-.01.01-.05.03-.15.12-.58.42-1.78 1.32a106 106 0 0 0-3.19 2.43 1.88 1.88 0 1 0 2.7 2.6c.33-.38 1.41-1.83 2.38-3.14L17.1 9.8l.43-.57.11-.16.03-.04.01-.01a.9.9 0 0 0-.08-1.14" clipRule="evenodd" />
        <path d="M1.15 13.52v-.17z" />
    </IconBase>
  ))
);

Gauge66Fill.displayName = 'Gauge66Fill';

// Triple export pattern (lucide-react style)
export { Gauge66Fill, Gauge66Fill as Gauge66FillIcon, Gauge66Fill as SiGauge66Fill };
export default Gauge66Fill;
export type { Gauge66FillProps };
