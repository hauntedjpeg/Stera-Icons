import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentHBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHBoldDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentHBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.13 11a4 4 0 0 0 0 2H7.87a4 4 0 0 0 0-2z" opacity={.4} />
        <path fillRule="evenodd" d="M4 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M20 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentHBoldDuotone.displayName = 'LineSegmentHBoldDuotone';

// Triple export pattern (lucide-react style)
export { LineSegmentHBoldDuotone, LineSegmentHBoldDuotone as LineSegmentHBoldDuotoneIcon, LineSegmentHBoldDuotone as SiLineSegmentHBoldDuotone };
export default LineSegmentHBoldDuotone;
export type { LineSegmentHBoldDuotoneProps };
