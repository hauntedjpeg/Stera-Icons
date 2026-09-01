import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentVRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVRegularDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentVRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 16.32a4 4 0 0 0-1.5 0V7.67a4 4 0 0 0 1.5 0z" opacity={.4} />
        <path fillRule="evenodd" d="M12 16.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M12 .25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentVRegularDuotone.displayName = 'LineSegmentVRegularDuotone';

// Triple export pattern (lucide-react style)
export { LineSegmentVRegularDuotone, LineSegmentVRegularDuotone as LineSegmentVRegularDuotoneIcon, LineSegmentVRegularDuotone as SiLineSegmentVRegularDuotone };
export default LineSegmentVRegularDuotone;
export type { LineSegmentVRegularDuotoneProps };
