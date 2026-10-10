import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RadarBoldProps = Omit<IconBaseProps, 'children'>;

const RadarBold = memo(
  forwardRef<SVGSVGElement, RadarBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2c.55 0 1 .45 1 1s-.45 1-1 1c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8c0-1.85-.63-3.55-1.68-4.9l-1.43 1.42C17.59 9.51 18 10.7 18 12c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6c.55 0 1 .45 1 1s-.45 1-1 1c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4q-.01-1.13-.55-2.03l-1.52 1.51q.06.25.07.52c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2q.27 0 .52.07l5.77-5.78c.4-.39 1.03-.39 1.42 0 .38.38.39.99.03 1.38C21.15 7.39 22 9.6 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2" />
    </IconBase>
  ))
);

RadarBold.displayName = 'RadarBold';

// Triple export pattern
export { RadarBold, RadarBold as RadarBoldIcon, RadarBold as SiRadarBold };
export default RadarBold;
export type { RadarBoldProps };
