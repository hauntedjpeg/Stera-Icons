import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentVRegularProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVRegular = memo(
  forwardRef<SVGSVGElement, LineSegmentVRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 .25a3.75 3.75 0 0 1 .75 7.42v8.65a3.75 3.75 0 1 1-1.5 0V7.67A3.75 3.75 0 0 1 12 .25m0 17.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m0-16a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentVRegular.displayName = 'LineSegmentVRegular';

// Triple export pattern (lucide-react style)
export { LineSegmentVRegular, LineSegmentVRegular as LineSegmentVRegularIcon, LineSegmentVRegular as SiLineSegmentVRegular };
export default LineSegmentVRegular;
export type { LineSegmentVRegularProps };
