import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVFillDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="line-segment-v-fill-duotone" {...props}>
      <path d="M12.88 16.24a3.4 3.4 0 0 0-1.76 0V7.76a3.4 3.4 0 0 0 1.76 0z" opacity={.4} />
        <path d="M12 16.13a3.37 3.37 0 1 1 0 6.74 3.37 3.37 0 0 1 0-6.75M12 1.13a3.37 3.37 0 1 1 0 6.74 3.37 3.37 0 0 1 0-6.74" />
    </IconBase>
  ))
);

LineSegmentVFillDuotone.displayName = 'LineSegmentVFillDuotone';

// Triple export pattern (lucide-react style)
export { LineSegmentVFillDuotone, LineSegmentVFillDuotone as LineSegmentVFillDuotoneIcon, LineSegmentVFillDuotone as SiLineSegmentVFillDuotone };
export default LineSegmentVFillDuotone;
export type { LineSegmentVFillDuotoneProps };
