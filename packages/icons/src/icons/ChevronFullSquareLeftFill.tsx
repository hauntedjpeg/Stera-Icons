import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullSquareLeftFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullSquareLeftFill = memo(
  forwardRef<SVGSVGElement, ChevronFullSquareLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM14.63 9c0-.94-1.08-1.46-1.82-.89l-3.84 3a1.12 1.12 0 0 0 0 1.77l3.84 2.99c.74.57 1.81.04 1.81-.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullSquareLeftFill.displayName = 'ChevronFullSquareLeftFill';

// Triple export pattern (lucide-react style)
export { ChevronFullSquareLeftFill, ChevronFullSquareLeftFill as ChevronFullSquareLeftFillIcon, ChevronFullSquareLeftFill as SiChevronFullSquareLeftFill };
export default ChevronFullSquareLeftFill;
export type { ChevronFullSquareLeftFillProps };
