import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVFillDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.88 16.23q-.43-.1-.88-.1-.46 0-.87.1V7.77q.42.1.87.1.46 0 .88-.1z" opacity={.4} />
        <path d="M12 16.13c2.14 0 3.88 1.73 3.88 3.87s-1.74 3.88-3.88 3.88S8.13 22.14 8.13 20s1.73-3.87 3.87-3.87M12 .13c2.14 0 3.88 1.73 3.88 3.87S14.14 7.88 12 7.88 8.13 6.14 8.13 4 9.86.13 12 .13" />
    </IconBase>
  ))
);

LineSegmentVFillDuotone.displayName = 'LineSegmentVFillDuotone';

// Triple export pattern
export { LineSegmentVFillDuotone, LineSegmentVFillDuotone as LineSegmentVFillDuotoneIcon, LineSegmentVFillDuotone as SiLineSegmentVFillDuotone };
export default LineSegmentVFillDuotone;
export type { LineSegmentVFillDuotoneProps };
