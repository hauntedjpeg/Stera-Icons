import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullSquareUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullSquareUpFill = memo(
  forwardRef<SVGSVGElement, ChevronFullSquareUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-1.21 6.34a1.12 1.12 0 0 0-1.78 0L8.12 12.8c-.57.74-.05 1.81.9 1.81h5.97c.93 0 1.46-1.07.89-1.81z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullSquareUpFill.displayName = 'ChevronFullSquareUpFill';

// Triple export pattern (lucide-react style)
export { ChevronFullSquareUpFill, ChevronFullSquareUpFill as ChevronFullSquareUpFillIcon, ChevronFullSquareUpFill as SiChevronFullSquareUpFill };
export default ChevronFullSquareUpFill;
export type { ChevronFullSquareUpFillProps };
