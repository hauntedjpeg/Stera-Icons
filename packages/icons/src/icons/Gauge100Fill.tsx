import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge100FillProps = Omit<IconBaseProps, 'children'>;

const Gauge100Fill = memo(
  forwardRef<SVGSVGElement, Gauge100FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.9 2.6c2.34.2 4.47 1.12 6.16 2.56l-2 2A.88.88 0 0 0 18.3 8.4l2-2a11 11 0 0 1 2.56 6.17h-2.84a.88.88 0 0 0 0 1.75h2.84a10.8 10.8 0 0 1-3.15 6.82 1 1 0 0 1-.62.25H4.95a1 1 0 0 1-.62-.25 10.8 10.8 0 0 1-3.15-6.82h2.84a.88.88 0 0 0 0-1.75H1.18A11 11 0 0 1 3.74 6.4l2 2A.88.88 0 0 0 7 7.18L4.98 5.16a11 11 0 0 1 6.16-2.55v2.83a.88.88 0 0 0 1.75 0zm.45 9.52a1.88 1.88 0 1 0-2.6 2.7 105 105 0 0 0 3.13 2.38l1.78 1.32.58.42.2.15.01.01a.88.88 0 0 0 1.22-1.22v-.02l-.04-.04-.11-.16-.43-.57-1.32-1.78c-.97-1.31-2.05-2.76-2.38-3.14z" clipRule="evenodd" />
        <path d="M1.15 13.52v-.17z" />
    </IconBase>
  ))
);

Gauge100Fill.displayName = 'Gauge100Fill';

// Triple export pattern (lucide-react style)
export { Gauge100Fill, Gauge100Fill as Gauge100FillIcon, Gauge100Fill as SiGauge100Fill };
export default Gauge100Fill;
export type { Gauge100FillProps };
