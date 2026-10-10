import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OverlappingCirclesBoldProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesBold = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.5 4.5c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5q-1.9-.01-3.5-.87-1.6.86-3.5.87C4.36 19.5 1 16.14 1 12s3.36-7.5 7.5-7.5c1.26 0 2.46.31 3.5.87q1.6-.85 3.5-.87m-7 2C5.46 6.5 3 8.96 3 12s2.46 5.5 5.5 5.5q.86 0 1.64-.25C8.82 15.9 8 14.05 8 12s.82-3.9 2.14-5.25Q9.36 6.5 8.5 6.5m7 0q-.86 0-1.65.25C15.18 8.1 16 9.95 16 12s-.82 3.9-2.15 5.25q.79.25 1.65.25c3.04 0 5.5-2.46 5.5-5.5s-2.46-5.5-5.5-5.5M12 7.76c-1.22 1-2 2.53-2 4.24 0 1.7.78 3.23 2 4.24 1.22-1 2-2.53 2-4.24 0-1.7-.78-3.23-2-4.24" clipRule="evenodd" />
    </IconBase>
  ))
);

OverlappingCirclesBold.displayName = 'OverlappingCirclesBold';

// Triple export pattern
export { OverlappingCirclesBold, OverlappingCirclesBold as OverlappingCirclesBoldIcon, OverlappingCirclesBold as SiOverlappingCirclesBold };
export default OverlappingCirclesBold;
export type { OverlappingCirclesBoldProps };
