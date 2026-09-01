import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentBoldDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.55 8.03q.54.88 1.42 1.42l-6.52 6.52a4 4 0 0 0-1.42-1.42z" opacity={.4} />
        <path fillRule="evenodd" d="M6 14a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M18 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentBoldDuotone.displayName = 'LineSegmentBoldDuotone';

// Triple export pattern (lucide-react style)
export { LineSegmentBoldDuotone, LineSegmentBoldDuotone as LineSegmentBoldDuotoneIcon, LineSegmentBoldDuotone as SiLineSegmentBoldDuotone };
export default LineSegmentBoldDuotone;
export type { LineSegmentBoldDuotoneProps };
