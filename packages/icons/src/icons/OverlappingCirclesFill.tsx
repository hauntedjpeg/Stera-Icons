import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OverlappingCirclesFillProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesFill = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.5 4.5c1.26 0 2.46.31 3.5.87C9.62 6.62 8 9.12 8 12s1.62 5.38 4 6.63q-1.6.86-3.5.87C4.36 19.5 1 16.14 1 12s3.36-7.5 7.5-7.5M15.5 4.5c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5q-1.9-.01-3.5-.87c2.38-1.25 4-3.75 4-6.63s-1.62-5.38-4-6.63q1.6-.85 3.5-.87" />
    </IconBase>
  ))
);

OverlappingCirclesFill.displayName = 'OverlappingCirclesFill';

// Triple export pattern
export { OverlappingCirclesFill, OverlappingCirclesFill as OverlappingCirclesFillIcon, OverlappingCirclesFill as SiOverlappingCirclesFill };
export default OverlappingCirclesFill;
export type { OverlappingCirclesFillProps };
