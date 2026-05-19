import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RadarRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RadarRegularDuotone = memo(
  forwardRef<SVGSVGElement, RadarRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25a.75.75 0 0 1 0 1.5 8.25 8.25 0 1 0 6.34 2.97l1.06-1.06a9.75 9.75 0 1 1-7.4-3.4" opacity={0.4} />
        <path d="M12 6.25a.75.75 0 0 1 0 1.5 4.25 4.25 0 1 0 3.49 1.82l1.07-1.07A5.75 5.75 0 1 1 12 6.25" opacity={0.4} />
        <path d="M18.47 4.47a.75.75 0 1 1 1.06 1.06l-5.88 5.88A1.74 1.74 0 0 1 12 13.75a1.75 1.75 0 1 1 .59-3.4z" />
    </IconBase>
  ))
);

RadarRegularDuotone.displayName = 'RadarRegularDuotone';

// Triple export pattern (lucide-react style)
export { RadarRegularDuotone, RadarRegularDuotone as RadarRegularDuotoneIcon, RadarRegularDuotone as SiRadarRegularDuotone };
export default RadarRegularDuotone;
export type { RadarRegularDuotoneProps };
