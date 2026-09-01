import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge33FillProps = Omit<IconBaseProps, 'children'>;

const Gauge33Fill = memo(
  forwardRef<SVGSVGElement, Gauge33FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.88 2.6c2.34.2 4.47 1.12 6.16 2.56l-2 2a.88.88 0 0 0 1.24 1.24l2-2a11 11 0 0 1 2.56 6.17H20a.88.88 0 0 0 0 1.75h2.84a10.8 10.8 0 0 1-3.15 6.82 1 1 0 0 1-.62.25H4.93a1 1 0 0 1-.62-.25 10.8 10.8 0 0 1-3.15-6.82H4a.88.88 0 0 0 0-1.75H1.16c.43-5.3 4.66-9.54 9.97-9.96v2.83a.88.88 0 0 0 1.74 0zM7.57 7.8A.88.88 0 0 0 6.35 9v.02l.04.04.11.16.42.57 1.32 1.78a105 105 0 0 0 2.43 3.2 1.88 1.88 0 1 0 2.6-2.7 106 106 0 0 0-3.13-2.39L8.36 8.37l-.58-.42-.16-.12-.04-.03z" clipRule="evenodd" />
        <path d="M1.13 13.52v-.17z" />
    </IconBase>
  ))
);

Gauge33Fill.displayName = 'Gauge33Fill';

// Triple export pattern (lucide-react style)
export { Gauge33Fill, Gauge33Fill as Gauge33FillIcon, Gauge33Fill as SiGauge33Fill };
export default Gauge33Fill;
export type { Gauge33FillProps };
