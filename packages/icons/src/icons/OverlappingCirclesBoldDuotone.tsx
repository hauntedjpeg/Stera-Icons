import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OverlappingCirclesBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesBoldDuotone = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.5 4.5C4.36 4.5 1 7.86 1 12s3.36 7.5 7.5 7.5c1.26 0 2.46-.31 3.5-.86q-1.04-.56-1.86-1.39-.78.24-1.64.25C5.46 17.5 3 15.04 3 12s2.46-5.5 5.5-5.5q.86 0 1.64.25.83-.83 1.86-1.38c-1.04-.56-2.24-.87-3.5-.87M12 16.24c1.22-1 2-2.53 2-4.24 0-1.7-.78-3.23-2-4.24q.82-.69 1.86-1.01C15.18 8.1 16 9.95 16 12s-.82 3.9-2.14 5.25q-1.04-.33-1.86-1" clipRule="evenodd" />
        <path fillRule="evenodd" d="M15.5 4.5C11.36 4.5 8 7.86 8 12s3.36 7.5 7.5 7.5S23 16.14 23 12s-3.36-7.5-7.5-7.5m0 2c3.04 0 5.5 2.46 5.5 5.5s-2.46 5.5-5.5 5.5S10 15.04 10 12s2.46-5.5 5.5-5.5" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

OverlappingCirclesBoldDuotone.displayName = 'OverlappingCirclesBoldDuotone';

// Triple export pattern
export { OverlappingCirclesBoldDuotone, OverlappingCirclesBoldDuotone as OverlappingCirclesBoldDuotoneIcon, OverlappingCirclesBoldDuotone as SiOverlappingCirclesBoldDuotone };
export default OverlappingCirclesBoldDuotone;
export type { OverlappingCirclesBoldDuotoneProps };
