import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RadarRegularProps = Omit<IconBaseProps, 'children'>;

const RadarRegular = memo(
  forwardRef<SVGSVGElement, RadarRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25c.41 0 .75.34.75.75s-.34.75-.75.75c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25c0-2-.72-3.85-1.91-5.28L16.56 8.5c.75.97 1.19 2.18 1.19 3.5 0 3.18-2.57 5.75-5.75 5.75S6.25 15.18 6.25 12 8.82 6.25 12 6.25c.41 0 .75.34.75.75s-.34.75-.75.75c-2.35 0-4.25 1.9-4.25 4.25s1.9 4.25 4.25 4.25 4.25-1.9 4.25-4.25c0-.9-.28-1.74-.76-2.43l-1.84 1.84q.1.28.1.59c0 .97-.78 1.75-1.75 1.75s-1.75-.78-1.75-1.75.78-1.75 1.75-1.75q.3 0 .59.1l5.88-5.88c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-.13.13c1.46 1.7 2.35 3.92 2.35 6.34 0 5.38-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25" />
    </IconBase>
  ))
);

RadarRegular.displayName = 'RadarRegular';

// Triple export pattern
export { RadarRegular, RadarRegular as RadarRegularIcon, RadarRegular as SiRadarRegular };
export default RadarRegular;
export type { RadarRegularProps };
