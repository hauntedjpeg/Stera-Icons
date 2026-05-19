import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RadarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RadarFillDuotone = memo(
  forwardRef<SVGSVGElement, RadarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.47 9.77q.63.97.65 2.23a4.12 4.12 0 0 1-6.35 3.47z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.13a.88.88 0 0 1 0 1.75 8.13 8.13 0 1 0 6.33 3.03l-1.6 1.6A5.87 5.87 0 1 1 12 6.12a.88.88 0 0 1 0 1.76 4.13 4.13 0 0 0-3.47 6.35l9.85-9.85a.88.88 0 0 1 1.24 1.24l-.05.04A9.88 9.88 0 1 1 12 2.12M9.77 15.47q.97.63 2.23.65a4.12 4.12 0 0 0 3.47-6.35z" clipRule="evenodd" />
    </IconBase>
  ))
);

RadarFillDuotone.displayName = 'RadarFillDuotone';

// Triple export pattern (lucide-react style)
export { RadarFillDuotone, RadarFillDuotone as RadarFillDuotoneIcon, RadarFillDuotone as SiRadarFillDuotone };
export default RadarFillDuotone;
export type { RadarFillDuotoneProps };
