import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentFillProps = Omit<IconBaseProps, 'children'>;

const LineSegmentFill = memo(
  forwardRef<SVGSVGElement, LineSegmentFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 2.13a3.88 3.88 0 1 1-2.05 7.16l-6.66 6.66q.57.91.59 2.05a3.88 3.88 0 1 1-1.83-3.29l6.66-6.66q-.57-.91-.59-2.05A3.9 3.9 0 0 1 18 2.13" />
    </IconBase>
  ))
);

LineSegmentFill.displayName = 'LineSegmentFill';

// Triple export pattern (lucide-react style)
export { LineSegmentFill, LineSegmentFill as LineSegmentFillIcon, LineSegmentFill as SiLineSegmentFill };
export default LineSegmentFill;
export type { LineSegmentFillProps };
