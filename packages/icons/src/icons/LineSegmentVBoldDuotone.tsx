import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentVBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVBoldDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentVBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 16.13a4 4 0 0 0-2 0V7.87a4 4 0 0 0 2 0z" opacity={.4} />
        <path fillRule="evenodd" d="M12 16a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M12 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentVBoldDuotone.displayName = 'LineSegmentVBoldDuotone';

// Triple export pattern (lucide-react style)
export { LineSegmentVBoldDuotone, LineSegmentVBoldDuotone as LineSegmentVBoldDuotoneIcon, LineSegmentVBoldDuotone as SiLineSegmentVBoldDuotone };
export default LineSegmentVBoldDuotone;
export type { LineSegmentVBoldDuotoneProps };
