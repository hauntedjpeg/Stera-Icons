import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentFillDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.71 8.05q.48.76 1.24 1.24l-6.66 6.66a4 4 0 0 0-1.24-1.24z" opacity={.4} />
        <path d="M6 14.13a3.88 3.88 0 1 1 0 7.75 3.88 3.88 0 0 1 0-7.75M18 2.13a3.88 3.88 0 1 1 0 7.75 3.88 3.88 0 0 1 0-7.76" />
    </IconBase>
  ))
);

LineSegmentFillDuotone.displayName = 'LineSegmentFillDuotone';

// Triple export pattern (lucide-react style)
export { LineSegmentFillDuotone, LineSegmentFillDuotone as LineSegmentFillDuotoneIcon, LineSegmentFillDuotone as SiLineSegmentFillDuotone };
export default LineSegmentFillDuotone;
export type { LineSegmentFillDuotoneProps };
