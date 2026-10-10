import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentBoldProps = Omit<IconBaseProps, 'children'>;

const LineSegmentBold = memo(
  forwardRef<SVGSVGElement, LineSegmentBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18 2c2.2 0 4 1.8 4 4s-1.8 4-4 4q-1.13-.01-2.03-.55l-6.52 6.52q.54.91.55 2.03c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4q1.13.01 2.03.55l6.52-6.52Q14.01 7.12 14 6c0-2.2 1.8-4 4-4M6 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M18 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentBold.displayName = 'LineSegmentBold';

// Triple export pattern
export { LineSegmentBold, LineSegmentBold as LineSegmentBoldIcon, LineSegmentBold as SiLineSegmentBold };
export default LineSegmentBold;
export type { LineSegmentBoldProps };
