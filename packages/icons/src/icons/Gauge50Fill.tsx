import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge50FillProps = Omit<IconBaseProps, 'children'>;

const Gauge50Fill = memo(
  forwardRef<SVGSVGElement, Gauge50FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.59c2.69 0 5.15.98 7.04 2.6l-2 2a.88.88 0 0 0 1.24 1.23l2-2a11 11 0 0 1 2.56 6.17H20a.88.88 0 0 0 0 1.75h2.84a10.8 10.8 0 0 1-3.15 6.81 1 1 0 0 1-.62.26H4.93a1 1 0 0 1-.62-.26 10.8 10.8 0 0 1-3.15-6.81H4a.87.87 0 1 0 0-1.75H1.16a11 11 0 0 1 2.56-6.17l2 2A.88.88 0 0 0 6.98 7.2L4.96 5.18A10.8 10.8 0 0 1 12 2.58m0 3c-.43 0-.8.32-.87.74v.07l-.04.2-.43 2.9a105 105 0 0 0-.54 3.96 1.88 1.88 0 1 0 3.75-.06c-.04-.5-.3-2.3-.53-3.9l-.43-2.9-.04-.2v-.06a.9.9 0 0 0-.87-.75" clipRule="evenodd" />
        <path d="M1.13 13.54v-.17z" />
    </IconBase>
  ))
);

Gauge50Fill.displayName = 'Gauge50Fill';

// Triple export pattern (lucide-react style)
export { Gauge50Fill, Gauge50Fill as Gauge50FillIcon, Gauge50Fill as SiGauge50Fill };
export default Gauge50Fill;
export type { Gauge50FillProps };
