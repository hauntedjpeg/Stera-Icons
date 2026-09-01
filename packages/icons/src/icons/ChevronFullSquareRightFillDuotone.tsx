import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullSquareRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullSquareRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullSquareRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-2.91 5.5A1.13 1.13 0 0 0 9.38 9V15c0 .93 1.07 1.46 1.81.89l3.84-3c.58-.44.58-1.32 0-1.77z" clipRule="evenodd" opacity={.4} />
        <path d="M9.38 9.01c0-.93 1.07-1.46 1.81-.89l3.84 3c.58.44.58 1.32 0 1.77l-3.84 2.99c-.74.57-1.81.04-1.81-.9z" />
    </IconBase>
  ))
);

ChevronFullSquareRightFillDuotone.displayName = 'ChevronFullSquareRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullSquareRightFillDuotone, ChevronFullSquareRightFillDuotone as ChevronFullSquareRightFillDuotoneIcon, ChevronFullSquareRightFillDuotone as SiChevronFullSquareRightFillDuotone };
export default ChevronFullSquareRightFillDuotone;
export type { ChevronFullSquareRightFillDuotoneProps };
