import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentFillDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.71 8.05q.48.76 1.24 1.24l-6.66 6.66q-.48-.76-1.24-1.24z" opacity={.4} />
        <path d="M6 14.13c2.14 0 3.88 1.73 3.88 3.87S8.14 21.88 6 21.88 2.13 20.14 2.13 18 3.86 14.13 6 14.13M18 2.13c2.14 0 3.88 1.73 3.88 3.87S20.14 9.88 18 9.88 14.13 8.14 14.13 6 15.86 2.13 18 2.13" />
    </IconBase>
  ))
);

LineSegmentFillDuotone.displayName = 'LineSegmentFillDuotone';

// Triple export pattern
export { LineSegmentFillDuotone, LineSegmentFillDuotone as LineSegmentFillDuotoneIcon, LineSegmentFillDuotone as SiLineSegmentFillDuotone };
export default LineSegmentFillDuotone;
export type { LineSegmentFillDuotoneProps };
