import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RadarFillProps = Omit<IconBaseProps, 'children'>;

const RadarFill = memo(
  forwardRef<SVGSVGElement, RadarFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13a.88.88 0 0 1 0 1.75 8.13 8.13 0 1 0 6.33 3.03l-1.6 1.6A5.87 5.87 0 1 1 12 6.12a.88.88 0 0 1 0 1.76 4.13 4.13 0 0 0-3.47 6.35l9.85-9.85a.88.88 0 0 1 1.24 1.24l-.05.04A9.88 9.88 0 1 1 12 2.12" />
    </IconBase>
  ))
);

RadarFill.displayName = 'RadarFill';

// Triple export pattern (lucide-react style)
export { RadarFill, RadarFill as RadarFillIcon, RadarFill as SiRadarFill };
export default RadarFill;
export type { RadarFillProps };
