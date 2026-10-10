import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m14.76 12-4.88 4.89V7.1z" opacity={.4} />
        <path fillRule="evenodd" d="M8.67 4.2c.32-.14.7-.07.95.18l7 7c.34.34.34.9 0 1.24l-7 7c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81V5c0-.35.2-.67.54-.8m1.2 12.69 4.9-4.89-4.9-4.89z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronRightFillDuotone.displayName = 'ChevronRightFillDuotone';

// Triple export pattern
export { ChevronRightFillDuotone, ChevronRightFillDuotone as ChevronRightFillDuotoneIcon, ChevronRightFillDuotone as SiChevronRightFillDuotone };
export default ChevronRightFillDuotone;
export type { ChevronRightFillDuotoneProps };
