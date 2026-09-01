import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullSquareRightFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullSquareRightFill = memo(
  forwardRef<SVGSVGElement, ChevronFullSquareRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-2.91 5.5A1.12 1.12 0 0 0 9.38 9V15c0 .93 1.07 1.46 1.81.89l3.84-3c.58-.44.58-1.32 0-1.77z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullSquareRightFill.displayName = 'ChevronFullSquareRightFill';

// Triple export pattern (lucide-react style)
export { ChevronFullSquareRightFill, ChevronFullSquareRightFill as ChevronFullSquareRightFillIcon, ChevronFullSquareRightFill as SiChevronFullSquareRightFill };
export default ChevronFullSquareRightFill;
export type { ChevronFullSquareRightFillProps };
