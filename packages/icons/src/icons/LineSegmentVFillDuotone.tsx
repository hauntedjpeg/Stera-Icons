import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVFillDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.88 16.23a4 4 0 0 0-1.76 0V7.77a4 4 0 0 0 1.76 0z" opacity={.4} />
        <path d="M12 16.13a3.88 3.88 0 1 1 0 7.75 3.88 3.88 0 0 1 0-7.75M12 .13a3.88 3.88 0 1 1 0 7.75 3.88 3.88 0 0 1 0-7.75" />
    </IconBase>
  ))
);

LineSegmentVFillDuotone.displayName = 'LineSegmentVFillDuotone';

// Triple export pattern (lucide-react style)
export { LineSegmentVFillDuotone, LineSegmentVFillDuotone as LineSegmentVFillDuotoneIcon, LineSegmentVFillDuotone as SiLineSegmentVFillDuotone };
export default LineSegmentVFillDuotone;
export type { LineSegmentVFillDuotoneProps };
