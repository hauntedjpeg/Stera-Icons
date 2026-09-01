import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullSquareDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullSquareDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullSquareDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM9.01 9.38a1.13 1.13 0 0 0-.89 1.81l3 3.84c.44.58 1.32.58 1.77 0l2.99-3.84c.57-.74.04-1.81-.9-1.81z" clipRule="evenodd" opacity={.4} />
        <path d="M14.99 9.38c.93 0 1.46 1.07.89 1.81l-3 3.84c-.44.58-1.32.58-1.77 0L8.12 11.2a1.12 1.12 0 0 1 .9-1.81z" />
    </IconBase>
  ))
);

ChevronFullSquareDownFillDuotone.displayName = 'ChevronFullSquareDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullSquareDownFillDuotone, ChevronFullSquareDownFillDuotone as ChevronFullSquareDownFillDuotoneIcon, ChevronFullSquareDownFillDuotone as SiChevronFullSquareDownFillDuotone };
export default ChevronFullSquareDownFillDuotone;
export type { ChevronFullSquareDownFillDuotoneProps };
