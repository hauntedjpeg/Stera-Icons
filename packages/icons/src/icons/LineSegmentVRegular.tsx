import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentVRegularProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVRegular = memo(
  forwardRef<SVGSVGElement, LineSegmentVRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 .25c2.07 0 3.75 1.68 3.75 3.75 0 1.81-1.29 3.33-3 3.67v8.65c1.71.35 3 1.87 3 3.68 0 2.07-1.68 3.75-3.75 3.75S8.25 22.07 8.25 20c0-1.81 1.29-3.33 3-3.68V7.67c-1.71-.34-3-1.86-3-3.67C8.25 1.93 9.93.25 12 .25m0 17.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25m0-16c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentVRegular.displayName = 'LineSegmentVRegular';

// Triple export pattern
export { LineSegmentVRegular, LineSegmentVRegular as LineSegmentVRegularIcon, LineSegmentVRegular as SiLineSegmentVRegular };
export default LineSegmentVRegular;
export type { LineSegmentVRegularProps };
