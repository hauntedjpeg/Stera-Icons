import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentRegularProps = Omit<IconBaseProps, 'children'>;

const LineSegmentRegular = memo(
  forwardRef<SVGSVGElement, LineSegmentRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18 2.25a3.75 3.75 0 1 1-2.07 6.88l-6.8 6.8q.61.9.62 2.07a3.75 3.75 0 1 1-1.68-3.13l6.8-6.8q-.61-.9-.62-2.07A3.75 3.75 0 0 1 18 2.25M6 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m12-12a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentRegular.displayName = 'LineSegmentRegular';

// Triple export pattern (lucide-react style)
export { LineSegmentRegular, LineSegmentRegular as LineSegmentRegularIcon, LineSegmentRegular as SiLineSegmentRegular };
export default LineSegmentRegular;
export type { LineSegmentRegularProps };
