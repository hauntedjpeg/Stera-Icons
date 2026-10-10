import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentBoldDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.55 8.03q.54.88 1.42 1.42l-6.52 6.52q-.54-.88-1.42-1.42z" opacity={.4} />
        <path fillRule="evenodd" d="M6 14c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M18 2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentBoldDuotone.displayName = 'LineSegmentBoldDuotone';

// Triple export pattern
export { LineSegmentBoldDuotone, LineSegmentBoldDuotone as LineSegmentBoldDuotoneIcon, LineSegmentBoldDuotone as SiLineSegmentBoldDuotone };
export default LineSegmentBoldDuotone;
export type { LineSegmentBoldDuotoneProps };
