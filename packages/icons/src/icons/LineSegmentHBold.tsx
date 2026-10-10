import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentHBoldProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHBold = memo(
  forwardRef<SVGSVGElement, LineSegmentHBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20 8c2.2 0 4 1.8 4 4s-1.8 4-4 4c-1.86 0-3.43-1.27-3.87-3H7.87c-.44 1.73-2 3-3.87 3-2.2 0-4-1.8-4-4s1.8-4 4-4c1.86 0 3.43 1.27 3.87 3h8.26c.44-1.73 2-3 3.87-3M4 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m16 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentHBold.displayName = 'LineSegmentHBold';

// Triple export pattern
export { LineSegmentHBold, LineSegmentHBold as LineSegmentHBoldIcon, LineSegmentHBold as SiLineSegmentHBold };
export default LineSegmentHBold;
export type { LineSegmentHBoldProps };
