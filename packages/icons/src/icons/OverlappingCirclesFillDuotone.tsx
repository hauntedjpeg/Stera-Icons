import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OverlappingCirclesFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesFillDuotone = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.5 4.5c1.26 0 2.46.31 3.5.87-2.06 1.08-3.55 3.1-3.91 5.49Q8 11.4 8 12c0 2.88 1.62 5.38 4 6.63q-1.6.86-3.5.87C4.36 19.5 1 16.14 1 12s3.36-7.5 7.5-7.5M15.5 4.5c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5c-1.26 0-2.46-.31-3.5-.87 2.38-1.25 4-3.75 4-6.63q0-.58-.09-1.14c-.36-2.39-1.85-4.4-3.91-5.5q1.6-.84 3.5-.86" opacity={0.4} />
        <path d="M12 5.37c2.38 1.25 4 3.75 4 6.63s-1.62 5.38-4 6.63C9.62 17.38 8 14.88 8 12s1.62-5.38 4-6.63" />
    </IconBase>
  ))
);

OverlappingCirclesFillDuotone.displayName = 'OverlappingCirclesFillDuotone';

// Triple export pattern
export { OverlappingCirclesFillDuotone, OverlappingCirclesFillDuotone as OverlappingCirclesFillDuotoneIcon, OverlappingCirclesFillDuotone as SiOverlappingCirclesFillDuotone };
export default OverlappingCirclesFillDuotone;
export type { OverlappingCirclesFillDuotoneProps };
