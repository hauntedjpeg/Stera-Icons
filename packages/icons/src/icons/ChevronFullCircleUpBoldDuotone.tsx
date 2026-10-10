import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M11.01 8.64c.5-.64 1.48-.64 1.98 0l2.99 3.84c.63.82.05 2.02-1 2.02H9.02c-1.04 0-1.62-1.2-.99-2.02z" />
    </IconBase>
  ))
);

ChevronFullCircleUpBoldDuotone.displayName = 'ChevronFullCircleUpBoldDuotone';

// Triple export pattern
export { ChevronFullCircleUpBoldDuotone, ChevronFullCircleUpBoldDuotone as ChevronFullCircleUpBoldDuotoneIcon, ChevronFullCircleUpBoldDuotone as SiChevronFullCircleUpBoldDuotone };
export default ChevronFullCircleUpBoldDuotone;
export type { ChevronFullCircleUpBoldDuotoneProps };
