import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentVBoldProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVBold = memo(
  forwardRef<SVGSVGElement, LineSegmentVBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 0a4 4 0 0 1 1 7.87v8.26a4 4 0 1 1-2 0V7.87A4 4 0 0 1 12 0m0 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0-16a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentVBold.displayName = 'LineSegmentVBold';

// Triple export pattern (lucide-react style)
export { LineSegmentVBold, LineSegmentVBold as LineSegmentVBoldIcon, LineSegmentVBold as SiLineSegmentVBold };
export default LineSegmentVBold;
export type { LineSegmentVBoldProps };
