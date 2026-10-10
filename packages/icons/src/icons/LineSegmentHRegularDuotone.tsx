import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentHRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHRegularDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentHRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.33 11.25q-.08.37-.08.75t.08.75H7.67q.08-.37.08-.75t-.08-.75z" opacity={.4} />
        <path fillRule="evenodd" d="M4 8.25c2.07 0 3.75 1.68 3.75 3.75S6.07 15.75 4 15.75.25 14.07.25 12 1.93 8.25 4 8.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25M20 8.25c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75-3.75-1.68-3.75-3.75S17.93 8.25 20 8.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentHRegularDuotone.displayName = 'LineSegmentHRegularDuotone';

// Triple export pattern
export { LineSegmentHRegularDuotone, LineSegmentHRegularDuotone as LineSegmentHRegularDuotoneIcon, LineSegmentHRegularDuotone as SiLineSegmentHRegularDuotone };
export default LineSegmentHRegularDuotone;
export type { LineSegmentHRegularDuotoneProps };
