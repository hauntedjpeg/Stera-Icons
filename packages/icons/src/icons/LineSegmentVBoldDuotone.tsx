import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentVBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVBoldDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentVBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 16.13q-.48-.13-1-.13t-1 .13V7.87q.48.13 1 .13t1-.13z" opacity={.4} />
        <path fillRule="evenodd" d="M12 16c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M12 0c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentVBoldDuotone.displayName = 'LineSegmentVBoldDuotone';

// Triple export pattern
export { LineSegmentVBoldDuotone, LineSegmentVBoldDuotone as LineSegmentVBoldDuotoneIcon, LineSegmentVBoldDuotone as SiLineSegmentVBoldDuotone };
export default LineSegmentVBoldDuotone;
export type { LineSegmentVBoldDuotoneProps };
