import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RadarBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RadarBoldDuotone = memo(
  forwardRef<SVGSVGElement, RadarBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2a1 1 0 1 1 0 2 8 8 0 1 0 6.32 3.1l1.39-1.4.03-.03A10 10 0 1 1 12 2" opacity={0.4} />
        <path d="M12 6a1 1 0 1 1 0 2 4 4 0 1 0 3.44 1.97l1.45-1.45A6 6 0 1 1 12 6" opacity={0.4} />
        <path d="M18.3 4.3a1 1 0 1 1 1.4 1.4l-5.77 5.78a2 2 0 1 1-1.41-1.41z" />
    </IconBase>
  ))
);

RadarBoldDuotone.displayName = 'RadarBoldDuotone';

// Triple export pattern (lucide-react style)
export { RadarBoldDuotone, RadarBoldDuotone as RadarBoldDuotoneIcon, RadarBoldDuotone as SiRadarBoldDuotone };
export default RadarBoldDuotone;
export type { RadarBoldDuotoneProps };
