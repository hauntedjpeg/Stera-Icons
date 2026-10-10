import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentHFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHFillDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentHFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.2 11.25q-.07.37-.07.75t.07.75H7.8q.08-.37.08-.75t-.08-.75z" opacity={.4} />
        <path d="M4 8.13c2.14 0 3.88 1.73 3.88 3.87S6.14 15.88 4 15.88.13 14.14.13 12 1.86 8.13 4 8.13M20 8.13c2.14 0 3.88 1.73 3.88 3.87s-1.74 3.88-3.88 3.88-3.87-1.74-3.87-3.88S17.86 8.13 20 8.13" />
    </IconBase>
  ))
);

LineSegmentHFillDuotone.displayName = 'LineSegmentHFillDuotone';

// Triple export pattern
export { LineSegmentHFillDuotone, LineSegmentHFillDuotone as LineSegmentHFillDuotoneIcon, LineSegmentHFillDuotone as SiLineSegmentHFillDuotone };
export default LineSegmentHFillDuotone;
export type { LineSegmentHFillDuotoneProps };
