import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentHFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHFillDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentHFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.2 11.25a4 4 0 0 0 0 1.5H7.8a4 4 0 0 0 0-1.5z" opacity={.4} />
        <path d="M4 8.13a3.88 3.88 0 1 1 0 7.75 3.88 3.88 0 0 1 0-7.76M20 8.13a3.88 3.88 0 1 1 0 7.75 3.88 3.88 0 0 1 0-7.76" />
    </IconBase>
  ))
);

LineSegmentHFillDuotone.displayName = 'LineSegmentHFillDuotone';

// Triple export pattern (lucide-react style)
export { LineSegmentHFillDuotone, LineSegmentHFillDuotone as LineSegmentHFillDuotoneIcon, LineSegmentHFillDuotone as SiLineSegmentHFillDuotone };
export default LineSegmentHFillDuotone;
export type { LineSegmentHFillDuotoneProps };
