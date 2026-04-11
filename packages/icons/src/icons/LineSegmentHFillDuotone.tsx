import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentHFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHFillDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentHFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.24 11.13a3.4 3.4 0 0 0 0 1.74H7.76a3.4 3.4 0 0 0 0-1.74z" opacity={.4} />
        <path d="M4.5 8.63a3.37 3.37 0 1 1 0 6.74 3.37 3.37 0 0 1 0-6.74M19.5 8.63a3.37 3.37 0 1 1 0 6.74 3.37 3.37 0 0 1 0-6.74" />
    </IconBase>
  ))
);

LineSegmentHFillDuotone.displayName = 'LineSegmentHFillDuotone';

// Triple export pattern (lucide-react style)
export { LineSegmentHFillDuotone, LineSegmentHFillDuotone as LineSegmentHFillDuotoneIcon, LineSegmentHFillDuotone as SiLineSegmentHFillDuotone };
export default LineSegmentHFillDuotone;
export type { LineSegmentHFillDuotoneProps };
