import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentVFillProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVFill = memo(
  forwardRef<SVGSVGElement, LineSegmentVFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 .13c2.14 0 3.88 1.73 3.88 3.87 0 1.84-1.29 3.38-3 3.77v8.46c1.71.4 3 1.93 3 3.77 0 2.14-1.74 3.88-3.88 3.88S8.13 22.14 8.13 20c0-1.84 1.28-3.38 3-3.77V7.77c-1.72-.4-3-1.93-3-3.77C8.13 1.86 9.86.13 12 .13" />
    </IconBase>
  ))
);

LineSegmentVFill.displayName = 'LineSegmentVFill';

// Triple export pattern
export { LineSegmentVFill, LineSegmentVFill as LineSegmentVFillIcon, LineSegmentVFill as SiLineSegmentVFill };
export default LineSegmentVFill;
export type { LineSegmentVFillProps };
