import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentHFillProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHFill = memo(
  forwardRef<SVGSVGElement, LineSegmentHFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 8.13a3.88 3.88 0 1 1-3.77 4.74H7.77a3.88 3.88 0 1 1 0-1.74h8.46c.4-1.72 1.93-3 3.77-3" />
    </IconBase>
  ))
);

LineSegmentHFill.displayName = 'LineSegmentHFill';

// Triple export pattern (lucide-react style)
export { LineSegmentHFill, LineSegmentHFill as LineSegmentHFillIcon, LineSegmentHFill as SiLineSegmentHFill };
export default LineSegmentHFill;
export type { LineSegmentHFillProps };
