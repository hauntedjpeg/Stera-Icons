import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RadarBoldProps = Omit<IconBaseProps, 'children'>;

const RadarBold = memo(
  forwardRef<SVGSVGElement, RadarBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2a1 1 0 1 1 0 2 8 8 0 1 0 6.32 3.1l-1.43 1.42A6 6 0 1 1 12 6a1 1 0 1 1 0 2 4 4 0 1 0 3.45 1.97l-1.52 1.51A2 2 0 1 1 10 12a2 2 0 0 1 2.52-1.93l5.77-5.78a1 1 0 0 1 1.45 1.38A10 10 0 1 1 12 2" />
    </IconBase>
  ))
);

RadarBold.displayName = 'RadarBold';

// Triple export pattern (lucide-react style)
export { RadarBold, RadarBold as RadarBoldIcon, RadarBold as SiRadarBold };
export default RadarBold;
export type { RadarBoldProps };
