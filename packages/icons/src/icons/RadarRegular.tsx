import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RadarRegularProps = Omit<IconBaseProps, 'children'>;

const RadarRegular = memo(
  forwardRef<SVGSVGElement, RadarRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25a.75.75 0 0 1 0 1.5 8.25 8.25 0 1 0 6.34 2.97L16.56 8.5A5.75 5.75 0 1 1 12 6.25a.75.75 0 0 1 0 1.5 4.25 4.25 0 1 0 3.49 1.82l-1.84 1.84A1.74 1.74 0 0 1 12 13.75a1.75 1.75 0 1 1 .59-3.4l5.88-5.88a.75.75 0 1 1 1.06 1.06l-.13.13a9.75 9.75 0 1 1-7.4-3.4" />
    </IconBase>
  ))
);

RadarRegular.displayName = 'RadarRegular';

// Triple export pattern (lucide-react style)
export { RadarRegular, RadarRegular as RadarRegularIcon, RadarRegular as SiRadarRegular };
export default RadarRegular;
export type { RadarRegularProps };
