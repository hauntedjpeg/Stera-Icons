import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleLeftFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleLeftFill = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21.88 12a9.88 9.88 0 1 1-19.76 0 9.88 9.88 0 0 1 19.76 0m-7.5-2.99c0-.94-1.08-1.46-1.82-.89l-3.84 3a1.12 1.12 0 0 0 0 1.77l3.84 2.99c.74.57 1.81.04 1.81-.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleLeftFill.displayName = 'ChevronFullCircleLeftFill';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleLeftFill, ChevronFullCircleLeftFill as ChevronFullCircleLeftFillIcon, ChevronFullCircleLeftFill as SiChevronFullCircleLeftFill };
export default ChevronFullCircleLeftFill;
export type { ChevronFullCircleLeftFillProps };
