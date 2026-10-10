import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullSquareRightFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullSquareRightFill = memo(
  forwardRef<SVGSVGElement, ChevronFullSquareRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zm-2.91 5.5c-.74-.58-1.81-.06-1.81.88V15c0 .93 1.07 1.46 1.81.89l3.84-3c.58-.44.58-1.32 0-1.77z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullSquareRightFill.displayName = 'ChevronFullSquareRightFill';

// Triple export pattern
export { ChevronFullSquareRightFill, ChevronFullSquareRightFill as ChevronFullSquareRightFillIcon, ChevronFullSquareRightFill as SiChevronFullSquareRightFill };
export default ChevronFullSquareRightFill;
export type { ChevronFullSquareRightFillProps };
