import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullSquareDownFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullSquareDownFill = memo(
  forwardRef<SVGSVGElement, ChevronFullSquareDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM9.01 9.38a1.12 1.12 0 0 0-.89 1.81l3 3.84c.44.58 1.32.58 1.77 0l2.99-3.84c.57-.74.04-1.81-.9-1.81z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullSquareDownFill.displayName = 'ChevronFullSquareDownFill';

// Triple export pattern (lucide-react style)
export { ChevronFullSquareDownFill, ChevronFullSquareDownFill as ChevronFullSquareDownFillIcon, ChevronFullSquareDownFill as SiChevronFullSquareDownFill };
export default ChevronFullSquareDownFill;
export type { ChevronFullSquareDownFillProps };
