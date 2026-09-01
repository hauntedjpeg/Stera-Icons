import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge0FillProps = Omit<IconBaseProps, 'children'>;

const Gauge0Fill = memo(
  forwardRef<SVGSVGElement, Gauge0FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.88 2.6c2.34.2 4.47 1.12 6.16 2.56l-2 2a.88.88 0 0 0 1.24 1.24l2-2a11 11 0 0 1 2.56 6.17H20a.88.88 0 0 0 0 1.75h2.84a10.8 10.8 0 0 1-3.15 6.82 1 1 0 0 1-.62.25H4.93a1 1 0 0 1-.62-.25 10.8 10.8 0 0 1-3.15-6.82H4a.88.88 0 0 0 0-1.75H1.16A11 11 0 0 1 3.72 6.4l2 2a.88.88 0 0 0 1.25-1.23L4.96 5.16a11 11 0 0 1 6.17-2.55v2.83a.88.88 0 0 0 1.74 0zm.45 9.52a1.87 1.87 0 0 0-2.7.05c-.33.38-1.41 1.83-2.38 3.14l-1.33 1.78-.42.57-.11.16-.03.04-.01.01a.88.88 0 0 0 1.22 1.23l.01-.01.04-.03.16-.12.58-.42 1.78-1.32a106 106 0 0 0 3.19-2.43c.73-.73.73-1.92 0-2.65" clipRule="evenodd" />
        <path d="M1.13 13.52v-.17z" />
    </IconBase>
  ))
);

Gauge0Fill.displayName = 'Gauge0Fill';

// Triple export pattern (lucide-react style)
export { Gauge0Fill, Gauge0Fill as Gauge0FillIcon, Gauge0Fill as SiGauge0Fill };
export default Gauge0Fill;
export type { Gauge0FillProps };
