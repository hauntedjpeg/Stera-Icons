import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullSquareUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullSquareUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullSquareUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-1.21 6.34a1.12 1.12 0 0 0-1.78 0L8.12 12.8c-.57.74-.04 1.81.9 1.81h5.97c.93 0 1.46-1.07.89-1.81z" clipRule="evenodd" opacity={.4} />
        <path d="M11.11 8.97a1.12 1.12 0 0 1 1.78 0l2.99 3.84c.57.74.04 1.81-.9 1.82H9.02a1.12 1.12 0 0 1-.89-1.82z" />
    </IconBase>
  ))
);

ChevronFullSquareUpFillDuotone.displayName = 'ChevronFullSquareUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullSquareUpFillDuotone, ChevronFullSquareUpFillDuotone as ChevronFullSquareUpFillDuotoneIcon, ChevronFullSquareUpFillDuotone as SiChevronFullSquareUpFillDuotone };
export default ChevronFullSquareUpFillDuotone;
export type { ChevronFullSquareUpFillDuotoneProps };
