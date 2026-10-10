import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentHBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHBoldDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentHBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.13 11q-.13.48-.13 1t.13 1H7.87q.13-.48.13-1t-.13-1z" opacity={.4} />
        <path fillRule="evenodd" d="M4 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M20 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentHBoldDuotone.displayName = 'LineSegmentHBoldDuotone';

// Triple export pattern
export { LineSegmentHBoldDuotone, LineSegmentHBoldDuotone as LineSegmentHBoldDuotoneIcon, LineSegmentHBoldDuotone as SiLineSegmentHBoldDuotone };
export default LineSegmentHBoldDuotone;
export type { LineSegmentHBoldDuotoneProps };
