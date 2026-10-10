import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 6.5q-.36 0-.62.25l-4 4c-.34.34-.34.9 0 1.24s.9.34 1.24 0L12 10.74l3.38 3.38c.34.34.9.34 1.24 0s.34-.9 0-1.24l-4-4q-.26-.24-.62-.26" clipRule="evenodd" opacity={.4} />
        <path d="M12 8.63q.36 0 .62.25l4 4c.34.34.34.9 0 1.24s-.9.34-1.24 0L12 10.74l-3.38 3.38c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l4-4q.26-.24.62-.26" />
    </IconBase>
  ))
);

ChevronCircleUpFillDuotone.displayName = 'ChevronCircleUpFillDuotone';

// Triple export pattern
export { ChevronCircleUpFillDuotone, ChevronCircleUpFillDuotone as ChevronCircleUpFillDuotoneIcon, ChevronCircleUpFillDuotone as SiChevronCircleUpFillDuotone };
export default ChevronCircleUpFillDuotone;
export type { ChevronCircleUpFillDuotoneProps };
