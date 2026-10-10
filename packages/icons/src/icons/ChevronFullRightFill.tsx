import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullRightFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullRightFill = memo(
  forwardRef<SVGSVGElement, ChevronFullRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.67 4.2c.32-.14.7-.07.95.18l7 7q.24.26.25.62 0 .36-.25.62l-7 7c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81V5c0-.35.2-.67.54-.8" />
    </IconBase>
  ))
);

ChevronFullRightFill.displayName = 'ChevronFullRightFill';

// Triple export pattern
export { ChevronFullRightFill, ChevronFullRightFill as ChevronFullRightFillIcon, ChevronFullRightFill as SiChevronFullRightFill };
export default ChevronFullRightFill;
export type { ChevronFullRightFillProps };
