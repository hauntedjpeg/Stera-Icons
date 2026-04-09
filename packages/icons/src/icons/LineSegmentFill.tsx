import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentFillProps = Omit<IconBaseProps, 'children'>;

const LineSegmentFill = memo(
  forwardRef<SVGSVGElement, LineSegmentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="line-segment-fill" {...props}>
      <path d="M18.5 2.13a3.37 3.37 0 1 1-1.69 6.3L8.42 16.8q.45.76.46 1.69a3.37 3.37 0 1 1-1.7-2.92l8.4-8.4a3.37 3.37 0 0 1 2.92-5.06" />
    </IconBase>
  ))
);

LineSegmentFill.displayName = 'LineSegmentFill';

// Triple export pattern (lucide-react style)
export { LineSegmentFill, LineSegmentFill as LineSegmentFillIcon, LineSegmentFill as SiLineSegmentFill };
export default LineSegmentFill;
export type { LineSegmentFillProps };
