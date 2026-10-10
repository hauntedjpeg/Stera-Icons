import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RadarRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RadarRegularDuotone = memo(
  forwardRef<SVGSVGElement, RadarRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25c.41 0 .75.34.75.75s-.34.75-.75.75c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25c0-2-.72-3.85-1.91-5.28l1.06-1.06c1.46 1.7 2.35 3.92 2.35 6.34 0 5.38-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25" opacity={0.4} />
        <path d="M12 6.25c.41 0 .75.34.75.75s-.34.75-.75.75c-2.35 0-4.25 1.9-4.25 4.25s1.9 4.25 4.25 4.25 4.25-1.9 4.25-4.25c0-.9-.28-1.74-.76-2.43l1.07-1.07c.75.97 1.19 2.18 1.19 3.5 0 3.18-2.57 5.75-5.75 5.75S6.25 15.18 6.25 12 8.82 6.25 12 6.25" opacity={0.4} />
        <path d="M18.47 4.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-5.88 5.88q.1.28.1.59c0 .97-.78 1.75-1.75 1.75s-1.75-.78-1.75-1.75.78-1.75 1.75-1.75q.3 0 .59.1z" />
    </IconBase>
  ))
);

RadarRegularDuotone.displayName = 'RadarRegularDuotone';

// Triple export pattern
export { RadarRegularDuotone, RadarRegularDuotone as RadarRegularDuotoneIcon, RadarRegularDuotone as SiRadarRegularDuotone };
export default RadarRegularDuotone;
export type { RadarRegularDuotoneProps };
