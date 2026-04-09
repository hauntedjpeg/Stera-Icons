import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentVFillProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVFill = memo(
  forwardRef<SVGSVGElement, LineSegmentVFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="line-segment-v-fill" {...props}>
      <path d="M12 1.13a3.37 3.37 0 0 1 .88 6.63v8.48a3.38 3.38 0 1 1-1.76 0V7.76A3.38 3.38 0 0 1 12 1.13" />
    </IconBase>
  ))
);

LineSegmentVFill.displayName = 'LineSegmentVFill';

// Triple export pattern (lucide-react style)
export { LineSegmentVFill, LineSegmentVFill as LineSegmentVFillIcon, LineSegmentVFill as SiLineSegmentVFill };
export default LineSegmentVFill;
export type { LineSegmentVFillProps };
