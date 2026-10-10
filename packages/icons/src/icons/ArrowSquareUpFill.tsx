import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareUpFillProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareUpFill = memo(
  forwardRef<SVGSVGElement, ArrowSquareUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zM12 7.13q-.36 0-.62.25l-4 4c-.34.34-.34.9 0 1.24s.9.34 1.24 0l2.5-2.5V16c0 .48.4.88.88.88s.88-.4.88-.88v-5.89l2.5 2.5c.34.35.9.35 1.24 0 .34-.33.34-.89 0-1.23l-4-4q-.26-.25-.62-.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowSquareUpFill.displayName = 'ArrowSquareUpFill';

// Triple export pattern
export { ArrowSquareUpFill, ArrowSquareUpFill as ArrowSquareUpFillIcon, ArrowSquareUpFill as SiArrowSquareUpFill };
export default ArrowSquareUpFill;
export type { ArrowSquareUpFillProps };
