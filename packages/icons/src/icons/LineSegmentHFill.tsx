import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentHFillProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHFill = memo(
  forwardRef<SVGSVGElement, LineSegmentHFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 8.13c2.14 0 3.88 1.73 3.88 3.87s-1.74 3.88-3.88 3.88c-1.84 0-3.38-1.29-3.77-3H7.77c-.4 1.71-1.93 3-3.77 3C1.86 15.88.13 14.14.13 12S1.86 8.13 4 8.13c1.84 0 3.38 1.28 3.77 3h8.46c.4-1.72 1.93-3 3.77-3" />
    </IconBase>
  ))
);

LineSegmentHFill.displayName = 'LineSegmentHFill';

// Triple export pattern
export { LineSegmentHFill, LineSegmentHFill as LineSegmentHFillIcon, LineSegmentHFill as SiLineSegmentHFill };
export default LineSegmentHFill;
export type { LineSegmentHFillProps };
