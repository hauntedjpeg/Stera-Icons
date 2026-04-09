import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleRightFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleRightFill = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-right-fill" {...props}>
      <path fillRule="evenodd" d="M2.13 12a9.88 9.88 0 1 0 19.75 0 9.88 9.88 0 0 0-19.75 0m7.5-2.99c0-.94 1.07-1.46 1.81-.89l3.84 3c.58.44.58 1.32 0 1.77l-3.84 2.99c-.74.57-1.81.04-1.81-.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleRightFill.displayName = 'ChevronFullCircleRightFill';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleRightFill, ChevronFullCircleRightFill as ChevronFullCircleRightFillIcon, ChevronFullCircleRightFill as SiChevronFullCircleRightFill };
export default ChevronFullCircleRightFill;
export type { ChevronFullCircleRightFillProps };
