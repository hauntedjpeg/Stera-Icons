import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentRegularDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.87 8.07q.43.63 1.06 1.06l-6.8 6.8q-.42-.64-1.06-1.06z" opacity={.4} />
        <path fillRule="evenodd" d="M6 14.25c2.07 0 3.75 1.68 3.75 3.75S8.07 21.75 6 21.75 2.25 20.07 2.25 18 3.93 14.25 6 14.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25M18 2.25c2.07 0 3.75 1.68 3.75 3.75S20.07 9.75 18 9.75 14.25 8.07 14.25 6 15.93 2.25 18 2.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentRegularDuotone.displayName = 'LineSegmentRegularDuotone';

// Triple export pattern
export { LineSegmentRegularDuotone, LineSegmentRegularDuotone as LineSegmentRegularDuotoneIcon, LineSegmentRegularDuotone as SiLineSegmentRegularDuotone };
export default LineSegmentRegularDuotone;
export type { LineSegmentRegularDuotoneProps };
