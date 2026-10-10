import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleLeftFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleLeftFill = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21.88 12c0 5.45-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13s9.88 4.42 9.88 9.87m-7.5-2.99c0-.94-1.08-1.46-1.82-.89l-3.84 3c-.58.44-.58 1.32 0 1.77l3.84 2.99c.74.57 1.81.04 1.81-.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleLeftFill.displayName = 'ChevronFullCircleLeftFill';

// Triple export pattern
export { ChevronFullCircleLeftFill, ChevronFullCircleLeftFill as ChevronFullCircleLeftFillIcon, ChevronFullCircleLeftFill as SiChevronFullCircleLeftFill };
export default ChevronFullCircleLeftFill;
export type { ChevronFullCircleLeftFillProps };
