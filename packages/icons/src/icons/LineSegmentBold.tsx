import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentBoldProps = Omit<IconBaseProps, 'children'>;

const LineSegmentBold = memo(
  forwardRef<SVGSVGElement, LineSegmentBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18 2a4 4 0 1 1-2.03 7.45l-6.52 6.52q.54.91.55 2.03a4 4 0 1 1-1.97-3.45l6.52-6.52A4 4 0 0 1 18 2M6 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4M18 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentBold.displayName = 'LineSegmentBold';

// Triple export pattern (lucide-react style)
export { LineSegmentBold, LineSegmentBold as LineSegmentBoldIcon, LineSegmentBold as SiLineSegmentBold };
export default LineSegmentBold;
export type { LineSegmentBoldProps };
