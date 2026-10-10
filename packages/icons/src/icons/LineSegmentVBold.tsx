import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentVBoldProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVBold = memo(
  forwardRef<SVGSVGElement, LineSegmentVBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 0c2.2 0 4 1.8 4 4 0 1.86-1.27 3.43-3 3.87v8.26c1.73.44 3 2 3 3.87 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.86 1.27-3.43 3-3.87V7.87c-1.73-.44-3-2-3-3.87 0-2.2 1.8-4 4-4m0 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentVBold.displayName = 'LineSegmentVBold';

// Triple export pattern
export { LineSegmentVBold, LineSegmentVBold as LineSegmentVBoldIcon, LineSegmentVBold as SiLineSegmentVBold };
export default LineSegmentVBold;
export type { LineSegmentVBoldProps };
