import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleRightBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleRightBold = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.5 9.01c0-1.04 1.2-1.62 2.02-.99l3.84 3c.64.5.64 1.47 0 1.97l-3.84 2.99c-.82.63-2.02.05-2.02-1z" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleRightBold.displayName = 'ChevronFullCircleRightBold';

// Triple export pattern
export { ChevronFullCircleRightBold, ChevronFullCircleRightBold as ChevronFullCircleRightBoldIcon, ChevronFullCircleRightBold as SiChevronFullCircleRightBold };
export default ChevronFullCircleRightBold;
export type { ChevronFullCircleRightBoldProps };
