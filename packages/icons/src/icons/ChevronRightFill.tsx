import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronRightFillProps = Omit<IconBaseProps, 'children'>;

const ChevronRightFill = memo(
  forwardRef<SVGSVGElement, ChevronRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.67 4.2c.32-.14.7-.07.95.18l7 7q.24.26.25.62 0 .36-.25.62l-7 7c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81V5c0-.35.2-.67.54-.8" />
    </IconBase>
  ))
);

ChevronRightFill.displayName = 'ChevronRightFill';

// Triple export pattern
export { ChevronRightFill, ChevronRightFill as ChevronRightFillIcon, ChevronRightFill as SiChevronRightFill };
export default ChevronRightFill;
export type { ChevronRightFillProps };
