import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentVFillProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVFill = memo(
  forwardRef<SVGSVGElement, LineSegmentVFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 .13a3.88 3.88 0 0 1 .88 7.64v8.46a3.88 3.88 0 1 1-1.76 0V7.77A3.88 3.88 0 0 1 12 .13" />
    </IconBase>
  ))
);

LineSegmentVFill.displayName = 'LineSegmentVFill';

// Triple export pattern (lucide-react style)
export { LineSegmentVFill, LineSegmentVFill as LineSegmentVFillIcon, LineSegmentVFill as SiLineSegmentVFill };
export default LineSegmentVFill;
export type { LineSegmentVFillProps };
