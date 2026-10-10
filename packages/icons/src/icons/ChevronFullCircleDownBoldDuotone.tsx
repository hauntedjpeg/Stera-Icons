import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M14.99 9.5c1.04 0 1.62 1.2.99 2.02l-3 3.84c-.5.64-1.47.64-1.97 0l-2.99-3.84c-.63-.82-.05-2.02 1-2.02z" />
    </IconBase>
  ))
);

ChevronFullCircleDownBoldDuotone.displayName = 'ChevronFullCircleDownBoldDuotone';

// Triple export pattern
export { ChevronFullCircleDownBoldDuotone, ChevronFullCircleDownBoldDuotone as ChevronFullCircleDownBoldDuotoneIcon, ChevronFullCircleDownBoldDuotone as SiChevronFullCircleDownBoldDuotone };
export default ChevronFullCircleDownBoldDuotone;
export type { ChevronFullCircleDownBoldDuotoneProps };
