import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentHRegularProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHRegular = memo(
  forwardRef<SVGSVGElement, LineSegmentHRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20 8.25c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75c-1.81 0-3.33-1.29-3.67-3H7.67c-.34 1.71-1.86 3-3.67 3C1.93 15.75.25 14.07.25 12S1.93 8.25 4 8.25c1.81 0 3.33 1.29 3.67 3h8.66c.34-1.71 1.86-3 3.67-3M4 9.75c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25m16 0c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentHRegular.displayName = 'LineSegmentHRegular';

// Triple export pattern
export { LineSegmentHRegular, LineSegmentHRegular as LineSegmentHRegularIcon, LineSegmentHRegular as SiLineSegmentHRegular };
export default LineSegmentHRegular;
export type { LineSegmentHRegularProps };
