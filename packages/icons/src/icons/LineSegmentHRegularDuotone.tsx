import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentHRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHRegularDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentHRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.33 11.25a4 4 0 0 0 0 1.5H7.67a4 4 0 0 0 0-1.5z" opacity={.4} />
        <path fillRule="evenodd" d="M4 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M20 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentHRegularDuotone.displayName = 'LineSegmentHRegularDuotone';

// Triple export pattern (lucide-react style)
export { LineSegmentHRegularDuotone, LineSegmentHRegularDuotone as LineSegmentHRegularDuotoneIcon, LineSegmentHRegularDuotone as SiLineSegmentHRegularDuotone };
export default LineSegmentHRegularDuotone;
export type { LineSegmentHRegularDuotoneProps };
