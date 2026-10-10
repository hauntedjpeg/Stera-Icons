import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RadarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RadarFillDuotone = memo(
  forwardRef<SVGSVGElement, RadarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.47 9.77q.63.97.65 2.23c0 2.28-1.84 4.13-4.12 4.13-.82 0-1.59-.25-2.23-.66z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.13c.48 0 .88.39.88.87s-.4.88-.88.88C7.51 3.88 3.88 7.5 3.88 12S7.5 20.13 12 20.13s8.13-3.64 8.13-8.13c0-1.93-.68-3.7-1.8-5.1l-1.6 1.61c.72.98 1.14 2.18 1.14 3.49 0 3.24-2.63 5.88-5.87 5.88-1.62 0-3.1-.66-4.15-1.73C6.78 15.1 6.13 13.62 6.13 12c0-3.24 2.63-5.87 5.87-5.87.48 0 .88.39.88.87s-.4.88-.88.88c-2.28 0-4.12 1.84-4.12 4.12q.02 1.25.65 2.23l9.85-9.85c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-.05.04c1.44 1.72 2.3 3.93 2.3 6.34 0 5.45-4.42 9.88-9.87 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13M9.77 15.47q.97.63 2.23.65c2.28 0 4.13-1.84 4.13-4.12 0-.82-.25-1.59-.66-2.23z" clipRule="evenodd" />
    </IconBase>
  ))
);

RadarFillDuotone.displayName = 'RadarFillDuotone';

// Triple export pattern
export { RadarFillDuotone, RadarFillDuotone as RadarFillDuotoneIcon, RadarFillDuotone as SiRadarFillDuotone };
export default RadarFillDuotone;
export type { RadarFillDuotoneProps };
