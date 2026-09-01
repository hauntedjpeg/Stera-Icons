import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentRegularDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.87 8.07q.43.63 1.06 1.06l-6.8 6.8a4 4 0 0 0-1.06-1.06z" opacity={.4} />
        <path fillRule="evenodd" d="M6 14.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M18 2.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentRegularDuotone.displayName = 'LineSegmentRegularDuotone';

// Triple export pattern (lucide-react style)
export { LineSegmentRegularDuotone, LineSegmentRegularDuotone as LineSegmentRegularDuotoneIcon, LineSegmentRegularDuotone as SiLineSegmentRegularDuotone };
export default LineSegmentRegularDuotone;
export type { LineSegmentRegularDuotoneProps };
