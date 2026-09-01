import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentHRegularProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHRegular = memo(
  forwardRef<SVGSVGElement, LineSegmentHRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20 8.25a3.75 3.75 0 1 1-3.67 4.5H7.67a3.75 3.75 0 1 1 0-1.5h8.66c.34-1.71 1.86-3 3.67-3M4 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m16 0a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentHRegular.displayName = 'LineSegmentHRegular';

// Triple export pattern (lucide-react style)
export { LineSegmentHRegular, LineSegmentHRegular as LineSegmentHRegularIcon, LineSegmentHRegular as SiLineSegmentHRegular };
export default LineSegmentHRegular;
export type { LineSegmentHRegularProps };
