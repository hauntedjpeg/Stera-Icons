import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentVRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVRegularDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentVRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 16.32q-.37-.07-.75-.07t-.75.07V7.67q.37.08.75.08t.75-.08z" opacity={.4} />
        <path fillRule="evenodd" d="M12 16.25c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75S8.25 22.07 8.25 20s1.68-3.75 3.75-3.75m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25M12 .25c2.07 0 3.75 1.68 3.75 3.75S14.07 7.75 12 7.75 8.25 6.07 8.25 4 9.93.25 12 .25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentVRegularDuotone.displayName = 'LineSegmentVRegularDuotone';

// Triple export pattern
export { LineSegmentVRegularDuotone, LineSegmentVRegularDuotone as LineSegmentVRegularDuotoneIcon, LineSegmentVRegularDuotone as SiLineSegmentVRegularDuotone };
export default LineSegmentVRegularDuotone;
export type { LineSegmentVRegularDuotoneProps };
