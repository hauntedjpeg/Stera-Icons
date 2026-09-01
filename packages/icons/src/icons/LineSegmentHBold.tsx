import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentHBoldProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHBold = memo(
  forwardRef<SVGSVGElement, LineSegmentHBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20 8a4 4 0 1 1-3.87 5H7.87a4 4 0 1 1 0-2h8.26A4 4 0 0 1 20 8M4 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m16 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentHBold.displayName = 'LineSegmentHBold';

// Triple export pattern (lucide-react style)
export { LineSegmentHBold, LineSegmentHBold as LineSegmentHBoldIcon, LineSegmentHBold as SiLineSegmentHBold };
export default LineSegmentHBold;
export type { LineSegmentHBoldProps };
