import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentFillProps = Omit<IconBaseProps, 'children'>;

const LineSegmentFill = memo(
  forwardRef<SVGSVGElement, LineSegmentFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 2.13c2.14 0 3.88 1.73 3.88 3.87S20.14 9.88 18 9.88q-1.14-.02-2.05-.6l-6.66 6.67q.57.91.59 2.05c0 2.14-1.74 3.88-3.88 3.88S2.13 20.14 2.13 18 3.86 14.13 6 14.13q1.14.01 2.05.58l6.66-6.66q-.57-.91-.59-2.05c0-2.14 1.74-3.87 3.88-3.87" />
    </IconBase>
  ))
);

LineSegmentFill.displayName = 'LineSegmentFill';

// Triple export pattern
export { LineSegmentFill, LineSegmentFill as LineSegmentFillIcon, LineSegmentFill as SiLineSegmentFill };
export default LineSegmentFill;
export type { LineSegmentFillProps };
