import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentRegularProps = Omit<IconBaseProps, 'children'>;

const LineSegmentRegular = memo(
  forwardRef<SVGSVGElement, LineSegmentRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18 2.25c2.07 0 3.75 1.68 3.75 3.75S20.07 9.75 18 9.75c-.76 0-1.48-.23-2.07-.62l-6.8 6.8q.61.9.62 2.07c0 2.07-1.68 3.75-3.75 3.75S2.25 20.07 2.25 18 3.93 14.25 6 14.25q1.16.02 2.07.62l6.8-6.8q-.61-.9-.62-2.07c0-2.07 1.68-3.75 3.75-3.75M6 15.75c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25m12-12c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentRegular.displayName = 'LineSegmentRegular';

// Triple export pattern
export { LineSegmentRegular, LineSegmentRegular as LineSegmentRegularIcon, LineSegmentRegular as SiLineSegmentRegular };
export default LineSegmentRegular;
export type { LineSegmentRegularProps };
