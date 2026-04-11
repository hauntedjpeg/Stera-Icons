import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentHFillProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHFill = memo(
  forwardRef<SVGSVGElement, LineSegmentHFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.5 8.63a3.37 3.37 0 1 1-3.26 4.24H7.76a3.38 3.38 0 1 1 0-1.74h8.48a3.4 3.4 0 0 1 3.26-2.5" />
    </IconBase>
  ))
);

LineSegmentHFill.displayName = 'LineSegmentHFill';

// Triple export pattern (lucide-react style)
export { LineSegmentHFill, LineSegmentHFill as LineSegmentHFillIcon, LineSegmentHFill as SiLineSegmentHFill };
export default LineSegmentHFill;
export type { LineSegmentHFillProps };
