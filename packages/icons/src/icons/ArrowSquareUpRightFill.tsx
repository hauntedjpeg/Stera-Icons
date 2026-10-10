import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareUpRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareUpRightFill = memo(
  forwardRef<SVGSVGElement, ArrowSquareUpRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zM9.17 8.3c-.48 0-.87.39-.87.87s.39.88.87.88h3.55L8.55 14.2c-.34.34-.34.9 0 1.24s.9.34 1.24 0l4.16-4.17v3.55c0 .48.4.87.88.87s.87-.39.87-.87V9.17q0-.35-.25-.62-.26-.25-.62-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowSquareUpRightFill.displayName = 'ArrowSquareUpRightFill';

// Triple export pattern
export { ArrowSquareUpRightFill, ArrowSquareUpRightFill as ArrowSquareUpRightFillIcon, ArrowSquareUpRightFill as SiArrowSquareUpRightFill };
export default ArrowSquareUpRightFill;
export type { ArrowSquareUpRightFillProps };
