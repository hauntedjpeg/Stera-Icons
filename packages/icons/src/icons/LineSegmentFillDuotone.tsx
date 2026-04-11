import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentFillDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.58 7.18q.46.8 1.23 1.24l-8.39 8.4q-.46-.8-1.24-1.24z" opacity={.4} />
        <path d="M5.5 15.13a3.37 3.37 0 1 1 0 6.74 3.37 3.37 0 0 1 0-6.75M18.5 2.13a3.37 3.37 0 1 1 0 6.74 3.37 3.37 0 0 1 0-6.74" />
    </IconBase>
  ))
);

LineSegmentFillDuotone.displayName = 'LineSegmentFillDuotone';

// Triple export pattern (lucide-react style)
export { LineSegmentFillDuotone, LineSegmentFillDuotone as LineSegmentFillDuotoneIcon, LineSegmentFillDuotone as SiLineSegmentFillDuotone };
export default LineSegmentFillDuotone;
export type { LineSegmentFillDuotoneProps };
